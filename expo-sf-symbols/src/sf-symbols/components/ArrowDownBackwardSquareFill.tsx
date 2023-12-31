
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
<g clip-path="url(#clip0_2207_37385)">
<path d="M6.69434 24.6119H20.9091C23.3701 24.6119 24.5888 23.3931 24.5888 20.979V6.67041C24.5888 4.25635 23.3701 3.0376 20.9091 3.0376H6.69434C4.24512 3.0376 3.01465 4.24463 3.01465 6.67041V20.979C3.01465 23.4048 4.24512 24.6119 6.69434 24.6119Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0107 10.8071C10.5498 10.8071 10.9014 11.1704 10.9014 11.7563V13.8306L10.7256 15.7173L12.4717 13.854L16.8896 9.42432C17.0771 9.24854 17.2999 9.14307 17.5928 9.14307C18.1202 9.14307 18.4834 9.49463 18.4834 10.0454C18.4834 10.2798 18.3663 10.5259 18.1905 10.7017L13.749 15.1197L11.8623 16.8892L13.6553 16.7017H15.8349C16.4208 16.7017 16.7959 17.0533 16.7959 17.5806C16.7959 18.1197 16.4326 18.4712 15.8584 18.4712H10.1396C9.51856 18.4712 9.13184 18.19 9.13184 17.4751V11.7798C9.13184 11.2056 9.4834 10.8071 10.0107 10.8071Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37385">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.01465 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownBackwardSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
