import { listProject } from "../../data";
import { getButtonConfig } from "../../utils/helpers";

const Projects = ({ onPreview, onMove }) => {
  return (
    <div className="project mt-32 py-10" id="project">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Project
      </h1>
      <p
        className="text-base/loose text-center opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Here are some of the projects that I have made
      </p>
      <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProject.map((project) => {
          const buttonConfig = getButtonConfig(project.status, project.link);

          return (
            <div
              className="project-card p-4 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors duration-200 flex flex-col h-full"
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={project.dad}
              data-aos-once="true"
            >
              <div className="w-full aspect-video bg-zinc-700 rounded-md mb-4 overflow-hidden flex-shrink-0">
                <img
                  src={project.gambar}
                  alt="project Image"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="project-card-info flex flex-col flex-grow">
                <h1 className="font-bold text-2xl my-4 flex-shrink-0">
                  {project.nama}
                </h1>

                <p className="opacity-50 text-base/loose mb-4 ">
                  {project.desk}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0 mt-auto">
                  {project.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-sm h-fit"
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                <div className="text-center flex-shrink-0">
                  <div className="relative group">
                    {buttonConfig.clickable ? (
                      <a
                        href={buttonConfig.href}
                        target={buttonConfig.target}
                        rel="noopener noreferrer"
                        onMouseEnter={() =>
                          onPreview({
                            image: project.preview,
                            title: project.nama,
                            type: "Project",
                          })
                        }
                        onMouseLeave={() => onPreview(null)}
                        onMouseMove={onMove}
                        className={`p-3 rounded-lg block border border-zinc-600 ${buttonConfig.className}`}
                      >
                        {buttonConfig.text}
                      </a>
                    ) : (
                      <span
                        className={`p-3 rounded-lg block border border-zinc-600 ${buttonConfig.className}`}
                      >
                        {buttonConfig.text}
                      </span>
                    )}

                    {buttonConfig.tooltip && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {buttonConfig.tooltip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
