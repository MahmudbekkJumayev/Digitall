import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const telegramToken = "7385022476:AAEuDbLPJBCrHCQzuXDwQ-MzCb17ECk9-xE";
  const chatId = "-1002428200529";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `📝 *Yangi Xabar* 📝\n\n👤 *Ism:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Telefon:* ${formData.phone}\n💬 *Xabar:* ${formData.message}`;

    try {
      const res = await axios.post(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }
      );

      if (res.status === 200) {
        toast.success("Xabar muvaffaqiyatli yuborildi!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring."
      );
      console.error(error);
    }
  };

  return (
    <div id="contact" className="container mx-auto py-16 lg:py-24">
      <ToastContainer position="top-right" autoClose={5000} />
      <h4 className="text-4xl text-violet-600 font-bold text-left mb-10">
        Contact Us
      </h4>
      <div className="shadow-xl bg-gray-100 p-10 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 py-5 px-4 md:px-10"
          >
            <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
              Leave us a message
            </p>
            <input
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Phone number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Briefly describe your project"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-violet-600 w-full md:w-[200px] border-none hover:bg-violet-900 px-8 py-2 rounded-md text-white text-lg font-bold"
            >
              Send
            </button>
          </form>
        </div>

        {/* Map section */}
        <div className="w-full md:w-1/2">
          <div className=" w-full h-[100%]">
            <iframe
              src="https://yandex.uz/map-widget/v1/?l=night&ll=69.216012%2C41.234714&mode=search&oid=197913283981&ol=biz&rl=69.214078%2C41.234649&sctx=ZAAAAAgBEAAaKAoSCTyHMlTFvVlAEbudfeVBnkRAEhIJAAAAAICNb0ARUaT7OQXQWUAiBgABAgMEBSgKOABAkE5IAWoCdXqdAc3MzD2gAQCoAQC9AYTeFOvCAQaNm7Sk4QWCAhBQZHAgVW5pdmVyc2l0ZXRpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.216012%2C41.234714&sspn=0.044802%2C0.019713&text=Pdp%20Universiteti&z=15"
              className=" inset-0 w-full h-full border-none"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
