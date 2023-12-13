// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const itemSchema = z.object({
  additionalResources: z
    .array(
      z.object({
        title: z.string(),
        link: z.string(),
      }),
    )
    .optional(),
  index: z.number().optional(),
  subTitle: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
});

export type ItemSchema = z.infer<typeof itemSchema>;

// Define a `type` and `schema` for each collection
const basicsCollection = defineCollection({
  type: "content",
  schema: itemSchema,
});
const designerCollection = defineCollection({
  type: "content",
  schema: itemSchema,
});
const developerCollection = defineCollection({
  type: "content",
  schema: itemSchema,
});
const pmCollection = defineCollection({
  type: "content",
  schema: itemSchema,
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  basics: basicsCollection,
  design: designerCollection,
  dev: developerCollection,
  pm: pmCollection,
};
