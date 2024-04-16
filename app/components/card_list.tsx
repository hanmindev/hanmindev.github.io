import Link from "next/link";

export function Card({ title, description, link }: { title: string, description: string, link: string }) {
  return <div className="group card max-w-full transition-transform duration-100 hover:scale-105">
    <Link className="card-body" href={link}>
      <h2 className="card-header group-hover:text-blue-500 dark:group-hover:text-blue-300">{title}</h2>
      <p className="text-content2 group-hover:text-blue-500 dark:group-hover:text-blue-300">{description}</p>
    </Link>
  </div>;
}

export function CardList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-4">
    {children}
  </div>;
}