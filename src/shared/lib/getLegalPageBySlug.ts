import { client } from './sanity';

export async function getLegalPageBySlug(slug: string) {
  const query = `*[_type == "legalPage" && slug.current == $slug][0]{
    title,
    content
  }`;
  return client.fetch(query, { slug });
} 