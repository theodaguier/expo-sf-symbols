
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36995)">
<path d="M1.06934 22.795C1.06934 23.3106 1.50293 23.7325 2.00684 23.7325H26.3115C26.8271 23.7325 27.2607 23.3106 27.2607 22.795C27.2607 22.2793 26.8271 21.8457 26.3115 21.8457H4.292L20.4404 5.69727C20.8037 5.33399 20.8037 4.72461 20.4404 4.36133C20.0771 3.99805 19.4795 3.99805 19.1045 4.36133L1.33887 22.127C1.18652 22.291 1.06934 22.5371 1.06934 22.795ZM14.7334 22.7598H16.6201C16.6201 18.752 14.9912 15.1192 12.3662 12.4824L11.0186 13.8066C13.3154 16.1036 14.7334 19.2676 14.7334 22.7598Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36995">
<rect width="26.1914" height="19.7227" fill="currentColor" transform="translate(1.06934 4.00977)"/>
</clipPath>
</defs>
</svg>

`;

export const Angle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
