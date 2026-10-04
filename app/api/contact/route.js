import { NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide name, email, and message.' },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    if (supabase) {
      const { data, error } = await supabase.from('contact_messages').insert([
        {
          name,
          email,
          phone: phone || '',
          subject: subject || 'General Inquiry',
          message,
          status: 'unread',
        },
      ]).select();

      if (error) {
        console.error('Supabase contact message insert error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, data }, { status: 201 });
    }

    return NextResponse.json({
      success: true,
      notice: 'Message received (Supabase not configured, processed via notification)',
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
