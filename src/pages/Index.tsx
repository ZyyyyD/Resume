import { C } from "../constants/colors";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function Index() {
  return (
    <div style={{ background: C.bg, color: C.textMid, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
      <ChatWidget />
    </div>
  );
}
