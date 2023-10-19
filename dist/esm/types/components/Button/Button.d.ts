import React from "react";
import "./Button.css";
export interface ButtonProps {
    label: string;
    onClick?: any;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
