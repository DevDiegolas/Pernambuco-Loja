import Layout from "./components/layout/Layout";
import Hero from "./features/home/Hero";
import AboutSection from "./features/about/AboutSection";
import ProductsSection from "./features/products/ProductsSection";
import ServicesSection from "./features/services/ServicesSection";
import LocationsSection from "./features/locations/LocationsSection";
import ContactSection from "./features/contact/ContactSection";

export default function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <LocationsSection />
      <ContactSection />
    </Layout>
  );
}
