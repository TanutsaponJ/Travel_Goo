import img1 from "../assets/companyLogo1.png";
import img2 from "../assets/companyLogo2.png";
import img3 from "../assets/companyLogo3.png";
import img4 from "../assets/companyLogo4.png";
import img5 from "../assets/companyLogo5.png";
import img6 from "../assets/companyLogo6.png";
import img7 from "../assets/companyLogo7.png";

// ! Import service Icons

import image1 from "../assets/Vector.png";
import image2 from "../assets/carbon_hotel.png";
import image3 from "../assets/cil_paper-plane.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Ticket Booking",
      description:
        "We book all kind of national or international ticket for your destination.",
      image: image1,
    },
    {
      id: 2,
      title: "Hotel Booking",
      description:
        "You can easily book your according to your budget hotel by our website.",
      image: image2,
    },
    {
      id: 3,
      title: "Tour Plan",
      description:
        "We provide you the best plan within a short time explore more.",
      image: image3,
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl ma-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-black font-semibold mb-2">Our Clients</h2>
        <p className="text-black">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Company Logo */}

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={img1} alt="companyLogo1" />
          <img src={img2} alt="companyLogo2" />
          <img src={img3} alt="companyLogo3" />
          <img src={img4} alt="companyLogo4" />
          <img src={img5} alt="companyLogo5" />
          <img src={img6} alt="companyLogo6" />
          <img src={img7} alt="companyLogo7" />
        </div>
      </div>
      {/* Services Card */}
      <div className="mt-20 md:w1/2 mx-auto text-center">
        <h2 className="text-4xl text-black font-semibold mb-3">Our Service</h2>
        <p className="text-black">
          Manage your entire community in a single system
        </p>
      </div>
      {/* Cards */}

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-primaryDark transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-black mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-black">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
