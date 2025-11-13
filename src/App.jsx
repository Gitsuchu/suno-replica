import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import SignupBar from "./components/SignupBar";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="min-h-screen bg-page text-white">
      <Header />
      <main id="main" className="space-y-16">
        <Hero />
        <Carousel />
        <Features />
        <SignupBar />
      </main>
      <Footer />
    </div>
  )
}
