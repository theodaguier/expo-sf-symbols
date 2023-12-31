
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
<g clip-path="url(#clip0_2207_37812)">
<path d="M7.03626 24.8806C7.59876 24.8806 7.95032 24.611 8.1261 24.0251L13.7511 6.00171H13.8331L19.4699 24.0368C19.6457 24.6228 19.9855 24.8806 20.5714 24.8806C21.216 24.8806 21.6847 24.4587 21.6847 23.8845C21.6847 23.7439 21.6496 23.5329 21.5558 23.2517L15.2277 4.17359C15.005 3.51733 14.5597 3.09546 13.8097 3.09546C13.0245 3.09546 12.5792 3.50562 12.3566 4.17359L6.02844 23.2634C5.93469 23.5446 5.91126 23.7439 5.91126 23.8845C5.91126 24.4587 6.38001 24.8806 7.03626 24.8806ZM5.04407 14.404C5.04407 14.8259 5.38391 15.1657 5.80579 15.1657H21.7785C22.2003 15.1657 22.5402 14.8259 22.5402 14.404C22.5402 13.9821 22.2003 13.6423 21.7785 13.6423H5.80579C5.38391 13.6423 5.04407 13.9821 5.04407 14.404ZM5.04407 18.611C5.04407 19.0329 5.38391 19.3728 5.80579 19.3728H21.7785C22.2003 19.3728 22.5402 19.0329 22.5402 18.611C22.5402 18.1892 22.2003 17.8493 21.7785 17.8493H5.80579C5.38391 17.8493 5.04407 18.1892 5.04407 18.611Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37812">
<rect width="17.4961" height="21.8555" fill="currentColor" transform="translate(5.04407 3.02515)"/>
</clipPath>
</defs>
</svg>

`;

export const Australsign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
