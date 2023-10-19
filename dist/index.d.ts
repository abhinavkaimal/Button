import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: any;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

export { Button };
