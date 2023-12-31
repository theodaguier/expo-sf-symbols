
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34220)">
<path d="M3.68604 24.5939H23.9594C26.4204 24.5939 27.6391 23.3869 27.6391 20.9728V6.65246C27.6391 4.2384 26.4204 3.01965 23.9594 3.01965H3.68604C1.23682 3.01965 0.00634766 4.2384 0.00634766 6.65246V20.9728C0.00634766 23.3869 1.23682 24.5939 3.68604 24.5939Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.2211 20.0236C10.6821 20.0236 10.3305 19.6486 10.3305 19.0744V17.1524L10.5063 15.2774L8.76026 17.1407L5.13916 20.7619C4.96338 20.9377 4.74073 21.043 4.44776 21.043C3.90869 21.043 3.55713 20.6915 3.55713 20.1407C3.55713 19.9063 3.67432 19.6602 3.8501 19.4844L7.48291 15.8634L9.36963 14.1055L7.57666 14.293H5.56104C4.9751 14.293 4.6001 13.9415 4.6001 13.4024C4.6001 12.8751 4.96338 12.5236 5.5376 12.5236H11.0922C11.7133 12.5236 12.1118 12.8048 12.1118 13.5196V19.0508C12.1118 19.6135 11.7485 20.0236 11.2211 20.0236Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34220">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.00634766 3.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpForwardBottomleadingRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
