import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    fullDescription: z.string(),
    technologies: z.array(z.string()),
    url: z.string().url(),
    urlType: z.enum(['video', 'presentation']),
    videoThumbnail: z.string().optional(),
    links: z.object({
      live: z.string().url().optional(),
      github: z.string().url().optional(),
      other: z.array(z.object({
        label: z.string(),
        url: z.string().url()
      })).optional()
    }),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    publishedAt: z.string().transform(str => new Date(str))
  })
});

export const collections = {
  projects: projectsCollection
};