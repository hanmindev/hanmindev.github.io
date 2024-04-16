import Link from "next/link";
import clsx from "clsx";

export function ExternalLink({ className, href, children }: {
  className?: string,
  href: string | undefined,
  children: React.ReactNode
}) {
  href = href ? href : ""

  return <Link href={href}
               className={clsx("text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 underline", className)}>{children}</Link>;
}