import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowsSpin, faFire, faHandSparkles, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faMoneyCheck,
  faSyncAlt,
  faTruckFast,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  const ServiceLists = [
  {
    id: 1,
    title: "Premium Food Styling",
    description: "We don't just cook; we curate. Our meals are styled to provide a visual feast before the first bite.",
    icon: faHandSparkles, // Or use <Sparkles size={24} color="#D4AF37" /> from lucide-react
  },
  {
    id: 2,
    title: "Inter-State Service",
    description: "Whether your event is in the heart of Lagos or the serene hills of Ibadan, our team delivers excellence cross-border.",
    icon: faTruckFast,
  },
  {
    id: 3,
    title: "Budget-Friendly Luxury",
    description: "We believe 'premium' shouldn't be out of reach. We offer customized catering packages tailored to your specific budget.",
    icon: faMoneyCheck,
  },
  {
    id: 4,
    title: "Professional On-Site Staff",
    description: "Our uniformed servers are trained in high-end hospitality to ensure your guests are treated like royalty.",
    icon: faUserTie,
  },
  {
    id: 5,
    title: "Fresh & Authentic",
    description: "From our signature smoky Jollof to our rich native soups, we use only the freshest ingredients and traditional recipes.",
    icon: faFire,
  }
];

  return (
    <div>
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="text-grey">Making your purchase seamless with no delay</p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row" id="services">
        {ServiceLists.map((service) => {
          return (
            <div
              className="bg-white transition duration-400 hover:bg-light rounded-xl p-6 flex flex-col  gap-4"
              key={service.id}
              data-aos="fade-right"
            >
              <FontAwesomeIcon
                className="text-3xl bg-primary px-2 py-3 text-white w-fit rounded-full border border-primary "
                icon={service.icon}
              />
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-grey">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
