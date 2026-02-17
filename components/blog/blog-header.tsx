import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Post } from "@/lib/blog";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogHeader({ post }: { post: Post }) {
  return (
    <header className="mb-10">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to blog
      </Link>

      <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {post.frontmatter.title}
      </h1>

      <p className="mb-5 text-lg text-muted-foreground">
        {post.frontmatter.description}
      </p>

      <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(post.frontmatter.date)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {post.readingTime}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {post.frontmatter.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${tag}`}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
          >
            {tag}
          </Link>
        ))}
      </div>
    </header>
  );
}
