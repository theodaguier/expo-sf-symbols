
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
<g clip-path="url(#clip0_2207_36384)">
<path d="M7.86499 0.127441C5.33374 0.127441 3.02515 3.98291 3.02515 6.97119C3.02515 8.40088 3.50562 11.2133 4.63062 13.4751H11.1111C12.2244 11.2133 12.7166 8.40088 12.7166 6.97119C12.7166 3.98291 10.408 0.127441 7.86499 0.127441ZM7.87671 20.3657C9.70484 20.3657 10.6892 18.5493 10.6892 15.9712C10.6892 15.7251 10.6658 15.3618 10.6189 15.0805H5.13453C5.08765 15.3618 5.06421 15.7251 5.06421 15.9712C5.06421 18.5493 6.04859 20.3657 7.87671 20.3657ZM22.1032 7.82666C19.7126 6.95947 16.2439 9.78369 15.2126 12.5962C14.7321 13.9438 14.2165 16.7563 14.486 19.2641L20.5798 21.479C22.4079 19.7329 23.8259 17.2719 24.3181 15.9008C25.3376 13.1001 24.4939 8.70556 22.1032 7.82666ZM15.1892 26.8462C16.9118 27.4672 18.4587 26.0962 19.3376 23.6821C19.4196 23.4477 19.5134 23.0962 19.5837 22.8149L14.4274 20.9282C14.2868 21.186 14.1345 21.5141 14.0524 21.7485C13.1735 24.1743 13.4782 26.2133 15.1892 26.8462Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36384">
<rect width="21.7181" height="27.3164" fill="currentColor" transform="translate(3.02515 0.127441)"/>
</clipPath>
</defs>
</svg>

`;

export const ShoeprintsFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
