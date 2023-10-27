
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34526)">
<path d="M23.2338 23.4107C26.7729 23.4107 29.5385 20.8208 29.5385 17.5982C29.5385 15.1373 28.1206 13.0044 25.8354 12.0435C25.8588 6.8169 22.0971 3.04346 17.3042 3.04346C14.1284 3.04346 11.8667 4.74268 10.4604 6.79346C7.57764 5.94971 4.43702 8.14112 4.37842 11.4224C1.72998 11.8442 0.0776367 14.2115 0.0776367 17.0708C0.0776367 20.5162 3.08936 23.4107 7.09717 23.4107H23.2338Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9761 18.8052C13.5894 18.8052 13.273 18.6412 12.9918 18.2779L10.3668 14.9732C10.191 14.7388 10.0972 14.5044 10.0972 14.2583C10.0972 13.7076 10.5191 13.2857 11.0465 13.2857C11.398 13.2857 11.691 13.4497 11.9136 13.7544L13.9293 16.3912L17.9371 9.6997C18.1246 9.37157 18.441 9.17236 18.7691 9.17236C19.3199 9.17236 19.7652 9.55907 19.7652 10.0747C19.7652 10.3442 19.6129 10.6138 19.4957 10.8013L14.9136 18.2662C14.691 18.6177 14.3629 18.8052 13.9761 18.8052Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34526">
<rect width="29.4609" height="22.2773" fill="currentColor" transform="translate(0.0776367 3.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const CheckmarkIcloudFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
