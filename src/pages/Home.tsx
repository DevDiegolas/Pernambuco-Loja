import Hero from "../features/home/Hero";
import Highlights from "../features/home/Highlights";
import FeaturedCategories from "../features/home/FeaturedCategories";
import WhyUs from "../features/home/WhyUs";
import CallToAction from "../features/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedCategories />
      <WhyUs />
      <CallToAction />
    </>
  );
}
