import FeaturedCourses from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WavyBackground from "@/components/Instructors";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
