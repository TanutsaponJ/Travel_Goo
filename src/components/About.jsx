import aboutImage from "../assets/about.png";
import worldImage from "../assets/world_map.png";
import Button from "../layout/Button";
import AboutServiceCards from "../layout/AboutServiceCards";

// ! import All icons

import aboutIcon1 from "../assets/aboutIcon1.png";
import aboutIcon2 from "../assets/aboutIcon2.png";
import aboutIcon3 from "../assets/aboutIcon3.png";
import aboutIcon4 from "../assets/aboutIcon4.png";

const About = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen mx-auto bg-[#005853]/5">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-3/6">
            <img
              src={aboutImage}
              alt="aboutImage"
              className="mx-auto rounded-md"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-black font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-black mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <Button title="Learn More" />
          </div>
        </div>
      </div>

      {/* Company stats */}
      <div className="relative min-h-[80%] flex flex-col justify-center items-center lg:px-32 px-5 mx-auto ">
        <img src={worldImage} alt="worldImage" className="absolute mx-auto" />
        <div className="md:w-1/2  top-0 flex flex-col items-center mt-8">
          <h2 className="text-4xl text-black  font-semibold mb-7 md:w-2/3 text-center  ">
            We always try to give you
            <span className="text-primaryDark"> the best service</span>
          </h2>
          <p className="md:w-3/4 text-sm text-black mb-8 text-center">
            We always try to make our customer Happy. We provide all kind of
            facilities. Your Satisfaction is our main priority.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mx-auto md:w1/2 mb-12">
          <AboutServiceCards
            img={aboutIcon1}
            alt="Icon1"
            title="15+"
            description="Years of 
          Experience"
          />
          <AboutServiceCards
            img={aboutIcon2}
            alt="Icon2"
            title="15k"
            description="Happy 
          Travelers"
          />
          <AboutServiceCards
            img={aboutIcon3}
            alt="Icon3"
            title="650+"
            description="Places Visited"
          />
          <AboutServiceCards
            img={aboutIcon4}
            alt="Icon4"
            title="2k+"
            description="Travel History"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
