import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("nama", formData.nama);
    form.append("email", formData.email);
    form.append("pesan", formData.pesan);
    form.append("_captcha", "false");
    form.append("_subject", "New Contact Form Submission!");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/boimmuhammad8@gmail.com",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setShowToast(true);
        setFormData({ nama: "", email: "", pesan: "" });
      } else {
        setSubmitStatus("error");
        setShowToast(true);
      }
    } catch (error) {
      setSubmitStatus("error");
      setShowToast(true);
    }

    setIsSubmitting(false);
  };

  // Auto hide toast after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="kontak-32 sm:p-10 p-0" id="kontak">
      <h1
        className="text-center text-4xl font-bold mb-2 "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Contact
      </h1>
      <p
        className="text-base/loose text-center mb-10 opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Let's connect with me
      </p>

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
            submitStatus === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          } ${
            showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              {submitStatus === "success"
                ? "Message sent successfully! Thank you for contacting me."
                : "Failed to send message. Please try again."}
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-4 text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nama">Full Name</label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Enter the name"
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter the Email"
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">
              Message
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols="45"
              rows="7"
              value={formData.pesan}
              onChange={handleChange}
              placeholder="Enter the Message..."
              className="border border-zinc-500 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
