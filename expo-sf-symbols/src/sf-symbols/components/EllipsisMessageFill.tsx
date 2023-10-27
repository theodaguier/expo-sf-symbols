
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
<g clip-path="url(#clip0_2207_34593)">
<path d="M5.64697 26.4937C7.05323 26.4937 10.5571 24.9585 12.5493 23.5289C12.7485 23.3882 12.9125 23.3296 13.0766 23.3296C13.229 23.3413 13.3813 23.3531 13.5336 23.3531C21.9829 23.3531 27.5844 18.5484 27.5844 12.7124C27.5844 6.81787 21.6782 2.06006 14.2954 2.06006C6.9126 2.06006 1.00635 6.81787 1.00635 12.7124C1.00635 16.4624 3.31494 19.7554 7.07666 21.771C7.25244 21.8648 7.31104 22.0406 7.21729 22.2163C6.56104 23.2945 5.38916 24.5835 4.94385 25.1695C4.48682 25.7554 4.74463 26.4937 5.64697 26.4937Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.9438 14.5757C18.9711 14.5757 18.186 13.7906 18.186 12.8179C18.186 11.8452 18.9711 11.0601 19.9438 11.0601C20.893 11.0601 21.7016 11.8452 21.7016 12.8179C21.7016 13.7906 20.893 14.5757 19.9438 14.5757Z" fill="currentColor"/>
<path d="M14.2954 14.5757C13.3227 14.5757 12.5375 13.7906 12.5375 12.8179C12.5375 11.8452 13.3227 11.0601 14.2954 11.0601C15.268 11.0601 16.0532 11.8452 16.0532 12.8179C16.0532 13.7906 15.268 14.5757 14.2954 14.5757Z" fill="currentColor"/>
<path d="M8.65869 14.5757C7.69776 14.5757 6.90088 13.7906 6.90088 12.8179C6.90088 11.8452 7.69776 11.0601 8.65869 11.0601C9.60791 11.0601 10.4048 11.8452 10.4048 12.8179C10.4048 13.7906 9.61963 14.5757 8.65869 14.5757Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34593">
<rect width="26.5781" height="24.4336" fill="currentColor" transform="translate(1.00635 2.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EllipsisMessageFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
