import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://jwgheecejfesvckgkdmo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Z2hlZWNlamZlc3Zja2drZG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MzcxNDAsImV4cCI6MjA1MTUxMzE0MH0.2Uw368D0wBQTlyGFDEes8fT50OKB3sUbkBFdsvmhKgg'
)

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  publish_date: string;  // ISO string format
  content: string;
  seo_image_src: string;
  seo_image_alt: string;
  preview_image_src: string;
  features?: ProjectFeature[];
  objectives?: ProjectObjective[];
  testimonials?: ProjectTestimonial[];
  technologies?: ProjectTechnology[];
}

export type ProjectFeature = {
  id: string
  title: string
  description: string
  order_index: number
}