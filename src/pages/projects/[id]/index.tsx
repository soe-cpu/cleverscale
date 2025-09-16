import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { projects } from "@/constants/projects";
import { Home } from "lucide-react";
import { Link, useParams } from "react-router";

const ProjectDetail = () => {
  const { id } = useParams();

  // Use find instead of filter for a single project
  const project = projects.find((data) => Number(data.id) === Number(id));

  return (
    <div className="px-2 sm:px-4">
      <Breadcrumb className="pb-4">
        <BreadcrumbList className="flex items-center gap-1 text-sm sm:text-base">
          <BreadcrumbItem className="flex items-center gap-1">
            <Home size={14} />
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Main Content */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div>
            <img
              src={project?.img || "/lh.png"}
              alt={project?.title}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="bg-white shadow-custom rounded-lg p-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
              <p className="text-lg font-semibold">{project?.title}</p>
              <span className="text-xs bg-red-600 text-white py-1 px-3 rounded-full shadow w-fit">
                {project?.type}
              </span>
            </div>
            <p className="whitespace-pre-line text-sm sm:text-base">
              {project?.longDesc}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2">
          <div className="bg-white shadow-custom rounded-lg p-4">
            <p className="mb-2 font-semibold">Languages</p>
            <hr className="mb-2" />
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              {project?.languages?.map((lang) => (
                <div
                  key={lang}
                  className="bg-primary text-white text-center rounded-full py-2 px-4 text-sm"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
