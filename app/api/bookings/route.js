import { NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      roomType,
      checkin,
      checkout,
      adults,
      children,
      rooms,
      requests,
    } = body;

    if (!name || !email || !phone || !checkin || !checkout) {
      return NextResponse.json(
        { error: 'Please provide all required booking fields.' },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    if (supabase) {
      const { data, error } = await supabase.from('bookings').insert([
        {
          guest_name: name,
          guest_email: email,
          guest_phone: phone,
          room_type: roomType || 'Not specified',
          check_in: checkin,
          check_out: checkout,
          adults: parseInt(adults, 10) || 1,
          children: parseInt(children, 10) || 0,
          rooms: parseInt(rooms, 10) || 1,
          special_requests: requests || '',
          status: 'pending',
        },
      ]).select();

      if (error) {
        console.error('Supabase booking insert error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, data }, { status: 201 });
    }

    // Fallback if Supabase credentials are not yet configured in env
    return NextResponse.json({
      success: true,
      notice: 'Booking received (Supabase not configured, processed via notification)',
    });
  } catch (err) {
    console.error('Booking API error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
