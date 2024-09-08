import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedTitle from "./AnimatedTitle";
import AlertMessage from "./AlertMessage";

//style
const inputContact = "rounded-lg bg-sl bg-white/85 px-4 py-3 outline-none ";
const iconsContact =
  "w-12 h-12 flex items-center justify-center bg-gray-100 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-blue-200";

function ContactForm() {
  const form = useRef();

  const formInitialValues = {
    from_name: "",
    from_email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(formInitialValues);
  const [statusMessage, setStatusMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // Success or error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      //replace here with your IDs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )

      .then(
        () => {
          console.log("SUCCESS!");
          setStatusMessage("Message sent successfully!");
          setAlertType("success");
          setFormValues({
            from_name: "",
            from_email: "",
            message: "",
          });
          setTimeout(() => {
            setStatusMessage("");
            setAlertType("");
          }, 1500);
        },
        (error) => {
          setStatusMessage(`Failed to send message: ${error.text}`);
          setAlertType("error");
          setStatusMessage(false);
          setTimeout(() => {
            setStatusMessage("");
            setAlertType("");
          }, 1500);
        }
      );
  };
  return (
    <>
      <AlertMessage message={statusMessage} type={alertType} />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 w-full md:w-1/2 rounded-md shadow-2xl p-8"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Full name"
          value={formValues.from_name}
          onChange={handleChange}
          className={inputContact}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          value={formValues.from_email}
          onChange={handleChange}
          className={inputContact}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formValues.message}
          onChange={handleChange}
          style={{ minHeight: "3em", resize: "vertical", maxHeight: "10em" }} // Ajustez '10em' pour la hauteur maximale désirée
          className={inputContact}
        />
        <button
          type="submit"
          className="bg-[#5C99B6] w-fit p-3 rounded-lg text-white font-bold shadow-xl"
        >
          Send message
        </button>
      </form>
    </>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-16 font-mono mb-20">
      <AnimatedTitle className="text-xl md:text-3xl text-center md:text-left mb-10 mt-20 text-[#35396C] font-bold pt-2">
        Let's connect and collaborate!
      </AnimatedTitle>
      <div className="flex flex-col place-items-center gap-20 md:flex-row ">
        <ContactForm />
        <div className="flex flex-col gap-6 text-[#35396C] font-bold  text-sm md:text-md">
          <div className="flex place-items-center gap-8">
            <p>Contact me </p>
            <a href="mailto:souakinahmamou888@gmail.com">
              <button className={iconsContact}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 54 41"
                  fill="none"
                >
                  <path
                    d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227"
                    fill="#34A853"
                  />
                  <path
                    d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429"
                    fill="#EA4335"
                  />
                  <path
                    d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z"
                    fill="#C5221F"
                  />
                </svg>
              </button>
            </a>
            <p>soukainahmamou888@gmail.com</p>
          </div>
          <div className="flex place-items-center gap-6 ">
            <p>Follow me @ </p>
            <a href="https://www.linkedin.com/in/soukaina-hmamou-059514243/">
              <button className={iconsContact}>
                <svg
                  className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-blue-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 92 93"
                  fill="none"
                >
                  <rect
                    x="0.138672"
                    y="1"
                    width="91.5618"
                    height="91.5618"
                    rx="15"
                    fill="#EEFAFF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.6975 21.5618C22.6561 21.5618 21 23.1674 21 25.1456V68.0091C21 69.9875 22.6563 71.5918 24.6975 71.5918H67.3325C69.3747 71.5918 71.03 69.9873 71.03 68.0086V25.1456C71.03 23.1674 69.3747 21.5618 67.3325 21.5618H24.6975ZM36.2032 40.9068V63.4304H28.7167V40.9068H36.2032ZM36.6967 33.9411C36.6967 36.1025 35.0717 37.8321 32.4615 37.8321L32.4609 37.8319H32.4124C29.8998 37.8319 28.2754 36.1023 28.2754 33.9409C28.2754 31.7304 29.9489 30.0491 32.5111 30.0491C35.0717 30.0491 36.6478 31.7304 36.6967 33.9411ZM47.833 63.4304H40.3471L40.3469 63.4312C40.3469 63.4312 40.4452 43.0205 40.3475 40.9075H47.8336V44.0957C48.8288 42.5613 50.6098 40.3787 54.5808 40.3787C59.5062 40.3787 63.1991 43.598 63.1991 50.516V63.4304H55.7133V51.3822C55.7133 48.354 54.6293 46.2887 51.921 46.2887C49.8524 46.2887 48.6206 47.6815 48.0796 49.0271C47.8819 49.5072 47.833 50.1813 47.833 50.8535V63.4304Z"
                    fill="#006699"
                  />
                </svg>
              </button>
            </a>
            <a href="https://github.com/HMAMOUSoukaina">
              <button className={iconsContact}>
                <svg
                  className="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-blue-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.581v-2.04c-3.338.724-4.042-1.609-4.042-1.609-.546-1.389-1.333-1.759-1.333-1.759-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.806 1.305 3.492.998.109-.774.418-1.305.76-1.605-2.666-.303-5.467-1.333-5.467-5.933 0-1.311.469-2.382 1.236-3.221-.124-.303-.535-1.526.116-3.179 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.652 1.653.241 2.876.118 3.179.77.839 1.236 1.91 1.236 3.221 0 4.61-2.805 5.625-5.475 5.921.43.37.815 1.1.815 2.217v3.293c0 .322.192.696.802.578C20.565 21.796 24 17.303 24 12c0-6.629-5.371-12-12-12z"
                    fill="#181717"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
