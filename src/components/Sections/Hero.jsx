import DataImage from "../../data";

const Hero = () => {
  return (
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-0.5s ">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <q>Beautiful code is born from perseverance</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">
          Hi, My Name Maula Ibrahim Syahwi
        </h1>
        <p className="text-base/loose mb-6 opacity-50">
          I have an interest in the field of programming and designer,
          especially in making websites and UI/UX designs, my interest in this
          field has been going on for more than 2 years.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="https://www.canva.com/design/DAGKzOJJ7V0/7Ti46Om54SuLRde9891UEA/view?utm_content=DAGKzOJJ7V0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1717526705"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors duration-200"
          >
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a
            href="#project"
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors duration-200"
          >
            See project <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img
        src={DataImage.HeroImage}
        alt="Hero Image"
        className="w-[500px] rounded-lg md:ml-auto animate__animated animate__fadeInUp animate__delay-0.5s "
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
