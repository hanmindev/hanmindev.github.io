"use client";

import Link from "next/link";

export function CopyButton({ className, children, copy_value, prepend_link, enter_link }: {
  className?: string,
  children: React.ReactNode,
  copy_value: string,
  prepend_link?: boolean
  enter_link?: boolean
}) {
  let fixed_value = copy_value;
  const copy_fn = () => {
    if (prepend_link) fixed_value = window.location.origin + window.location.pathname + copy_value;
    navigator.clipboard.writeText(fixed_value);
  };


  if (enter_link) {
    return <Link href={copy_value} className={className} onClick={copy_fn}>
      {children}
    </Link>;
  }

  return <div className={className} onClick={copy_fn}>
    {children}
  </div>;
}