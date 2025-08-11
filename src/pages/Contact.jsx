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
  const [emailValidation, setEmailValidation] = useState({
    isValidating: false,
    isValid: null,
    message: "",
  });

  // Gmail format validation
  const isGmailFormat = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    return gmailRegex.test(email);
  };

  // Simulate Gmail existence check (replace with real API)
  const checkGmailExists = async (email) => {
    // Simulasi delay untuk API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulasi logic - replace dengan real API call
    // Contoh: beberapa email yang "tidak exist"
    const nonExistentEmails = [
      "test123456789nonexistent@gmail.com",
      "fakeemail999999@gmail.com",
    ];

    return !nonExistentEmails.includes(email.toLowerCase());
  };

  const validateGmailEmail = async (email) => {
    if (!email) {
      setEmailValidation({ isValidating: false, isValid: null, message: "" });
      return;
    }

    // Check Gmail format first
    if (!isGmailFormat(email)) {
      setEmailValidation({
        isValidating: false,
        isValid: false,
        message: "Only @gmail.com is allowed",
      });
      return;
    }

    // Check if Gmail exists
    setEmailValidation({
      isValidating: true,
      isValid: null,
      message: "Verify email ...",
    });

    try {
      const exists = await checkGmailExists(email);

      if (exists) {
        setEmailValidation({
          isValidating: false,
          isValid: true,
          message: "Email Gmail valid",
        });
      } else {
        setEmailValidation({
          isValidating: false,
          isValid: false,
          message: "Email Gmail ini tidak ditemukan",
        });
      }
    } catch (error) {
      setEmailValidation({
        isValidating: false,
        isValid: false,
        message: "Gagal memverifikasi email. Silakan coba lagi.",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate email on change with debounce
    if (name === "email") {
      // Clear previous validation immediately for better UX
      setEmailValidation({ isValidating: false, isValid: null, message: "" });

      // Debounce email validation
      if (value.trim()) {
        const timeoutId = setTimeout(() => {
          validateGmailEmail(value.trim());
        }, 800); // 800ms delay

        // Cleanup timeout on next render
        return () => clearTimeout(timeoutId);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is valid before submitting
    if (!emailValidation.isValid) {
      setSubmitStatus("error");
      setShowToast(true);
      return;
    }

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
        setEmailValidation({ isValidating: false, isValid: null, message: "" });
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
                : emailValidation.isValid === false
                ? "Please enter a valid Gmail address."
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
              Gmail Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Gmail address"
              className={`border p-2 rounded-md transition-colors ${
                emailValidation.isValid === true
                  ? "border-green-500"
                  : emailValidation.isValid === false
                  ? "border-red-500 "
                  : "border-zinc-500"
              }`}
              required
            />

            {/* Email validation status */}
            {emailValidation.isValidating && (
              <div className="flex items-center text-blue-500 text-sm mt-1">
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {emailValidation.message}
              </div>
            )}

            {emailValidation.message && !emailValidation.isValidating && (
              <div
                className={`text-sm mt-1 flex items-center ${
                  emailValidation.isValid ? "text-green-600" : "text-red-600"
                }`}
              >
                {emailValidation.isValid ? (
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {emailValidation.message}
              </div>
            )}

            <p className="text-xs text-gray-400 mt-1">
              * Only Gmail email received
            </p>
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
              disabled={
                isSubmitting ||
                emailValidation.isValidating ||
                emailValidation.isValid === false ||
                !emailValidation.isValid
              }
              className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting
                ? "Sending..."
                : emailValidation.isValidating
                ? "Verifying Email..."
                : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
