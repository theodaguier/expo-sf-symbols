
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="33" viewBox="0 0 31 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34287)">
<path d="M21.6539 5.39502C21.6539 2.9458 20.4468 1.71533 18.021 1.71533H6.97022C4.54444 1.71533 3.3374 2.9458 3.3374 5.39502V21.4028C3.3374 23.8521 4.55615 25.0825 6.97022 25.0825H18.021C20.4351 25.0825 21.6539 23.8521 21.6539 21.4028V5.39502Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M28.6733 11.1841C28.6733 7.84424 26.7631 5.91064 23.4467 5.91064H12.3959C9.07958 5.91064 7.15771 7.84424 7.15771 11.1841V27.1919C7.15771 30.52 9.0913 32.4771 12.3959 32.4771H23.4467C26.7514 32.4771 28.6733 30.52 28.6733 27.1919V11.1841Z" fill="currentColor"/>
<path d="M27.0795 11.1841C27.0795 8.73486 25.8725 7.50439 23.4467 7.50439H12.3959C9.97021 7.50439 8.76318 8.73486 8.76318 11.1841V27.1919C8.76318 29.6411 9.98193 30.8716 12.3959 30.8716H23.4467C25.8608 30.8716 27.0795 29.6411 27.0795 27.1919V11.1841Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M26.5288 30.8482C27.4311 31.7388 28.8842 31.7388 29.7514 30.8247C30.6303 29.9341 30.6186 28.5278 29.7397 27.6372L3.88819 1.77395C3.00928 0.89505 1.56787 0.883331 0.665528 1.76223C-0.213379 2.64114 -0.213379 4.10599 0.665528 4.98489L26.5288 30.8482Z" fill="currentColor"/>
<path d="M27.5014 29.8872C27.8531 30.2388 28.4389 30.2388 28.7788 29.8872C29.1303 29.5239 29.1303 28.9614 28.7788 28.6099L2.92725 2.73488C2.57569 2.39504 1.98975 2.38332 1.63819 2.73488C1.28662 3.08644 1.28662 3.67238 1.63819 4.01222L27.5014 29.8872Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34287">
<rect width="30.3985" height="32.3555" fill="currentColor" transform="translate(0.00634766 0.121582)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitOnRectanglePortraitSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
