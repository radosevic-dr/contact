"use client";

import Link from "next/link";
import axios from "axios";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/libs/validationSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  // reference for form reset
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [isLinkActive, setLinkActive] = useState(false);
  // form handling
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;


  const onSubmit = async (contact) => {
    setSubmitting(true);
    try {
      await axios({
        method: "POST",
        url: "/messages",
        data: contact,
      });
      toast.success("Hvala što ste me kontaktirali, čujemo se.", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
        draggable: false,

      });
      formRef.current.reset();
      setLinkActive(true);
    } catch (error) {
      if (error.response.status === 500) {
        toast.success("Hvala što ste me kontaktirali, čujemo se!", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
          draggable: false,

        });
        formRef.current.reset();
        setLinkActive(true);
      } else
        toast.error("Nešto ne valja!", {
          position: toast.POSITION.TOP_LEFT,
          draggable: false,
        });
    }

    setSubmitting(false);

  };
  return (
    <div className="max-w-[30rem] w-[100%] mx-auto bg-base-100 min-h-screen relative my-20">
      <div className="dui-container mx-auto min-h-screen" >
        <h2 className="text-2xl font-bold text-success mb-6 text-center">Kontakt</h2>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef} noValidate>
          <div className="dui-form-control mb-4">
            <label className="dui-label" htmlFor="fullName">
              <span className="dui-label-text font-semibold">Puno ime</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="dui-input dui-input-bordered hover:border-success/20 hover:shadow-md hover:shadow-success/40"
              {...register("fullName")}
            />
            <span
              className={`${errors["fullName"] ? "py-2 text-error" : "hidden"
                }`}
            >
              🚩  {errors["fullName"]?.message}
            </span>
          </div>



          <div className="dui-form-control mb-4">
            <label className="dui-label" htmlFor="email">
              <span className="dui-label-text font-semibold">Email</span>
            </label>
            <input type="email" id="email"
              {...register("email")} className="dui-input dui-input-bordered hover:border-success/20 hover:shadow-md hover:shadow-success/40" />
            <span
              className={`${errors["email"] ? "py-2 text-error" : "hidden"
                }`}
            >
              🚩 {errors["email"]?.message}
            </span>
          </div>




          <div className="dui-form-control mb-4">
            <label className="dui-label" htmlFor="message">
              <span className="dui-label-text font-semibold">Poruka</span>
            </label>
            <textarea id="message" className="dui-textarea dui-textarea-bordered h-28 hover:border-success/20 hover:shadow-md hover:shadow-success/40" {...register("message")}></textarea>
            <span
              className={`${errors["message"] ? "pt-2 text-error" : "hidden"
                }`}
            >
              🚩 {errors["message"]?.message}
            </span>
          </div>

          <input name="_formsubmit_id" type="text" style={{ visibility: "hidden", height: 0, padding: 0 }} />
          <button type="submit" disabled={submitting} className="dui-btn dui-btn-success w-full uppercase text-primary font-bold text-lg disabled:btn-neutral">Pošalji</button>
        </form>
        {isLinkActive ? <div className="text-center mt-10">
          <Link href="https://www.codewilderness.me" className="text-info uppercase"><span className="animate-pulse pr-2">🪃</span> Nazad na početnu</Link>
        </div> : null}
        <ToastContainer />
      </div>
    </div>
  );
};
