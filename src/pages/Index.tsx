import Hero from "@/components/Hero"
import FeaturedMenu from "@/components/FeaturedMenu"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedMenu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;