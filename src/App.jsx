import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <FooterSection />

      <ScrollToTop /> 
    </>
  );
}