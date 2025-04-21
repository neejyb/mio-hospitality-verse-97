
import {
  House,
  Bed,
  Film,
  Car,
  Plane,
  Wrench,
  Building,
  Tools,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "interior-design",
    icon: House,
    title: "Interior Design",
    description: "Transform your space with our expert interior design services.",
    link: "#"
  },
  {
    id: "airbnb-services",
    icon: Bed,
    title: "Airbnb Services",
    description: "Premium accommodation management and booking services.",
    link: "#"
  },
  {
    id: "videography",
    icon: Film,
    title: "Videography",
    description: "Professional video production for your property or event.",
    link: "#"
  },
  {
    id: "car-hire",
    icon: Car,
    title: "Car Hire",
    description: "Luxury vehicle rentals for any occasion or requirement.",
    link: "#"
  },
  {
    id: "private-jet-hire",
    icon: Plane,
    title: "Private Jet Hire",
    description: "Exclusive private jet charter services for seamless travel.",
    link: "#"
  },
  {
    id: "maintenance-services",
    icon: Wrench,
    title: "Maintenance Services",
    description: "Comprehensive property maintenance and repair solutions.",
    link: "#"
  },
  {
    id: "property-management",
    icon: Building,
    title: "Property Management",
    description: "End-to-end property management and upkeep services.",
    link: "#"
  },
  {
    id: "facility-support",
    icon: Tools,
    title: "Facility Support",
    description: "Professional support services for commercial facilities.",
    link: "#"
  }
];

const ServiceGrid = () => {
  return (
    <section className="py-16 bg-[#f6f8fc]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#181D27]">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Discover our comprehensive range of hospitality and lifestyle services tailored to meet your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-sm border border-[#eee] flex flex-col min-h-[250px] h-full"
              >
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-5 flex items-center justify-center">
                    <Icon
                      size={42}
                      color="#9b87f5"
                      strokeWidth={2.2}
                      className="drop-shadow"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#181D27]">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-auto pt-4 flex items-center border-t border-t-[#f0f0f0]">
                    <a
                      href={service.link}
                      className="text-mio-orange font-medium flex items-center group hover:underline"
                    >
                      Learn more
                      <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" color="#fc7600" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
