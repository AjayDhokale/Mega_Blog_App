import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (

    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium
      text-white ${bgColor}
      hover:opacity-90 active:scale-95
      transition ${className}`}
      {...props}
    >
      {children}
    </button>

  );
}

export default Button;
