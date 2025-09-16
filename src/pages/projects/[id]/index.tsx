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
    <div>
      <Breadcrumb className="pb-4">
        <BreadcrumbList className="flex items-center gap-1">
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

      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 flex flex-col gap-4">
          <div>
            <img src={project?.img || "/lh.png"} alt={project?.title} />
          </div>
          <div className="bg-white shadow-custom rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <p>{project?.title}</p>
              <span className="text-[8px] bg-red-600 text-white py-1 px-3 rounded-full shadow">
                {project?.type}
              </span>
            </div>
            <p className="whitespace-pre-line">{project?.longDesc}</p>
          </div>
        </div>

        <div className="col-span-2">
          <div className="bg-white shadow-custom rounded-lg p-4">
            <p className="mb-2">Languages</p>
            <hr className="mb-2" />
            <div className="grid grid-cols-1 gap-3">
              {project?.languages?.map((lang) => (
                <div
                  key={lang}
                  className="bg-primary text-white rounded-full py-2 px-4"
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
