
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
<g clip-path="url(#clip0_2207_37186)">
<path d="M10.4885 25.2427H17.6019C19.09 25.2427 19.7933 24.7622 20.5667 23.9302L25.1136 18.9146C25.8752 18.0708 26.0862 17.4966 26.0862 16.3364V10.981C26.0862 9.80908 25.8752 9.24658 25.1136 8.40283L20.5667 3.38721C19.7933 2.55518 19.09 2.06299 17.6019 2.06299H10.4885C9.00024 2.06299 8.2854 2.55518 7.52368 3.38721L2.97681 8.40283C2.20337 9.24658 2.00415 9.80908 2.00415 10.981V16.3364C2.00415 17.4966 2.20337 18.0708 2.97681 18.9146L7.52368 23.9302C8.2854 24.7622 9.00024 25.2427 10.4885 25.2427Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.0511 15.8325C13.4417 15.8325 13.1019 15.4927 13.0901 14.8716L12.9378 8.48487C12.9261 7.86377 13.3831 7.41846 14.0394 7.41846C14.6839 7.41846 15.1644 7.87549 15.1526 8.49658L14.9886 14.8716C14.9769 15.5044 14.637 15.8325 14.0511 15.8325ZM14.0511 19.7583C13.348 19.7583 12.7386 19.1958 12.7386 18.5044C12.7386 17.813 13.3362 17.2388 14.0511 17.2388C14.7659 17.2388 15.3636 17.8013 15.3636 18.5044C15.3636 19.2075 14.7542 19.7583 14.0511 19.7583Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37186">
<rect width="24.082" height="23.1914" fill="currentColor" transform="translate(2.00415 2.06299)"/>
</clipPath>
</defs>
</svg>

`;

export const ExclamationmarkOctagonFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
