import { animateScroll } from "react-scroll";

// Components
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";

// Hooks
import { useSidebar } from "../hooks/useSidebar";

// Data
import {
  PrimoHomeInfoRow,
  SecundoHomeInfoRow,
  TertioHomeInfoRow,
} from "../components/Info/data";

export const Home = () => {
  const { isOpen, openBar, closeBar } = useSidebar();

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={closeBar} />
      <Navbar openBar={openBar} scrollToTop={scrollToTop} />
      <Hero />
      <Info {...PrimoHomeInfoRow} />
      <Info {...SecundoHomeInfoRow} />
      <Services />
      <Info {...TertioHomeInfoRow} />
      <Footer scrollToTop={scrollToTop} />
    </>
  );
};
