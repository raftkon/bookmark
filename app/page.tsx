import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />
      <Tabs />
      <Download />
      <FAQ />
      <Newsletter />
      <Footer />
      {/* Mobile Menu */}
      {/* <MobileMenu /> */}
    </>
  );
}
