import Services from "@/components/home/Services";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  py-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-lg overflow-hidden bg-white shadow-custom
                     transform transition duration-500 hover:-translate-y-2 hover:shadow-xl group flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden h-64 md:h-72 lg:h-64">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Title and tag */}
              <div className="flex justify-between items-center px-4 py-2">
                <p className="font-medium text-gray-800">{project.title}</p>
                <span className="text-[8px] bg-red-600 text-white py-1 px-3 rounded-full shadow">
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <div className="px-4 pb-4 flex-1 ">
                <p className="text-xs text-gray-600 text-left">
                  {project.desc}
                </p>
              </div>

              {/* Project Link */}
              <div className="px-4 pb-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 underline hover:text-blue-700 transition-colors"
                >
                  {project.link}
                </a>
              </div>

              {/* Button */}
              <div className="px-4 pb-4 mt-auto">
                <Link to={`/projects/${project.id}`}>
                  <Button className="w-full transition-all duration-300 hover:bg-primary/90 hover:scale-105 cursor-pointer">
                    အသေးစိတ်ကြည့်ရန်
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Services />
    </div>
  );
};

export default HomePage;
