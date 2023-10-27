
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
<g clip-path="url(#clip0_2207_33570)">
<path d="M19.7273 24.269L15.5085 14.437L14.9577 15.398L20.7937 15.7261C21.5788 15.773 21.9538 14.9292 21.3913 14.355L9.78979 2.49564C9.27417 1.96829 8.47729 2.26126 8.46557 2.99954L8.27807 19.4995C8.26635 20.3081 9.1687 20.6362 9.69604 20.0386L13.4577 15.8667L12.3679 15.5855L16.446 25.6401C16.5983 26.0386 17.0085 26.2261 17.3718 26.062L19.3991 25.23C19.7741 25.0894 19.903 24.6558 19.7273 24.269Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.65308 6.9136L21.2625 25.4644C22.1649 26.355 23.618 26.355 24.4969 25.4409C25.3641 24.5503 25.3524 23.1323 24.4852 22.2534L5.88746 3.70266C4.99683 2.82376 3.55543 2.81204 2.6648 3.69094C1.7859 4.56985 1.7859 6.03469 2.65308 6.9136Z" fill="currentColor"/>
<path d="M3.62573 5.94094L22.2351 24.4917C22.5866 24.855 23.1726 24.855 23.5124 24.4917C23.8523 24.1401 23.864 23.5776 23.5124 23.2144L4.91479 4.6636C4.56323 4.31204 3.98901 4.31204 3.62573 4.6636C3.28589 5.01516 3.28589 5.6011 3.62573 5.94094Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33570">
<rect width="23.1372" height="24.0762" fill="currentColor" transform="translate(2.00415 2.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const CursorarrowSlash = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
