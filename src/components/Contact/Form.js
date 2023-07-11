import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { AccentContext } from "../../App";
import Input from "./Input";

function Form() {
  const accent = useContext(AccentContext);
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [filled, setFill] = useState({
    name: false,
    email: false,
    subject: false,
    text: false,
  });
  const [movePlace, setMovePlace] = useState({
    name: false,
    email: false,
    subject: false,
    text: false,
  });

  const changeHandler = (e) => {
    let input = e.target;
    setData((data) => {
      return { ...data, [input.name]: input.value };
    });
    setFill((filled) => {
      return { ...filled, [input.name]: input.value !== "" ? true : false };
    });
  };

  const blurHandler = (e) => {
    let input = e.target.name;
    if (!filled[input]) {
      setMovePlace((prev) => {
        return {
          ...prev,
          [input]: false,
        };
      });
    }
  };

  const focusHandler = (e) => {
    let input = e.target.name;
    setMovePlace((prev) => {
      return {
        ...prev,
        [input]: true,
      };
    });
  };

  useEffect(() => {
    setData({
      name: "",
      email: "",
      subject: "",
      text: "",
    });
  }, [state.succeeded]);

  return (
    <motion.div
      id="Form"
      initial={{ x: "-100vw" }}
      animate={{ x: "0vw" }}
      exit={{ x: "-100vw" }}
      transition={{ delay: 0.1, type: "spring", mass: 0.5 }}
      className="form-wrapper col-12-xs col-7-md m-auto pt-5"
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          name="name"
          placeholder="Your Name"
          type="text"
          value={data.name}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.name}
        />
        <Input
          name="email"
          placeholder="Your Email"
          type="email"
          value={data.email}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.email}
        />
        <Input
          name="subject"
          placeholder="Subject"
          type="text"
          value={data.subject}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.subject}
        />
        <Input
          name="text"
          placeholder="Message"
          type="textarea"
          value={data.text}
          control={{ changeHandler, blurHandler, focusHandler }}
          movePlaceHolder={movePlace.text}
        />
        <input
          type="submit"
          className={`btn btn-outlined-${accent} font-md mb-2 pl-1 pr-1 fontfam-cont`}
          value={
            state.succeeded
              ? "Message sent ✔"
              : state.submitting
              ? "Sending..."
              : "Send Message >>"
          }
        />
      </form>
    </motion.div>
  );
}

export default Form;
