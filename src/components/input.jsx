import { Field } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  touched,
  isTextarea = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // const genericClassName = `border outline-none bg-transparent font-normal text-sm sm:text-base rounded-lg w-full px-4 py-2 placeholder:text-sm ${
  //   error && touched
  //     ? "border-red-500 focus:border-red-500"
  //     : "border-border-color focus:border-color"
  // } focus:ring-1 focus:ring-border-color pr-10`;
  const genericClassName = `border outline-none bg-transparent font-normal text-sm sm:text-base rounded-lg w-full px-4 py-2 placeholder:text-sm ${
    error && touched
      ? "border-red-500 focus:border-red-500"
      : "border-border-color focus:border-color"
  } focus:ring-1 focus:ring-border-color pr-10`;

  return (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className="font-medium font-poppins text-base text-label-color mb-2 block"
      >
        {label}
      </label>

      <Field
        as={isTextarea ? "textarea" : "input"}
        style={{
          width: "100%",
          padding: "13px 16px",
          background: "rgba(7,19,36,0.6)",
          border: "1px solid rgba(64,81,107,0.4)",
          borderRadius: 6,
          color: "var(--dw)",
          fontFamily: "var(--ff-b)",
          fontSize: 12,
          outline: "none",
          transition: "border-color .25s",
        }}
        id={name}
        name={name}
        type={isTextarea ? undefined : inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${genericClassName} ${
          isTextarea ? "resize-none max-h-[12rem]" : "max-h-50"
        }`}
        rows={isTextarea ? 5 : undefined}
      />

      {type === "password" && !isTextarea && (
        <span
          onClick={togglePasswordVisibility}
          className={`absolute right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer text-sm ${
            error && touched ? "top-[40%]" : "top-[60%]"
          }`}
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
      )}

      {error && touched && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
