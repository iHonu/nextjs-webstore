import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'k769h380',
  dataset: 'production',
  apiVersion: '2024-01-25',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export default async function categoryFetch() {
  const categories = await client.fetch(`*[_type == "category"] {name}`);
  return categories;
}

export async function heroImagesFetch() {
  const heroImages = await client.fetch('*[_type == "heroimages"][0]');
  return heroImages;
}
