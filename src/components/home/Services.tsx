import {
  Server,
  Smartphone,
  Globe,
  CreditCard,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    title: "Server Development",
    description:
      "Scalable and secure server-side solutions tailored for your business needs.",
    icon: <Server className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mobile App (iOS & Android)",
    description:
      "Custom mobile applications with smooth UI and powerful functionality.",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive, and SEO-friendly websites for all industries.",
    icon: <Globe className="w-8 h-8 text-primary" />,
  },
  {
    title: "Payment Integration",
    description:
      "Secure online payment gateways integrated seamlessly into your systems.",
    icon: <CreditCard className="w-8 h-8 text-primary" />,
  },
  {
    title: "SMS Integration",
    description:
      "Reliable SMS notification and OTP solutions for customer engagement.",
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600">
          We provide end-to-end IT solutions from mobile apps to server-side
          development, helping your business grow with reliable technology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl shadow-custom p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
