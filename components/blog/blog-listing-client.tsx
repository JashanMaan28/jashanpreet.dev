"use client";

import { useState, useMemo } from "react";
import { SearchBar } from "./search-bar";
import { BlogCard } from "./blog-card";
import type { Post } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface BlogListingClientProps {
  posts: Post[];
  tags: string[];
}

export function BlogListingClient({ posts, tags }: BlogListingClientProps) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(q) ||
          post.frontmatter.description.toLowerCase().includes(q) ||
          post.frontmatter.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((post) =>
        post.frontmatter.tags.includes(selectedTag)
      );
    }

    return filtered;
  }, [posts, search, selectedTag]);

  return (
    <div>
      <div className="mb-8">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer",
            selectedTag === null
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() =>
              setSelectedTag(selectedTag === tag ? null : tag)
            }
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer",
              selectedTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-4">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-muted-foreground">
          <p className="text-sm">No posts found.</p>
        </div>
      )}
    </div>
  );
}
