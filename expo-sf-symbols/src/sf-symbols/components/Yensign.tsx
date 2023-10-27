
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37737)">
<path d="M14.0432 24.8574C14.6995 24.8574 15.1448 24.3887 15.1448 23.7207V15.6816L21.8479 4.87696C22.0236 4.60742 22.0823 4.39649 22.0823 4.13867C22.0823 3.57617 21.6136 3.1543 20.9925 3.1543C20.5706 3.1543 20.2424 3.33008 20.008 3.74023L14.0901 13.6543H14.0081L8.09009 3.74023C7.84399 3.33008 7.51587 3.1543 7.09399 3.1543C6.48462 3.1543 6.00415 3.57617 6.00415 4.13867C6.00415 4.39649 6.07446 4.60742 6.23853 4.87696L12.9534 15.6816V23.7207C12.9534 24.3887 13.3987 24.8574 14.0432 24.8574ZM8.41821 15.9512H19.7737C20.219 15.9512 20.512 15.6231 20.512 15.1895C20.512 14.7559 20.219 14.4277 19.7737 14.4277H8.41821C7.9729 14.4277 7.67993 14.7559 7.67993 15.1895C7.67993 15.6231 7.9729 15.9512 8.41821 15.9512ZM8.41821 19.9707H19.7737C20.219 19.9707 20.512 19.6426 20.512 19.209C20.512 18.7754 20.2308 18.4355 19.7737 18.4355H8.41821C7.9729 18.4355 7.67993 18.7754 7.67993 19.209C7.67993 19.6309 7.9729 19.9707 8.41821 19.9707Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37737">
<rect width="16.0781" height="21.7148" fill="currentColor" transform="translate(6.00415 3.1543)"/>
</clipPath>
</defs>
</svg>

`;

export const Yensign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
