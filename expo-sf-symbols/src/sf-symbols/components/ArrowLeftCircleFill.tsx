
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
<g clip-path="url(#clip0_2207_37326)">
<path d="M13.9531 25.923C20.4922 25.923 25.9062 20.4973 25.9062 13.9699C25.9062 7.43091 20.4805 2.01685 13.9414 2.01685C7.41406 2.01685 2 7.43091 2 13.9699C2 20.4973 7.42578 25.923 13.9531 25.923Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.75391 13.9583C7.75391 13.6888 7.84766 13.5013 8.09375 13.2552L12.1719 9.15357C12.3359 8.98951 12.5469 8.90747 12.8047 8.90747C13.3086 8.90747 13.6836 9.28247 13.6836 9.78638C13.6836 10.0442 13.5664 10.2669 13.4141 10.4426L11.9141 11.9309L10.4609 13.1497L13.0156 13.0442H19.2852C19.8125 13.0442 20.1992 13.4191 20.1992 13.9583C20.1992 14.4857 19.8242 14.8607 19.2852 14.8607H13.0156L10.4492 14.7669L11.9141 15.9857L13.4141 17.4739C13.5781 17.6379 13.6836 17.8607 13.6836 18.1185C13.6836 18.6224 13.3086 19.0091 12.8047 19.0091C12.5469 19.0091 12.3359 18.9152 12.1719 18.7513L8.09375 14.6614C7.87109 14.4388 7.75391 14.2277 7.75391 13.9583Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37326">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2 2.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowLeftCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
