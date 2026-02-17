import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { Post } from "@/lib/blog";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="animated-border rounded-xl border border-border bg-card/50 p-6 transition-colors hover:bg-card/80">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.frontmatter.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="mb-2 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {post.frontmatter.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {post.frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
