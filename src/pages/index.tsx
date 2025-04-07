import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import BgOverview from "@/../public/bg-overview.jpeg";
import BgInereior from "@/../public/bg-interior.jpeg";
import BgCharging from "@/../public/bg-charging.jpeg";
import BgConnectivity from "@/../public/bg-connectivity.jpeg";
import BgSafety from "@/../public/bg-safety.jpeg";
import { useEffect } from "react";
import Lenis from "lenis";

const features = [
  {
    image: BgOverview,
    tag: "Overview",
    title: "Elevate adventure in luxury electric SUV of tomorrow",
    description:
      "More space. More utility - All luxury. Feel the freedom to move as you wish.",
  },
  {
    image: BgInereior,
    tag: "Interior",
    title: "Crafted comfort with cutting-edge design",
    description:
      "Experience an oasis of comfort with premium materials, ambient lighting, and ergonomic seating made for every journey.",
  },
  {
    image: BgCharging,
    tag: "Charging",
    title: "Charge faster, drive farther",
    description:
      "Effortless charging options at home or on the go. Get back on the road quicker with ultra-fast charging technology.",
  },
  {
    image: BgConnectivity,
    tag: "Connectivity",
    title: "Stay connected, wherever you roam",
    description:
      "Enjoy seamless connectivity with built-in Wi-Fi, over-the-air updates, and an intuitive infotainment system.",
  },
  {
    image: BgSafety,
    tag: "Safety",
    title: "Intelligence that protects",
    description:
      "Equipped with advanced driver-assistance features and real-time hazard detection for your peace of mind.",
  },
];


export default function Home() {

  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },[])

  return (
    <main className="min-h-screen">
      <HeroSection />
      {features.map(({ image, tag, title, description }) => (
        <div key={tag}>
          <Section
            image={image}
            tag={tag}
            title={title}
            description={description}
          />
        </div>
      ))}
    </main>
  );
}
