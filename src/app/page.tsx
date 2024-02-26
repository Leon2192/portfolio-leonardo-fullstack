import { HeroParallaxDemo } from "@/components/ui/Hero/HeroParallaxDemo";
import { TypewriterEffectSmoothDemo } from "@/components/ui/Typewriter/TypewriterEffectSmoothDemo";
import { NavbarDemo } from "@/components/ui/Navbar/Navbar";
import { CardHoverEffectDemo } from "@/components/ui/CardHover/CardHover";
import { BentoGridDemo } from "@/components/ui/Grid/BentoGrid";
import Footer from "@/components/ui/Footer/Footer";
import { SVGMaskEffectDemo } from "@/components/ui/SvgMaskEffect/SvgMaskEffect";
import { BackgroundBeamsDemo } from "@/components/ui/BackgroundBeams/BackgroundBeams";
export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <HeroParallaxDemo />
      <CardHoverEffectDemo />
      {/* <BentoGridDemo /> */}
      <BackgroundBeamsDemo />
      {/* <Footer /> */}
    </div>
  );
}
