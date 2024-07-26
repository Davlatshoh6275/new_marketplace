import Footer from "@/Components/client/Footer";
import PagesList from "@/Components/client/PagesList";
import { Separator } from "@/Components/ui/separator";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <PagesList />
      </nav>
      <Separator />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
