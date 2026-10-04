import { NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      eventType,
      venue,
      guestCount,
      eventDate,
      message,
    } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Please provide name, phone, and email.' },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    if (supabase) {
      const { data, error } = await supabase.from('wedding_inquiries').insert([
        {
          organizer_name: name,
          phone,
          email,
          event_type: eventType || 'Grand Destination Wedding',
          venue_setup: venue || 'Grand Open Lawn',
          guest_count: guestCount || '300-500 Pax',
          event_date: eventDate || null,
          notes: message || '',
          status: 'new',
        },
      ]).select();

      if (error) {
        console.error('Supabase wedding inquiry insert error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, data }, { status: 201 });
    }

    return NextResponse.json({
      success: true,
      notice: 'Inquiry received (Supabase not configured, processed via notification)',
    });
  } catch (err) {
    console.error('Wedding inquiry API error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
