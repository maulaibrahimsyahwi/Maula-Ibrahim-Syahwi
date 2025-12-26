import DataImage from "../../data";

const About = () => {
  return (
    <div className="about mt-32 py-10 " id="about">
      <div
        className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img
          src={DataImage.HeroImage}
          alt="Image"
          className="w-12 rounded-md mb-10 sm:hidden"
          loading="lazy"
        />
        <p className="text-base/loose mb-10">
          Hi, introduce me to Maula Ibrahim Syahwi, a full stack of web
          developers and designers for UI/UX Design and Digital Product, I
          believe that the design and functionality must go hand in hand, so
          that every project that I develop does not only look attractive but
          also provides optimal user experience.
        </p>
        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md sm:block hidden"
            loading="lazy"
          />
          <div className="flex item center gap-6">
            <div className="">
              <h1 className="text-4xl mb-1">
                15 <span className="text-violet-500">+</span>
              </h1>
              <p>Project is complete</p>
            </div>
            <div className="">
              <h1 className="text-4xl mb-1">
                2 <span className="text-violet-500">+</span>
              </h1>
              <p>Year of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
