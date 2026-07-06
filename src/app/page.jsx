import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Publications from "@/components/Publications";
import Initiatives from "@/components/Initiatives";
import PartnerLogos from "@/components/PartnerLogos";
import CommunityGallery from "@/components/CommunityGallery";
import OrdersNotifications from "@/components/OrdersNotifications";
import NewsEvents from "@/components/NewsEvents";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
            <Publications />
            <Initiatives />
          </div>
        </section>
        <PartnerLogos />
        <CommunityGallery />
        <OrdersNotifications />
        <NewsEvents />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
