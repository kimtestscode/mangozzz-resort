-- =========================================================================
-- MANGOZZZ MAGICAL WORLD RESORT — SUPABASE DATABASE SCHEMA
-- Copy and paste this into your Supabase Dashboard -> SQL Editor and Run.
-- =========================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. ROOM BOOKINGS TABLE
create table if not exists public.bookings (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  guest_name text not null,
  guest_email text not null,
  guest_phone text not null,
  room_type text not null,
  check_in date not null,
  check_out date not null,
  adults integer default 1,
  children integer default 0,
  rooms integer default 1,
  special_requests text,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed'))
);

-- Index for fast queries
create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_guest_email_idx on public.bookings (guest_email);

-- 2. WEDDING & EVENT INQUIRIES TABLE
create table if not exists public.wedding_inquiries (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  organizer_name text not null,
  phone text not null,
  email text not null,
  event_type text not null,
  venue_setup text not null,
  guest_count text not null,
  event_date text,
  notes text,
  status text default 'new' check (status in ('new', 'contacted', 'recce_scheduled', 'booked', 'closed'))
);

-- Index for fast queries
create index if not exists wedding_inquiries_created_at_idx on public.wedding_inquiries (created_at desc);

-- 3. CONTACT & GENERAL MESSAGES TABLE
create table if not exists public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text default 'unread' check (status in ('unread', 'read', 'responded'))
);

-- Index for fast queries
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Allows anonymous public inserts from website visitors,
-- while restricting reading/updating to authenticated dashboard staff.
-- =========================================================================

-- Enable RLS
alter table public.bookings enable row level security;
alter table public.wedding_inquiries enable row level security;
alter table public.contact_messages enable row level security;

-- Public Insert Policies (Anyone can submit a booking/inquiry on the website)
create policy "Allow public anonymous inserts for bookings"
  on public.bookings for insert
  with check (true);

create policy "Allow public anonymous inserts for wedding_inquiries"
  on public.wedding_inquiries for insert
  with check (true);

create policy "Allow public anonymous inserts for contact_messages"
  on public.contact_messages for insert
  with check (true);

-- Authenticated Read Policies (Only logged-in admin users can view the data in Supabase)
create policy "Allow authenticated users to read bookings"
  on public.bookings for select
  to authenticated
  using (true);

create policy "Allow authenticated users to read wedding_inquiries"
  on public.wedding_inquiries for select
  to authenticated
  using (true);

create policy "Allow authenticated users to read contact_messages"
  on public.contact_messages for select
  to authenticated
  using (true);
