import { listPublication } from "../../data";

const Publications = ({ onPreview, onMove }) => {
  return (
    <div className="publication mt-32 py-10" id="publication">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Publications
      </h1>
      <p
        className="text-base/loose text-center opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Academic research and articles I have published
      </p>

      <div className="publication-box mt-14 max-w-4xl mx-auto px-4">
        {listPublication.map((pub) => (
          <div
            key={pub.id}
            className="group relative bg-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 sm:p-8 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={pub.dad}
            data-aos-once="true"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                  <span className="px-3 py-1 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full font-medium flex items-center gap-1">
                    <i className="ri-article-line"></i> Research Article
                  </span>
                  <span className="text-zinc-500 flex items-center gap-1">
                    {pub.year}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-violet-200 transition-colors">
                  {pub.title}
                </h2>

                <div className="mb-4 text-violet-400 font-medium flex items-center gap-2">
                  <i className="ri-book-mark-line"></i> {pub.journal}
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6 border-l-2 border-zinc-700 pl-4">
                  {pub.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 bg-zinc-700/30 text-zinc-400 rounded-lg border border-zinc-700 group-hover:border-zinc-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-auto flex md:flex-col justify-end md:justify-start items-start">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() =>
                    onPreview({
                      image: pub.image,
                      title: pub.title,
                      info: pub.journal,
                      type: "Publication",
                    })
                  }
                  onMouseLeave={() => onPreview(null)}
                  onMouseMove={onMove}
                  className="flex items-center gap-2 px-6 py-3 bg-zinc-700 hover:bg-violet-600 text-white rounded-xl transition-all duration-300 font-medium group/btn w-full md:w-auto justify-center"
                >
                  Read
                  <i className="ri-arrow-right-up-line group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
