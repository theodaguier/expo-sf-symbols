
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
<g clip-path="url(#clip0_2207_33136)">
<path d="M14.0307 25.9405C20.5698 25.9405 25.9838 20.5264 25.9838 13.9873C25.9838 7.45996 20.5581 2.03418 14.019 2.03418C7.4917 2.03418 2.07764 7.45996 2.07764 13.9873C2.07764 20.5264 7.50342 25.9405 14.0307 25.9405Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.01904 19.2022C7.67919 19.2022 7.35107 18.9092 7.35107 18.3467C7.35107 13.5303 9.40185 10.5537 14.0542 10.5537H14.2417V8.09277C14.2417 7.65918 14.5581 7.30762 15.0151 7.30762C15.3432 7.30762 15.5424 7.43652 15.8823 7.76465L21.0151 12.5577C21.2729 12.792 21.3549 13.0264 21.3549 13.2491C21.3549 13.4834 21.2729 13.7178 21.0151 13.9522L15.8823 18.7803C15.5776 19.0616 15.3315 19.2022 15.0034 19.2022C14.5581 19.2022 14.2417 18.8741 14.2417 18.4522V15.9561H14.0542C11.5347 15.9561 9.95263 16.6006 8.81591 18.7217C8.60497 19.1319 8.30029 19.2022 8.01904 19.2022Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33136">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07764 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpForwardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
