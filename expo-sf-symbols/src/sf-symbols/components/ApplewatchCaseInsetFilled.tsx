
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
<g clip-path="url(#clip0_2207_35570)">
<path d="M8.32691 25.4292H17.2566C20.5496 25.4292 22.5183 23.4253 22.5183 20.0737V8.39014C22.5183 5.03857 20.5496 3.04639 17.2566 3.04639H8.32691C5.03394 3.04639 3.06519 5.03857 3.06519 8.39014V20.0737C3.06519 23.4253 5.03394 25.4292 8.32691 25.4292ZM8.24488 23.5424C6.18238 23.5424 4.95191 22.2885 4.95191 20.1557V8.3667C4.95191 6.24561 6.18238 4.9917 8.24488 4.9917H17.3386C19.4129 4.9917 20.6316 6.24561 20.6316 8.3667V20.1557C20.6316 22.2885 19.4129 23.5424 17.3386 23.5424H8.24488ZM22.3074 13.0073H22.8347C23.5847 13.0073 24.0652 12.4917 24.0652 11.6831V9.72607C24.0652 8.89404 23.5847 8.37842 22.8347 8.37842H22.3074V13.0073Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.5105 20.3081C6.5105 21.3393 7.10816 21.9721 8.09253 21.9721H17.5027C18.4754 21.9721 19.073 21.3393 19.073 20.3081V8.15576C19.073 7.14795 18.4519 6.47998 17.5027 6.47998H8.09253C7.1316 6.47998 6.5105 7.14795 6.5105 8.15576V20.3081Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35570">
<rect width="21" height="22.418" fill="currentColor" transform="translate(3.06519 3.01123)"/>
</clipPath>
</defs>
</svg>

`;

export const ApplewatchCaseInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
