import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedPosts } from "@/lib/blog";
import { BlogCard } from "./blog-card";
import { SectionWrapper } from "@/components/section-wrapper";

export function BlogSectionHome() {
  const posts = getFeaturedPosts(3);

  if (posts.length === 0) return null;

  return (
    <SectionWrapper id="blog">
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          Writing
        </span>
      </h2>
      <div className="mt-6 grid gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          View all posts
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
