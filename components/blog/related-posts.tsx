import { BlogCard } from "./blog-card";
import type { Post } from "@/lib/blog";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-10">
      <h2 className="mb-6 font-heading text-xl font-bold text-foreground">
        Related Posts
      </h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
