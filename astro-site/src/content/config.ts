import { defineCollection, z } from "astro:content";

/* POSTS */
const posts = defineCollection({
  schema: z.object({
      title: z.string(),
          summary: z.string(),
              author: z.string(),
                  publishDate: z.date(),
                      draft: z.boolean().default(false),
                        }),
                        });

                        /* PAGES */
                        const pages = defineCollection({
                          schema: z.object({
                              title: z.string(),
                                  order: z.number().optional(),
                                    }),
                                    });

                                    /* EVENTS */
                                    const events = defineCollection({
                                      schema: z.object({
                                          title: z.string(),
                                              eventDate: z.date(),
                                                  startTime: z.string(),
                                                      endTime: z.string(),
                                                          location: z.string(),
                                                              featured: z.boolean().default(false),
                                                                }),
                                                                });

                                                                export const collections = {
                                                                  posts,
                                                                    pages,
                                                                      events,
                                                                      };