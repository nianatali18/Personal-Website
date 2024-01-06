import ContactForm from '../../hooks/formValidation';

import emailjs from "emailjs-com";


export default function Contact() {
  
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    handleSubmit,
    errorMessage,
  } = ContactForm();
  function sendEmail(e) {
    e.preventDefault();

    const userID = import.meta.env.VITE_EMAILJS_USERID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;

    if (!serviceID || !templateID || !userID) {
      console.error("EmailJS environment variables are not defined");
      return;
    }

    emailjs.sendForm(serviceID, templateID, e.currentTarget, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div
    id="Contact"
    className="flex flex-col items-center justify-center min-h-screen bg-opacity-50 text-white py-3"
  >
    <h1 className="text-3xl font-bold mb-8">Contact me</h1>
    <form
      className="w-full max-w-[40rem] bg-slate-500 bg-opacity-50 shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={sendEmail}
    >
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          name="from_name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          name="Email_Id"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
      <label
  className="block text-white text-sm font-bold mb-2"
  htmlFor="Message" 
>
  Message
</label>
<textarea
  name="message"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
  id="Message"
  placeholder="Your message"
  rows={4}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
></textarea>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
  );
}