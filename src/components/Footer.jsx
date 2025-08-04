const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex item-center gap-3">
        <a href="https://www.instagram.com/maulaibrhmsyah/" target="_blank">
          <i className="ri-instagram-line ri-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/maula-ibrahim-syahwi"
          target="_blank"
        >
          <i className="ri-linkedin-line ri-lg"></i>
        </a>
        <a href="https://github.com/maulaibrahimsyahwi" target="_blank">
          <i className="ri-github-line ri-lg"></i>
        </a>
        <a href="#">
          <i className="ri-whatsapp-line ri-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
