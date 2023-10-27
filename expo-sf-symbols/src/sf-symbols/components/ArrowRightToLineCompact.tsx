
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
<g clip-path="url(#clip0_2207_37492)">
<path d="M4.04199 13.9465C4.04199 14.5559 4.46387 14.9895 5.07324 14.9895H16.9209L19.4287 14.9075L15.5732 18.423L12.9834 21.048C12.7842 21.2473 12.6904 21.5285 12.6904 21.8098C12.6904 22.3957 13.1357 22.8176 13.71 22.8176C14.0029 22.8176 14.2608 22.7121 14.4951 22.4777L22.2647 14.7317C22.499 14.509 22.6279 14.2278 22.6279 13.9465C22.6279 13.6536 22.499 13.384 22.2647 13.1497L14.4951 5.40356C14.2608 5.16919 14.0029 5.052 13.71 5.052C13.1357 5.052 12.6904 5.4856 12.6904 6.07154C12.6904 6.35279 12.7842 6.63404 12.9834 6.82154L15.5732 9.45826L19.417 12.9856L16.9209 12.8918H5.07324C4.46387 12.8918 4.04199 13.3254 4.04199 13.9465ZM22.5928 21.8566C22.5928 22.4543 23.0264 22.8645 23.6475 22.8645C24.2568 22.8645 24.6904 22.4543 24.6904 21.8566V6.0481C24.6904 5.43872 24.2568 5.01685 23.6475 5.01685C23.0264 5.01685 22.5928 5.43872 22.5928 6.0481V21.8566Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37492">
<rect width="20.6484" height="18.293" fill="currentColor" transform="translate(4.04199 5.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowRightToLineCompact = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
