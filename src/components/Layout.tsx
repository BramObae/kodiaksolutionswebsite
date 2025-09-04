import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import africanMiningHero from "@/assets/african-mining-hero.jpg";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background overlay for all pages */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/50 to-background"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url(${africanMiningHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}></div>
      </div>
      <Header />
      <main className="flex-1 pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;