import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick?: any;
}

const Button = (props: ButtonProps) => {
  const { label, onClick } = props;
  const [click, setClicked] = React.useState<boolean>(false);

  const handleonClick = () => {
    console.log("Message from packagee:: Button clicked");
    setClicked(!click);
    onClick && onClick();
  };

  return (
    <>
      {click ? "Clicked" : "Not Clicked"}
      <button onClick={() => handleonClick()}>{label}</button>
    </>
  );
};

export default Button;
