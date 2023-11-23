import { useState} from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import BioSection from "./components/BioSection";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import 'katex/dist/katex.min.css';

function App() {
  const [scrollingEnabled, setScrollingEnabled] = useState(false);

  return (
    <>
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header scrollingEnabled={scrollingEnabled} setScrollingEnabled={setScrollingEnabled} />
          <LandingSection scrollingEnabled={scrollingEnabled} setScrollingEnabled={setScrollingEnabled} />
          <BioSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
    </>
  );
}

export default App;
