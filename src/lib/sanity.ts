import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'YOUR_PROJECT_ID', // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2024-03-07',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
} 