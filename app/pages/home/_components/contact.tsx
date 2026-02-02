"use client"

import { useState } from "react";
const email = "yifeng.wang@utoronto.ca";
const endpoint = "https://formspree.io/f/xeoylzje";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Message sent!");
      form.reset();
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <form
	  id="contact"
      action={endpoint}
      method="post"
      onSubmit={handleSubmit}
	  className="scroll-mt-24 w-[90vw] md:w-[md] mb-[calc(20px+48px)] max-w-[60ch] mx-auto h-full text-center rounded-md bg-white dark:bg-black p-2"
    >
      <p>
        Email me at{" "}
        <a className="hover:text-blue-600 hover:dark:text-blue-400" id="send" href={"mailto:" + email}>
          {email}
        </a>{" "}
        or fill the form
      </p>
	  {status}
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        className="w-full border transition-colors duration-200 text-gray-500 dark:text-white bg-gray-50 hover:bg-gray-100 focus:bg-gray-200 border-gray-200 dark:bg-gray-950 hover:dark:bg-gray-900 focus:dark:bg-gray-800 dark:border-gray-800 placeholder-gray-500 dark:placeholder-gray-500 h-12 my-1 px-2 rounded-sm box-border focus:outline-none"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className="w-full border transition-colors duration-200 text-gray-500 dark:text-white bg-gray-50 hover:bg-gray-100 focus:bg-gray-200 border-gray-200 dark:bg-gray-950 hover:dark:bg-gray-900 focus:dark:bg-gray-800 dark:border-gray-800 placeholder-gray-500 dark:placeholder-gray-500 h-12 my-1 px-2 rounded-sm box-border focus:outline-none"
        required
      />
      <textarea
        className="w-full border transition-colors duration-200 text-gray-500 dark:text-white bg-gray-50 hover:bg-gray-100 focus:bg-gray-200 border-gray-200 dark:bg-gray-950 hover:dark:bg-gray-900 focus:dark:bg-gray-800 dark:border-gray-800 placeholder-gray-500 dark:placeholder-gray-500 h-12 min-h-12 resize-y rounded-sm mt-1 px-2 py-1 box-border focus:outline-none"
        id="message"
        name="message"
        rows={4}
        cols={50}
        placeholder="Message"
        required
      ></textarea>
      <input
        type="submit"
        value="Send"
        className="w-full h-12 my-1 px-2 bg-gray-200 dark:bg-gray-800 rounded-sm box-border focus:outline-none"
      />
    </form>
  );
};
