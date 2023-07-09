import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AccentContext } from "../../App";
import Heading from "../Heading/Heading";
import Form from "./Form";
import personData from "./../../data/personData.json";

function Contact() {
  const accent = useContext(AccentContext);
  const [form, setForm] = useState(false);
  return (
    <section id="Contact" className="container text-primary-light-9 mb-4 pt-5">
      <Heading title="Get In Touch" />
      <p className="font-md fontfam-temp">
        {personData.contactText}
      </p>
      <button
        className={`btn btn-outlined-${accent} font-md pr-2 pl-2 mt-2`}
        onClick={() => {
          setForm((prev) => !prev);
        }}
      >
        {form ? <a href="#Form">Cancel</a> : <a href="#Contact">Get in touch ✉</a>}
      </button>
      <AnimatePresence>{form && <Form />}</AnimatePresence>
    </section>
  );
}

export default Contact;
