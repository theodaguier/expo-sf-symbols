
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
<g clip-path="url(#clip0_2207_37223)">
<path d="M13.9719 25.9624C20.511 25.9624 25.925 20.5367 25.925 14.0093C25.925 7.47021 20.4993 2.05615 13.9602 2.05615C7.43286 2.05615 2.0188 7.47021 2.0188 14.0093C2.0188 20.5367 7.44458 25.9624 13.9719 25.9624Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9485 11.0093C13.1399 11.0093 12.5071 10.4233 12.5071 9.67335C12.5071 8.81788 13.1399 8.2085 13.9485 8.2085C14.8391 8.2085 15.4368 8.80616 15.4368 9.67335C15.4368 10.4233 14.8274 11.0093 13.9485 11.0093ZM9.27271 15.0406C8.5813 15.0406 8.12427 14.6773 8.12427 14.0328C8.12427 13.3765 8.55786 13.0132 9.27271 13.0132H18.6829C19.386 13.0132 19.8196 13.3765 19.8196 14.0328C19.8196 14.6773 19.3626 15.0406 18.6829 15.0406H9.27271ZM13.9485 19.8335C13.1399 19.8335 12.5071 19.2359 12.5071 18.4859C12.5071 17.6304 13.1399 17.0328 13.9485 17.0328C14.8391 17.0328 15.4368 17.6304 15.4368 18.4859C15.4368 19.2359 14.8274 19.8335 13.9485 19.8335Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37223">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.05615)"/>
</clipPath>
</defs>
</svg>

`;

export const DivideCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
