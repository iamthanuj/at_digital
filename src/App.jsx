import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import CtaSection from "./components/CtaSection";
import heroImage from "./assets/hero_image_xl.png";
import smallHeroImage from './assets/small_hero_image.png'
import pcImage from "./assets/computer.png";
import searchImage from "./assets/search.png";

function App() {
  return (
    <>
      <Navbar />

      <div id="hero-section" className="w-full h-full">
        {/* Hero-image-section */}
        <div className="relative">
          <img src={heroImage} alt="" className="w-full h-full hidden xl:block" />
          <img src={smallHeroImage} alt="" className="w-full h-full sm:block xl:hidden " />
          <div className="w-full  bottom-7  left-0 right-0  lg:absolute  lg:container  lg:px-7  lg:left-1/2 transform lg:-translate-x-1/2">
            <div className="flex flex-col gap-6  max-w-full  xl:max-w-[630px] lg:max-w-[622px]  p-7 bg-gradient-to-r from-emeraldGreen to-caribbeanBlue">
              <h1 className="text-white font-bold text-4xl md:text-5xl">
                We Crush Your Competitors, Goals, And Sales Records - Without
                The B.S.
              </h1>

              <Button btnText="Get free consultation" />
            </div>
          </div>
        </div>

        {/* hero-container */}
        <div className="max-w-7xl px-7 flex flex-col gap-[60px] mx-auto mt-[60px]">
          <div className="flex flex-col gap-5 md:flex-row">
            <img src={pcImage} alt="" />
            <div className="flex flex-col gap-5 text-center md:text-left justify-center">
              <h1 className="font-poppins text-primaryColor text-[27px] font-bold ">
                Web & Mobile App Development 
              </h1>
              <p className="font-inter">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <Button btnText="Learn More" />
            </div>
          </div>

          <div className="flex flex-col gap-5  md:flex-row-reverse">
            <img src={searchImage} alt="" />
            <div className="flex flex-col gap-4 text-center md:text-left justify-center">
              <h1 className="font-poppins text-primaryColor text-[27px] font-bold">
                Digital Strategy Consulting
              </h1>
              <p className="font-inter">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <Button btnText="Learn More" />
            </div>
          </div>
        </div>
      </div>

      <CtaSection/>
    </>
  );
}

export default App;
