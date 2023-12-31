
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35606)">
<path d="M9.99023 25.2817H17.2324C21.2168 25.2817 23.1387 23.3599 23.1387 19.3755V7.91455C23.1387 3.93018 21.2168 2.0083 17.2324 2.0083H9.99023C6.00586 2.0083 4.08398 3.93018 4.08398 7.91455V19.3755C4.08398 23.3599 6.00586 25.2817 9.99023 25.2817ZM9.99023 23.395C7.18945 23.395 5.9707 22.1763 5.9707 19.3755V7.91455C5.9707 5.11377 7.18945 3.89502 9.99023 3.89502H17.2324C20.0332 3.89502 21.252 5.11377 21.252 7.91455V19.3755C21.252 22.1763 20.0332 23.395 17.2324 23.395H9.99023ZM5.0332 9.81299H22.1895V8.62939H5.0332V9.81299ZM10.3652 10.6099H16.8574C17.666 10.6099 18.2637 10.0356 18.2637 9.21533C18.2637 8.39502 17.666 7.8208 16.8574 7.8208H10.3652C9.59179 7.8208 8.95898 8.39502 8.95898 9.21533C8.95898 10.0356 9.59179 10.6099 10.3652 10.6099Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35606">
<rect width="19.0547" height="23.2852" fill="currentColor" transform="translate(4.08398 2.0083)"/>
</clipPath>
</defs>
</svg>

`;

export const AirpodsChargingcase = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
