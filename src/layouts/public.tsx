import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Navbar /> 
      {children}
      <Footer />
    </main>
  );
}