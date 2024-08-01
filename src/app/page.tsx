
import dynamic from "next/dynamic";

const FloatingNav = dynamic(() =>
  import("../components/FloatingNav").then((mod) => mod.FloatingNavDemo)
);

import { TabsDemo } from "@/components/Tabs";

import { BackgroundBeamsDemo } from "@/components/Backgroundbeans";
import { StickyScrollRevealDemo } from "@/components/scroll";
import { PlaceholdersAndVanishInputDemo } from "@/components/Search";
import Client from "@/components/Client";
import ScrollToTop from "@/components/Top";
import MessageAssistant from "@/components/Message";
import WelcomeMessage from "@/components/Welcome";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/shooting";
import { SpotlightPreview } from "@/components/spotlight";
import { ShootingStars } from "@/components/ui/Shooting";
import About from "@/components/testomonial";
import ScrollContainer from "@/components/infinite";
export default function Home() {
  return (
    <>
      <FloatingNav />
      <img
        src="https://willwaretech.com/wp-content/uploads/2020/12/willware-logo-removebg.png"
        alt="logo"
        className=" absolute top-3 left-2 z-20 duration-75 w-20"
      />
      <SpotlightPreview />
      <ScrollContainer />
      <BackgroundBeamsDemo />
      <TabsDemo />
      <StickyScrollRevealDemo />
      <PlaceholdersAndVanishInputDemo />
      <Client />
      <About />
      <ShootingStarsAndStarsBackgroundDemo />
      <ScrollToTop />
      <WelcomeMessage />
      <MessageAssistant />
      <ShootingStars />
    </>
  );
}
