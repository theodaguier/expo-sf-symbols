
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
<g clip-path="url(#clip0_2207_37557)">
<path d="M10.0615 24.6386C10.6943 24.6386 11.1045 24.2168 11.1045 23.6074C11.1045 23.3027 10.999 23.08 10.8232 22.8925L7.43653 19.5996L4.542 17.1152L4.33106 17.6542L7.96387 17.8183H22.9287C25.6591 17.8183 26.7959 16.5644 26.7959 13.916V6.99024C26.7959 4.25977 25.6591 3.12305 22.9287 3.12305H16.3662C15.7216 3.12305 15.2998 3.5918 15.2998 4.16602C15.2998 4.74024 15.7216 5.20899 16.3662 5.20899H22.9287C24.1709 5.20899 24.6982 5.74805 24.6982 6.99024V13.916C24.6982 15.1933 24.1709 15.7324 22.9287 15.7324H7.96387L4.33106 15.8847L4.542 16.4238L7.43653 13.9511L10.8232 10.6582C10.999 10.4707 11.1045 10.2363 11.1045 9.93164C11.1045 9.33399 10.6943 8.90039 10.0615 8.90039C9.81543 8.90039 9.51075 9.0293 9.31153 9.22852L2.4209 15.9902C2.18652 16.2128 2.06934 16.4824 2.06934 16.7753C2.06934 17.0566 2.18652 17.3378 2.4209 17.5605L9.31153 24.3222C9.51075 24.5214 9.81543 24.6386 10.0615 24.6386Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37557">
<rect width="24.7266" height="22.6523" fill="currentColor" transform="translate(2.06934 3.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const ReturnLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
