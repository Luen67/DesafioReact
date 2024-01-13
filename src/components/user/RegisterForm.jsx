import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const colorInput = "text-gray-900 font-medium";
  const styleSpan = "inline-block text-red-500 p-1";
  const styleFocusInput =
    "focus:outline-none focus:border-blue-500 focus:shadow-outline-blue bg-white border border-gray-300 px-4 py-2";
  const styleInput =
    "leading-6 p-[calc(0.5em-1.5px) 0.5em] font-inherit text-base w-full resize-y border-[1.5px] border-gray-300 bg-white text-gray-900 appearance-none border rounded-[0.375rem] transition-all duration-100";
  return (
    <form
      className={clsx(
        "border border-gray-100 w-full",
        "p-8 rounded",
        "flex flex-col"
      )}
    >
      <p className="font-bold pb-4 text-[18px]">Create your count</p>
      <p className={colorInput}>Profile image</p>
      <input
        type="file"
        accept="image/*"
        className={clsx(
          "rounded bg-white border-[rgb(64,64,64)] text-[rgb(64,64,64)] p-[0.75rem] flex items-center w-[100%]"
        )}
      />
      <p className={colorInput}>
        Name <span className={styleSpan}>*</span>
      </p>
      <input type="text" className={styleInput + " " + styleFocusInput} />
      <p className={colorInput}>
        Username <span className={styleSpan}>*</span>
      </p>
      <input type="text" className={styleInput + " " + styleFocusInput} />
      <p className={colorInput}>
        Email <span className={styleSpan}>*</span>
      </p>
      <input type="email" className={styleInput + " " + styleFocusInput} />
      <p className={colorInput}>
        Password <span className={styleSpan}>*</span>
      </p>
      <input type="password" className={styleInput + " " + styleFocusInput} />
      <p className={colorInput}>
        Password Confirmation <span className={styleSpan}>*</span>
      </p>
      <input type="password" className={styleInput + " " + styleFocusInput} />
      <input
        type="submit"
        value="Sign up"
        className={clsx(
          "w-[87.25px] mt-3",
          "relative inline-block p-1",
          "rounded-[0.375rem] border-0 line-[1.5rem]",
          "font-medium text-center no-underline cursor-pointer",
          "bg-[rgb(59,73,223)] border-transparent shadow-sm text-white",
          "focus:bg-[rgb(47,58,178)] focus:shadow-md focus:z-10"
        )}
      />
    </form>
  );
}
