import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Mail, User, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const notify = (message) => toast(message);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const toastId = toast.loading("Sending...");

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.update(toastId, {
          render: "Form Submitted Successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        event.target.reset();
      } else {
        toast.update(toastId, {
          render: data.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: "An error occurred while submitting the form.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      "#heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".form-element",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, stagger: 0.2, duration: 0.8, ease: "power2.out", delay: 1 }
    );
  }, []);

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-5xl sm:text-6xl font-bold mb-8" id="heading">
        <span className="text-7xl sm:text-8xl">C</span>ontact Me
      </h1>
      <p className="text-center mb-8">I am into new opportunities and would love to connect with you.</p>
      <div className="w-4/5 md:w-[50%]">
        <form onSubmit={onSubmit} className="flex flex-col gap-6 items-center">
          <div className="form-element w-full">
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Your Name:
            </label>
            <div className="relative">
              <User className="absolute top-1/2 left-2 transform -translate-y-1/2 text-blue-500" />
              <input
                className="w-full bg-transparent border border-white p-3 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="form-element w-full">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Your Email:
            </label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-2 transform -translate-y-1/2 text-blue-500" />
              <input
                className="w-full bg-transparent border border-white p-3 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="form-element w-full">
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Your Message:
            </label>
            <div className="relative">
              <MessageCircle className="absolute top-4 left-2 text-blue-500" />
              <textarea
                className="w-full bg-transparent border border-white p-3 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                name="message"
                id="message"
                required
                placeholder="Your Message"
                rows="4"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-950 py-2 px-6 rounded form-element hover:bg-blue-800 transition-colors duration-300 w-full"
          >
            Submit
          </button>
          <ToastContainer theme="colored" />
        </form>
      </div>
    </div>
  );
}
