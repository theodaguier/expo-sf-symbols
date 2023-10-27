
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
<g clip-path="url(#clip0_2207_34461)">
<path d="M4.81152 21.9982H23.3858C24.4873 21.9982 25.1553 21.4356 25.1553 20.5802C25.1553 19.4083 23.96 18.3536 22.9522 17.3106C22.1787 16.5021 21.9678 14.838 21.874 13.4903C21.792 8.99036 20.5967 5.89661 17.4795 4.77161C17.0342 3.23645 15.8272 2.02942 14.0928 2.02942C12.3701 2.02942 11.1514 3.23645 10.7178 4.77161C7.60058 5.89661 6.40527 8.99036 6.32324 13.4903C6.22949 14.838 6.01855 16.5021 5.24511 17.3106C4.22558 18.3536 3.04199 19.4083 3.04199 20.5802C3.04199 21.4356 3.69824 21.9982 4.81152 21.9982ZM14.0928 26.6974C16.085 26.6974 17.5381 25.2442 17.6904 23.6036H10.5068C10.6592 25.2442 12.1123 26.6974 14.0928 26.6974Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34461">
<rect width="22.1133" height="24.668" fill="currentColor" transform="translate(3.04199 2.02942)"/>
</clipPath>
</defs>
</svg>

`;

export const BellFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
