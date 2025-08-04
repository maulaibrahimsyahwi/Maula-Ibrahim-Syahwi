import DataImage from "./data";
import { listTools, listProyek } from "./data";
function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s ">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 roundedmd"
              loading="lazy"
            />
            <q>Beautiful code is born from perseverance</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Nama Maula Ibrahim Syahwi
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
            terutama pada pembuatan Website dan Desain UI/UX, ketertarikan saya
            pada bidang ini sudah berlangsung lebih dari 3 Tahun.
          </p>
          <div className="flex items-center sm: gap-4 gap-2">
            <a
              href="https://www.canva.com/design/DAGKzOJJ7V0/7Ti46Om54SuLRde9891UEA/view?utm_content=DAGKzOJJ7V0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1717526705"
              target="_blank"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              See Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] rounded-lg md:ml-auto animate__animated animate__fadeInUp animate__delay-3s "
          loading="lazy"
        />
      </div>
      {/* About Section */}
      <div className="tentang mt-32 py-10 " id="tentang">
        {/* about me */}
        <div
          className="xl:w-2/3 lg: w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
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
            Hi, perkenalkan saya Maula Ibrahim Syahwi, seorang Full Stack Web
            Developer dan Designer untuk UI/UX Design maupun Product Digital,
            Saya percaya bahwa desain dan fungsionalitas harus berjalan
            beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya
            terlihat menarik tetapi juga memberikan pengalaman pengguna yang
            optimal.
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
                <p>Proyek Selesai</p>
              </div>
              <div className="">
                <h1 className="text-4xl mb-1">
                  3 <span className="text-violet-500">+</span>
                </h1>
                <p>tahun pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tools Section */}
        <div className="tools mt-32 ">
          <h1
            className="text-4xl/snug font-bold mb-4 "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa tools yang biasa saya gunakan untuk pembuatan
            website ataupun Design
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group "
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Toools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div className="">
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-once="true"
        >
          proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini beberapa proyek yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              className="proyek-card p-4 bg-zinc-800 rounded-md"
              key={proyek.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div className="proyek-card-info">
                <h1 className="font-bold text-2xl my-4">{proyek.nama}</h1>
                <p className="opacity-50 text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 ">
                  {proyek.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 houver:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}
      {/* contact */}
      <div className="kontak-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-center text-4xl font-bold mb-2 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/boimmuhammad8@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Masukkan Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* contact */}
    </>
  );
}

export default App;
