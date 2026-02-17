import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CopyButton } from "./copy-button";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Tag = `h${level}` as const;
  const sizes: Record<number, string> = {
    1: "text-3xl font-bold mt-10 mb-4",
    2: "text-2xl font-bold mt-10 mb-4",
    3: "text-xl font-semibold mt-8 mb-3",
    4: "text-lg font-semibold mt-6 mb-2",
    5: "text-base font-semibold mt-4 mb-2",
    6: "text-sm font-semibold mt-4 mb-2",
  };

  const HeadingComponent = ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === "string" ? children : "";
    const id = props.id || slugify(text);

    return (
      <Tag
        id={id}
        className={`${sizes[level]} scroll-mt-24 font-heading text-foreground`}
        {...props}
      >
        {children}
      </Tag>
    );
  };

  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
}

export const mdxComponents: MDXComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),

  p: ({ children, ...props }) => (
    <p
      className="mb-5 leading-7 text-foreground/80 [&:has(img)]:my-8"
      {...props}
    >
      {children}
    </p>
  ),

  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },

  ul: ({ children, ...props }) => (
    <ul
      className="mb-5 ml-6 list-disc space-y-2 text-foreground/80 marker:text-primary/50"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      className="mb-5 ml-6 list-decimal space-y-2 text-foreground/80 marker:text-primary/50"
      {...props}
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mb-5 border-l-2 border-primary/40 pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),

  code: ({ children, ...props }) => (
    <code
      className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground before:content-none after:content-none"
      {...props}
    >
      {children}
    </code>
  ),

  pre: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    "data-raw"?: string;
  }) => {
    const raw = props["data-raw"] || "";

    return (
      <div className="group relative mb-5">
        <CopyButton text={raw} />
        <pre
          className="overflow-x-auto rounded-lg border border-border bg-[oklch(0.97_0.002_270)] p-4 font-mono text-sm leading-relaxed dark:bg-[oklch(0.1_0.015_280)]"
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },

  table: ({ children, ...props }) => (
    <div className="mb-5 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }) => (
    <thead className="border-b border-border bg-muted/50" {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }) => (
    <th
      className="px-4 py-2.5 text-left font-semibold text-foreground"
      {...props}
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td
      className="px-4 py-2.5 text-foreground/80 border-t border-border"
      {...props}
    >
      {children}
    </td>
  ),

  hr: (props) => <hr className="my-8 border-border" {...props} />,

  img: ({ alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt || ""}
      className="rounded-lg border border-border"
      {...props}
    />
  ),

  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em className="text-foreground/70" {...props}>
      {children}
    </em>
  ),
};
