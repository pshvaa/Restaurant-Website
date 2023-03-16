import React from "react";
import { IconContext } from "react-icons";
import { MdPlace } from "react-icons/md";
// import { useForm } from "react-hook-form";
// Hidden for simplicity
import emailjs from "@emailjs/browser";

import "./ContactForm.css";
import { useRef } from "react";

const ContactForm = () => {
  //email js

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1b397ro",
        "template_mx3bo4d",
        form.current,
        "H8WRP-Lgy4qLte-eZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset();

  };

  return (
    <div className="contact-section sec-container row">
      <form
        className="contact-form col-12 col-md-6 col-lg-6"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="title">
          <h2 className=" text-white">BİZİMLƏ ƏLAQƏ</h2>
        </div>
        <div className="half">
          <div className="item">
            <input id="name" type="text" name="user_name" placeholder="Ad" />
          </div>

          <div className="item">
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="full">
          <textarea name="message" id="message" placeholder="Mesaj"></textarea>
        </div>
        <div className="action">
          <input type="submit" value="Göndər" />
        </div>
      </form>

      <div className="contact-address col-12 col-md-6 col-lg-6 justify-content-center align-items-center">
        {/* <h2 className="headline-2 text-white">HOW TO REACH US</h2> */}
        <p className="text text-center d-4">
        Bizim qaynar xəttimiz hər hansı sorğu və ya rəy almaq üçün həmişə açıqdır. Aşağıdakı formdan bizə e-məktub göndərməkdən çekinməyin və biz ən qısa zamanda sizinlə əlaqə saxlayacağıq.
        </p>


        <IconContext.Provider value={{ className: "contact-nav" }}>
        <div className="filials row text-center">
          <div className="filial col-12 col-md-3">
            <span className="icon d-inline text-center">
              <MdPlace />
            </span>
            <p className="text">
              Gourmet Gənclik Mall
              <br />
              Gənclik Mall (3-cü mərtəbə). <br />
              Tel: 012 599-15-25 / 051 330-05-10
            </p>
          </div>

          <div className="filial col-12 col-md-3">
            <span className="icon">
              <MdPlace />
            </span>
            <p className="text">
              Gourmet Nərimanov <br />
              N. Nərimanov r., Əhməd Rəcəbli 3 <br />
              Tel: 012 566-78-94 / 051 330-02-10
            </p>
          </div>

          <div className="filial col-12 col-md-3">
            <span className="icon">
              <MdPlace />
            </span>
            <p className="text">
              Gourmet Səbail <br />
              Səbail r., Mərdanov qard. 3<br />
              Tel: 012 598-19-01 / 051 330-01-10
            </p>
          </div>

          <div className="filial col-12 col-md-3">
            <span className="icon">
              <MdPlace />
            </span>
            <p className="text">
              Gourmet 28 Mall <br />
              28 Mall (4-cü mərtəbə).
              <br />
              Tel: 012 499-87-06 / 051 330-03-10
            </p>
          </div>

          <div className="filial col-12 col-md-3">
            <span className="icon">
              <MdPlace />
            </span>
            <p className="text">
              Gourmet Əhmədli <br />
              Xətai r-nu, Məhəmməd Hadi küç., <br />
              Tel: 051 330-06-10
            </p>
          </div>
        </div>
          </IconContext.Provider>
     
      </div>
    </div>
  );
};

export default ContactForm;
