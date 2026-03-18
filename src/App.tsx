import { useState, useEffect } from "react";

import "./styles/globals.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ConfirmationPage from "./components/ConfirmationPage";
import StreamingConfirmationPage from "./components/StreamingConfirmationPage";

// Simple client-side router — no dependency needed.
// Chariow redirects to: https://votre-site.com/confirmation?ref=...&name=...&email=...
//
// Listens to both:
//  - popstate  → browser back/forward buttons
//  - pushState → patched below so navigate() triggers re-renders
function usePathname(): string {
  const [path, setPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const update = () => setPath(window.location.pathname);

    // Patch pushState so programmatic navigation also triggers re-render
    const originalPushState = history.pushState.bind(history);
    history.pushState = (...args: Parameters<typeof history.pushState>) => {
      originalPushState(...args);
      update();
    };

    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("popstate", update);
      history.pushState = originalPushState;
    };
  }, []);

  return path;
}

// Helper: navigate without a full page reload
export function navigate(to: string): void {
  history.pushState(null, "", to);
}

function LandingPage() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar scrolled={scrolled} />
      <Hero />
      {/* <Stats />
      <About />
      <WhyAfrica />
      <Program />
      <Testimonials />
      <Tickets />
      <Faq />
      <CtaFinal />
      <Footer /> */}
    </>
  );
}

export default function App() {
  const path = usePathname();

  if (path === "/confirmation") return <ConfirmationPage />;
  if (path === "/confirmationstreaming") return <StreamingConfirmationPage />;
  return <LandingPage />;
}
