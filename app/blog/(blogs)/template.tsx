import { BlogComment } from "@/app/blog/(blogs)/blog_comment";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}

      <BlogComment />
    </main>
  );
}