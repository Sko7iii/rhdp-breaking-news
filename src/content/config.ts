import { defineCollection, z } from 'astro:content';

const actualitesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    author: z.string(),
    tags: z.array(z.string()).optional().default([]),
    image: z.string(),
  }),
});

const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    youtube: z.string(),
  }),
});

export const collections = {
  'actualites': actualitesCollection,
  'videos': videosCollection,
}; 