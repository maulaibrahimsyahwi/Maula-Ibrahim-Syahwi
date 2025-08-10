const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
      <a href="#">
        <h1 className="text-2xl font-bold cursor-pointer">Portfolio</h1>
      </a>

      <div className="flex item-center gap-3">
        <a
          href="https://www.instagram.com/maulaibrhmsyah/"
          target="_blank"
          className="text-2xl "
        >
          <i className="ri-instagram-line ri-lg hover:text-violet-600"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/maula-ibrahim-syahwi"
          target="_blank"
          className="text-2xl "
        >
          <i className="ri-linkedin-line ri-lg hover:text-violet-600"></i>
        </a>
        <a
          href="https://github.com/maulaibrahimsyahwi"
          target="_blank"
          className="text-2xl "
        >
          <i className="ri-github-line ri-lg hover:text-violet-600"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
