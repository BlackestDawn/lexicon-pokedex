import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "strong" | "weak";
  color?: string;
  className?: string;
}

export default function ContentContainer({ children, type, color, className }: Props) {
  let bgStyle: string = "";
  if (type) {
    if (type === "strong") {
      bgStyle = "bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]";
    } else if (type === "weak") {
      bgStyle = "bg-gradient-to-br [background-image:linear-gradient(-10deg,_#F3E4FA,_#EEF5FC)]"
    }
  }

  if (color) {
    bgStyle = color;
  }

  return (
    <div className={bgStyle}>
      <div className={`max-w-5xl mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
}
