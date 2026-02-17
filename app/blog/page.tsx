import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogListingClient } from "@/components/blog/blog-listing-client";

export const metadata: Metadata = {
  title: "Blog | Jashanpreet Singh",
  description:
    "Thoughts on web development, physics, math, and building things with code.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-12">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
          <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Thoughts on web development, physics, math, and building things with
          code.
        </p>
      </div>

      <BlogListingClient posts={posts} tags={tags} />
    </div>
  );
}
