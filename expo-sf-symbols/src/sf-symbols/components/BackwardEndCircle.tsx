
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
<g clip-path="url(#clip0_2207_33866)">
<path d="M13.9741 25.9328C20.5132 25.9328 25.9272 20.5071 25.9272 13.9797C25.9272 7.44067 20.5015 2.02661 13.9624 2.02661C7.43506 2.02661 2.021 7.44067 2.021 13.9797C2.021 20.5071 7.44678 25.9328 13.9741 25.9328ZM13.9741 23.9407C8.44288 23.9407 4.02491 19.511 4.02491 13.9797C4.02491 8.44849 8.43116 4.0188 13.9624 4.0188C19.4937 4.0188 23.9351 8.44849 23.9351 13.9797C23.9351 19.511 19.5054 23.9407 13.9741 23.9407Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.2749 18.2922C18.6968 18.2922 19.0483 17.9758 19.0483 17.3664V10.6282C19.0483 10.0188 18.6968 9.70239 18.2749 9.70239C18.0522 9.70239 17.853 9.7727 17.6421 9.90161L12.0522 13.1828C11.6655 13.4055 11.5015 13.6868 11.5015 13.9914C11.5015 14.3078 11.6655 14.5891 12.0522 14.8118L17.6421 18.093C17.853 18.2219 18.0522 18.2922 18.2749 18.2922ZM9.60302 18.4446H10.8569C11.3257 18.4446 11.5835 18.2102 11.5835 17.7297V10.2415C11.5835 9.74927 11.3257 9.51489 10.8569 9.51489H9.60302C9.13427 9.51489 8.87646 9.76099 8.87646 10.2415V17.7297C8.87646 18.2102 9.13427 18.4446 9.60302 18.4446Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33866">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BackwardEndCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
