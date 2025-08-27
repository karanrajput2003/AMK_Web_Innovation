import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dummy from "./Dummy";
import Hero from "./Pages/Hero";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Testimonial from "./Pages/Testimonial";
import Outro from "./Pages/Outro";
import Footer from "./Pages/Footer";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Hero />
      <Services />
      <Outro />
      <Features />
      <AboutUs />
      <Testimonial />
      <Contact />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
