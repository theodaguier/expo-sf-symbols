
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
<g clip-path="url(#clip0_2207_34713)">
<path d="M0.730757 12.5386L11.2776 23.0386C12.7776 24.5386 14.3831 24.5386 15.9065 23.0386L26.4183 12.5386C27.4378 11.519 27.344 10.2769 26.4065 9.29248C23.3128 6.06983 18.4495 4.06592 13.5745 4.06592C8.69951 4.06592 3.84795 6.08154 0.742475 9.29248C-0.195025 10.2651 -0.288775 11.519 0.730757 12.5386ZM2.12529 11.2964C1.86748 11.0386 1.89092 10.769 2.11357 10.5347C4.86748 7.69873 9.17998 5.95264 13.5276 5.95264C17.887 5.95264 22.1526 7.73389 24.9417 10.5347C25.1761 10.769 25.1878 11.0386 24.93 11.2964L14.5823 21.6206C13.8675 22.3237 13.1878 22.3237 12.4729 21.6206L2.12529 11.2964Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34713">
<rect width="27.1446" height="20.5195" fill="currentColor" transform="translate(0.00219727 4.06592)"/>
</clipPath>
</defs>
</svg>

`;

export const FieldOfViewWide = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
