import { ThemeProvider } from "./lib/theme";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Services } from "./sections/Services";
import { Demo } from "./sections/Demo";
import { Process } from "./sections/Process";
import { Contact } from "./sections/Contact";

export function App() {
  return (
    <ThemeProvider>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-bg-inv focus:text-fg-inv focus:rounded-md">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Demo />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
