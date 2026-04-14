import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowsSpin, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Service1 from '../assets/cat1.jpg'
import Service2 from '../assets/product2.jpg'
import Service3 from '../assets/product7.jpg'
import Service4 from '../assets/cat3.jpg'
import Service5 from '../assets/product1.jpg'

const Services = () => {
 const ServiceLists = [
  {
    id: 1,
    title: "Event Catering",
    description: "Full-service premium catering for weddings, burials, birthdays, and corporate meetings.",
    icon: "🎉", // You can replace these with Lucide-react icons or FontAwesome
    image: Service1 
  },
  {
    id: 2,
    title: "Bulk Meal Deliveries",
    description: "Convenient single-meal deliveries for groups, starting from a minimum of 10 plates.",
    icon: "🍱",
    image: Service2
  },
  {
    id: 3,
    title: "Custom Soup Bowls & Trays",
    description: "Rich, authentic soups and loaded food trays perfect for home stocking or gifting.",
    icon: "🥣",
    image: Service3
  },
  {
    id: 4,
    title: "On-Site Food Styling",
    description: "Professional setup and premium serving staff to ensure your guests have a high-end experience.",
    icon: "✨",
    image: Service4
  },
  {
    id: 5,
    title: "Corporate Lunch Subscriptions",
    description: "Reliable and delicious meal solutions for offices and board meetings across Ibadan and Lagos.",
    icon: "💼",
    image: Service5
  }
];

  return (
    <div id="services">
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-grey">Making your purchase seamless with no delay</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ServiceLists.map((service) => {
          return (
            <div className="relative" key={service.id} data-aos="fade-right">
            <img
              src={service.image}
              alt=""
              className="h-[400px] w-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black w-full text-white flex flex-col gap-2 p-4 rounded-b-lg pt-12">
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="text-grey">
                {service.description}
              </p>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
