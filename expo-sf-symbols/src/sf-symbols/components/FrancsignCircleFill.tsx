
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
<g clip-path="url(#clip0_2207_37749)">
<path d="M13.9594 25.979C20.4985 25.979 25.9125 20.5533 25.9125 14.0259C25.9125 7.48681 20.4868 2.07275 13.9477 2.07275C7.42041 2.07275 2.00635 7.48681 2.00635 14.0259C2.00635 20.5533 7.43213 25.979 13.9594 25.979Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.8384 20.0845C11.3813 20.0845 11.0415 19.7798 11.0415 19.3111V18.0337H10.0688C9.71729 18.0337 9.49463 17.7642 9.49463 17.4244C9.49463 17.0845 9.71729 16.8267 10.0688 16.8267H11.0415V9.35009C11.0415 8.85791 11.3462 8.5415 11.8267 8.5415H17.1001C17.5219 8.5415 17.8383 8.82275 17.8383 9.27978C17.8383 9.71337 17.5219 10.0063 17.1001 10.0063H12.6235V13.4166H16.6547C17.0766 13.4166 17.4047 13.6978 17.4047 14.1431C17.4047 14.5767 17.0766 14.8697 16.6547 14.8697H12.6235V16.8267H15.1079C15.4594 16.8267 15.7055 17.0845 15.7055 17.4244C15.7055 17.7642 15.4594 18.0337 15.1079 18.0337H12.6235V19.2994C12.6235 19.7564 12.3071 20.0845 11.8384 20.0845Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37749">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.00635 2.07275)"/>
</clipPath>
</defs>
</svg>

`;

export const FrancsignCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
