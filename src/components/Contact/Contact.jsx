import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div id="contact" className="container mx-auto py-16">
      <h4 className="text-4xl text-violet-600 font-bold text-left mb-10">
        Contact Us
      </h4>
      <div className="shadow-xl bg-gray-100 gap-10 p-10 flex flex-col-reverse xl:flex-row justify-between">
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col gap-5 px-4"
        >
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
            className="bg-violet-600 w-full border-none hover:bg-violet-900 px-8 py-2 rounded-md text-white text-lg font-bold"
          >
            Send
          </button>
          {status && <p className="text-gray-700 mt-2">{status}</p>}
        </form>
        <iframe
          className="flex-1 min-h-60"
          src="https://yandex.uz/map-widget/v1/?l=night&ll=69.216012%2C41.234714&mode=search&oid=197913283981&ol=biz&rl=69.214078%2C41.234649&sctx=ZAAAAAgBEAAaKAoSCTyHMlTFvVlAEbudfeVBnkRAEhIJAAAAAICNb0ARUaT7OQXQWUAiBgABAgMEBSgKOABAkE5IAWoCdXqdAc3MzD2gAQCoAQC9AYTeFOvCAQaNm7Sk4QWCAhBQZHAgVW5pdmVyc2l0ZXRpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.216012%2C41.234714&sspn=0.044802%2C0.019713&text=Pdp%20Universiteti&z=15"
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

export default Contact;
