import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto py-16 lg:py-24">
      <h4 className="text-4xl text-violet-600 font-bold text-left mb-10">
        Contact Us
      </h4>
      <div className="shadow-xl  bg-gray-100 p-10 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-5 py-5 px-4 md:px-10">
            <p className="text-[16px] md:text-[18px] text-gray-800 font-medium">
              Leave us a message
            </p>
            <input
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Name"
              type="text"
            />
            <input
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Your email"
              type="email"
            />
            <textarea
              className="p-3 rounded-md border-2 border-gray-300"
              placeholder="Briefly describe your project"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-violet-600 w-full md:w-[200px] border-none hover:bg-violet-900 px-8 py-2 rounded-md text-white text-lg font-bold"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-5 md:p-10 gap-5">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
  <iframe
    src="https://yandex.uz/map-widget/v1/?l=night&ll=69.216012%2C41.234714&mode=search&oid=197913283981&ol=biz&rl=69.214078%2C41.234649&sctx=ZAAAAAgBEAAaKAoSCTyHMlTFvVlAEbudfeVBnkRAEhIJAAAAAICNb0ARUaT7OQXQWUAiBgABAgMEBSgKOABAkE5IAWoCdXqdAc3MzD2gAQCoAQC9AYTeFOvCAQaNm7Sk4QWCAhBQZHAgVW5pdmVyc2l0ZXRpigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=69.216012%2C41.234714&sspn=0.044802%2C0.019713&text=Pdp%20Universiteti&z=15"
    width="560"
    height="400"
    frameBorder="1"
    allowFullScreen={true}
    style={{ position: 'relative' }}
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
