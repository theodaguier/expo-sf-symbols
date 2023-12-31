
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
<g clip-path="url(#clip0_2207_33289)">
<path d="M18.061 25.7353C24.6001 25.7353 30.0141 20.3095 30.0141 13.7822C30.0141 7.24316 24.5883 1.8291 18.0493 1.8291C11.5219 1.8291 6.10791 7.24316 6.10791 13.7822C6.10791 20.3095 11.5337 25.7353 18.061 25.7353ZM18.0493 23.9541C15.3657 23.9541 12.6469 22.8525 10.854 20.9423C12.1196 18.9502 14.8735 17.7783 18.0493 17.7783C21.2016 17.7783 23.979 18.9267 25.2563 20.9423C23.4516 22.8525 20.7446 23.9541 18.0493 23.9541ZM18.0493 15.7861C15.7993 15.7626 14.0298 13.8876 14.0298 11.3681C14.018 9.00097 15.811 7.03222 18.0493 7.03222C20.2993 7.03222 22.0688 9.00097 22.0688 11.3681C22.0688 13.8876 20.311 15.8095 18.0493 15.7861Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.61963 27.4697C11.7329 27.4697 15.1782 24.0361 15.1782 19.9111C15.1782 15.7626 11.768 12.3525 7.61963 12.3525C3.48291 12.3525 0.0610352 15.7626 0.0610352 19.9111C0.0610352 24.0712 3.4712 27.4697 7.61963 27.4697Z" fill="currentColor"/>
<path d="M7.61962 25.8642C10.8422 25.8642 13.5727 23.1689 13.5727 19.9111C13.5727 16.6416 10.8891 13.958 7.61962 13.958C4.36181 13.958 1.6665 16.6533 1.6665 19.9111C1.6665 23.1923 4.36181 25.8642 7.61962 25.8642Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33289">
<rect width="29.9531" height="27.3633" fill="currentColor" transform="translate(0.0610352 0.106445)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonCropCircleBadgeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
