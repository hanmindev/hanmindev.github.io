declare module "@/app/blog/*/page.mdx"{
  export type BlogMeta = {
    title: string, description: string
  }
  export const metadata: BlogMeta;
}