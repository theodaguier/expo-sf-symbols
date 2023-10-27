
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
<g clip-path="url(#clip0_2207_34383)">
<path d="M13.6955 25.2447C13.9416 25.2447 14.2932 25.0806 14.551 24.9283C21.1604 20.7095 25.344 15.7994 25.344 10.8071C25.344 6.65869 22.4963 3.729 18.8049 3.729C16.5197 3.729 14.7619 4.99463 13.6955 6.92822C12.6526 5.00635 10.8831 3.729 8.58618 3.729C4.9065 3.729 2.05884 6.65869 2.05884 10.8071C2.05884 15.7994 6.24243 20.7095 12.8518 24.9283C13.0979 25.0806 13.4611 25.2447 13.6955 25.2447Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.5393 10.772V15.1314L14.4572 17.1001L15.465 16.0454L16.5315 14.9673C16.7072 14.7915 16.9299 14.6861 17.176 14.6861C17.6565 14.6861 18.0315 15.0376 18.0315 15.5298C18.0315 15.8111 17.9143 16.0103 17.7268 16.1861L14.2815 19.3384C14.0236 19.5845 13.8361 19.6548 13.6018 19.6548C13.3674 19.6548 13.1799 19.5845 12.9221 19.3384L9.47681 16.1861C9.28931 16.0103 9.17212 15.8111 9.17212 15.5298C9.17212 15.0376 9.52368 14.6861 10.0276 14.6861C10.262 14.6861 10.5081 14.7915 10.6721 14.9673L11.7385 16.0454L12.7463 17.1001L12.676 15.1314V10.772C12.676 10.2798 13.0979 9.86963 13.6018 9.86963C14.1057 9.86963 14.5393 10.2798 14.5393 10.772Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34383">
<rect width="23.2852" height="22.2305" fill="currentColor" transform="translate(2.05884 3.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownHeartFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
