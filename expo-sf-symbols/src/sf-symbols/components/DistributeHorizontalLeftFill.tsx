
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36631)">
<path d="M6.37793 24.8985H10.4561C12.167 24.8985 13.0928 23.9492 13.0928 22.2031V5.07031C13.0928 3.32422 12.167 2.38672 10.4561 2.38672H6.37793C4.67871 2.38672 3.74121 3.32422 3.74121 5.07031V22.2031C3.74121 23.9492 4.67871 24.8985 6.37793 24.8985ZM23.4053 20.7383H27.4834C29.1944 20.7383 30.1201 19.8008 30.1201 18.0547V9.21875C30.1201 7.47266 29.1944 6.53516 27.4834 6.53516H23.4053C21.6944 6.53516 20.7686 7.47266 20.7686 9.21875V18.0547C20.7686 19.8008 21.6944 20.7383 23.4053 20.7383Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M0.952149 27.2188C1.4209 27.2188 1.81934 26.8672 1.81934 26.4102V0.863281C1.81934 0.406249 1.4209 0.0546875 0.952149 0.0546875C0.495118 0.0546875 0.0966797 0.406249 0.0966797 0.863281V26.4102C0.0966797 26.8672 0.495118 27.2188 0.952149 27.2188ZM17.9795 27.2188C18.4365 27.2188 18.835 26.8672 18.835 26.4102V0.863281C18.835 0.406249 18.4365 0.0546875 17.9795 0.0546875C17.5225 0.0546875 17.1123 0.406249 17.1123 0.863281V26.4102C17.1123 26.8672 17.5225 27.2188 17.9795 27.2188Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36631">
<rect width="30.0234" height="27.1758" fill="currentColor" transform="translate(0.0966797 0.0546875)"/>
</clipPath>
</defs>
</svg>

`;

export const DistributeHorizontalLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
