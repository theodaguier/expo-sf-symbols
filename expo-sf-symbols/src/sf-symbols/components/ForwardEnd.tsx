
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33868)">
<path d="M22.1892 23.4424C22.74 23.4424 23.1853 23.0205 23.1853 22.4697V5.06738C23.1853 4.5166 22.74 4.08301 22.1892 4.08301C21.6384 4.08301 21.1814 4.5166 21.1814 5.06738V22.4697C21.1814 23.0205 21.6384 23.4424 22.1892 23.4424ZM6.76733 22.9736C7.2478 22.9736 7.63452 22.8213 8.11499 22.5401L20.0564 15.5088C20.8884 15.0166 21.24 14.4307 21.24 13.7627C21.24 13.0947 20.8884 12.5088 20.0564 12.0166L8.11499 4.98535C7.63452 4.7041 7.2478 4.55176 6.76733 4.55176C5.84155 4.55176 5.07983 5.25488 5.07983 6.56738V20.958C5.07983 22.2705 5.84155 22.9736 6.76733 22.9736ZM7.28295 20.8057C7.10717 20.8057 6.95483 20.6885 6.95483 20.4541V7.07129C6.95483 6.83691 7.10717 6.71973 7.28295 6.71973C7.35327 6.71973 7.44702 6.75488 7.56421 6.8252L18.7087 13.4346C18.8728 13.5283 18.9548 13.5986 18.9548 13.7627C18.9548 13.915 18.861 13.9971 18.7087 14.0908L7.56421 20.7002C7.44702 20.7705 7.35327 20.8057 7.28295 20.8057Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33868">
<rect width="18.1055" height="19.3711" fill="currentColor" transform="translate(5.07983 4.07129)"/>
</clipPath>
</defs>
</svg>

`;

export const ForwardEnd = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
