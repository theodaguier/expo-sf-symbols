
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
<g clip-path="url(#clip0_2207_37388)">
<path d="M13.9719 25.9216C20.511 25.9216 25.925 20.4959 25.925 13.9685C25.925 7.42944 20.4993 2.01538 13.9602 2.01538C7.43286 2.01538 2.0188 7.42944 2.0188 13.9685C2.0188 20.4959 7.44458 25.9216 13.9719 25.9216Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M17.7571 10.9685C18.2844 10.9685 18.6477 11.3669 18.6477 11.9412V17.6365C18.6477 18.3513 18.2493 18.6326 17.6282 18.6326H11.9094C11.3352 18.6326 10.9719 18.281 10.9719 17.742C10.9719 17.2146 11.3469 16.8631 11.9329 16.8631H14.1126L15.9055 17.0506L14.0188 15.281L9.57739 10.863C9.40161 10.6873 9.28442 10.4412 9.28442 10.2068C9.28442 9.656 9.64771 9.30444 10.175 9.30444C10.468 9.30444 10.6907 9.40991 10.8782 9.58569L15.2961 14.0154L17.0422 15.8787L16.8665 13.992V11.9177C16.8665 11.3318 17.218 10.9685 17.7571 10.9685Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37388">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownRightCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
