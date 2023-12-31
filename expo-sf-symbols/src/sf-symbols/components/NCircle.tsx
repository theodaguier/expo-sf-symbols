
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
<g clip-path="url(#clip0_2207_37675)">
<path d="M13.9741 26.0068C20.5132 26.0068 25.9272 20.5811 25.9272 14.0537C25.9272 7.51465 20.5015 2.10059 13.9624 2.10059C7.43506 2.10059 2.021 7.51465 2.021 14.0537C2.021 20.5811 7.44678 26.0068 13.9741 26.0068ZM13.9741 24.0147C8.44288 24.0147 4.02491 19.585 4.02491 14.0537C4.02491 8.52247 8.43116 4.09278 13.9624 4.09278C19.4937 4.09278 23.9351 8.52247 23.9351 14.0537C23.9351 19.585 19.5054 24.0147 13.9741 24.0147Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.4233 19.4209C10.9858 19.4209 11.314 19.0811 11.314 18.4834V11.6631H11.3843L16.4937 18.8584C16.8101 19.292 17.0444 19.4209 17.4312 19.4209C18.0054 19.4209 18.3569 19.0694 18.3569 18.4483V9.40137C18.3569 8.81543 18.0288 8.46387 17.4663 8.46387C16.9155 8.46387 16.5991 8.83887 16.5991 9.40137V16.3506H16.5171L11.4194 9.02637C11.1147 8.6045 10.8569 8.46387 10.4702 8.46387C9.89599 8.46387 9.56787 8.85059 9.56787 9.44825V18.4834C9.56787 19.0576 9.88427 19.4209 10.4233 19.4209Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37675">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const NCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
