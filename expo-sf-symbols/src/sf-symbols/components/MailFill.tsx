
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
<g clip-path="url(#clip0_2207_34733)">
<path d="M5.59375 10.1968C5.125 10.1968 4.78515 9.82177 4.78515 9.36474C4.78515 8.90771 5.125 8.55615 5.59375 8.55615H13.1523C13.6093 8.55615 13.9726 8.90771 13.9726 9.36474C13.9726 9.82177 13.6093 10.1968 13.1523 10.1968H5.59375ZM5.59375 13.3257C5.125 13.3257 4.78515 12.9624 4.78515 12.5054C4.78515 12.0483 5.125 11.6851 5.59375 11.6851H11.125C11.582 11.6851 11.9453 12.0483 11.9453 12.5054C11.9453 12.9624 11.582 13.3257 11.125 13.3257H5.59375ZM20.1015 13.6421C18.5546 13.6421 17.289 12.3882 17.289 10.8296C17.289 9.27099 18.5546 8.01709 20.1015 8.01709C21.6484 8.01709 22.9023 9.27099 22.9023 10.8296C22.9023 12.3882 21.6484 13.6421 20.1015 13.6421ZM3.70703 24.6694H23.9804C26.4414 24.6694 27.6601 23.4624 27.6601 21.0483V6.72802C27.6601 4.31396 26.4414 3.09521 23.9804 3.09521H3.70703C1.25781 3.09521 0.0273438 4.31396 0.0273438 6.72802V21.0483C0.0273438 23.4624 1.25781 24.6694 3.70703 24.6694Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34733">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0273438 3.09521)"/>
</clipPath>
</defs>
</svg>

`;

export const MailFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
