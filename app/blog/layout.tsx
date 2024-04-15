import { ExternalLink } from "@/app/page";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      {children}
      <div className="divider"></div>
      <div className="text-sm mt-4 text-center">
        This work by <ExternalLink href="https://hanmin.dev/">Hanmin Kim</ExternalLink> is licensed under
        a <ExternalLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike
        4.0 International License</ExternalLink>. Copyright 2024 Hanmin Kim.
      </div>
    </div>
  );
}