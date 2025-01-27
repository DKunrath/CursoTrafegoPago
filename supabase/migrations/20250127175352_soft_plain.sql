/*
  # Create users profile table

  1. New Tables
    - `users_profile`
      - `id` (uuid, primary key, references auth.users)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `users_profile` table
    - Add policies for authenticated users to read/update their own data
*/

CREATE TABLE IF NOT EXISTS users_profile (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name text,
  email text,
  phone text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users_profile ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON users_profile
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users_profile
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON users_profile
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);