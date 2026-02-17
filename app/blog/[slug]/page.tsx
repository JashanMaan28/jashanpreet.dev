import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import {
  getAllPosts,
  getPostBySlug,
  extractTOC,
  getRelatedPosts,
} from "@/lib/blog";
import { mdxComponents } from "@/components/blog/mdx-components";
import { BlogHeader } from "@/components/blog/blog-header";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { RelatedPosts } from "@/components/blog/related-posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.frontmatter.title} | Jashanpreet Singh`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const toc = extractTOC(post.content);
  const related = getRelatedPosts(slug, 2);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-12">
      <div className="relative lg:grid lg:grid-cols-[1fr_200px] lg:gap-10 xl:grid-cols-[1fr_220px]">
        <article className="min-w-0">
          <BlogHeader post={post} />

          <div className="prose-custom">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      { behavior: "wrap" },
                    ],
                    [
                      rehypePrettyCode,
                      {
                        theme: {
                          dark: "github-dark-dimmed",
                          light: "github-light",
                        },
                        keepBackground: false,
                      },
                    ],
                  ],
                },
              }}
            />
          </div>

          <RelatedPosts posts={related} />
        </article>

        <TableOfContents items={toc} />
      </div>
    </div>
  );
}
