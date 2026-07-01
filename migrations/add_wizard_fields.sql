-- Add wizard preference columns to user_state table
-- Run this once in Supabase SQL Editor

ALTER TABLE user_state
  ADD COLUMN IF NOT EXISTS wizard_excluded jsonb DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS wizard_style    text  DEFAULT 'simple';
