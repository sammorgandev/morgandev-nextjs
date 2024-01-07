// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post"]{
    title,
    _id,
    "author": author->{name, image, role, slug},
    slug,
    "mainImage": mainImage.asset->url,
    categories[]->{
      title,
      slug
    },
    body,
    publishedAt
  }`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
