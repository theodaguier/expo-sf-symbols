
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
<g clip-path="url(#clip0_2207_37156)">
<path d="M14.0295 14.0537C17.3108 14.0537 20.0529 11.335 20.0529 8.06543C20.0529 4.77246 17.3108 2.05371 14.0295 2.05371C10.7366 2.05371 8.01782 4.77246 8.01782 8.06543C8.01782 11.335 10.76 14.0537 14.0295 14.0537ZM14.0295 12.0732C11.7561 12.0732 9.99829 10.3272 9.99829 8.06543C9.99829 5.79199 11.7561 4.03418 14.0295 4.03418C16.3029 4.03418 18.0725 5.79199 18.0725 8.06543C18.0725 10.3272 16.3029 12.0732 14.0295 12.0732ZM14.0412 25.9482C20.5803 25.9482 25.9943 20.5225 25.9943 13.9951C25.9943 7.45605 20.5686 2.04199 14.0295 2.04199C7.50219 2.04199 2.08813 7.45605 2.08813 13.9951C2.08813 20.5225 7.51392 25.9482 14.0412 25.9482ZM14.0412 23.9561C8.51002 23.9561 4.09204 19.5264 4.09204 13.9951C4.09204 8.46387 8.49829 4.03418 14.0295 4.03418C19.5608 4.03418 24.0022 8.46387 24.0022 13.9951C24.0022 19.5264 19.5725 23.9561 14.0412 23.9561Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37156">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08813 2.04199)"/>
</clipPath>
</defs>
</svg>

`;

export const CharacterDuployan = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
