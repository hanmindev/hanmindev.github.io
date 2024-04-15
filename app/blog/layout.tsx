export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      {children}
    </div>
  );
}