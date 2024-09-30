import Navbar from "@/components/Navbar"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Navbar /> 
      {children}
    </main>
  );
}