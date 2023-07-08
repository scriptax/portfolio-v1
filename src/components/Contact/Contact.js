import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AccentContext } from "../../App";
import Heading from "../Heading/Heading";
import Form from "./Form";

function Contact() {
  const accent = useContext(AccentContext);
  const [form, setForm] = useState(false);
  return (
    <section id="Contact" className="container text-primary-light-9 mb-4 pt-5">
      <Heading title="Get In Touch" />
      <p className="font-lg fontfam-temp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button
        className={`btn btn-outlined-${accent} font-md pr-2 pl-2 mt-2`}
        onClick={() => {
          setForm((prev) => !prev);
        }}
      >
        <a href="#Form">{form ? `Cancel` : `Let's go >>`}</a>
      </button>
      <AnimatePresence>{form && <Form />}</AnimatePresence>
    </section>
  );
}

export default Contact;
