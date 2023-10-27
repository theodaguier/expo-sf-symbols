
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
<g clip-path="url(#clip0_2207_35993)">
<path d="M27.1084 21.7488C28.0694 18.2449 25.5264 16.7215 19.2452 16.7215C16.21 16.7215 13.0577 17.0262 10.6436 17.5301L11.0655 18.116C11.71 12.8777 10.1045 8.58869 6.57719 6.73711L6.91704 8.17853C8.28813 4.31134 5.85063 1.92072 3.61235 1.92072C1.92485 1.92072 0.471726 3.23322 1.18657 6.15119L5.59282 24.034C6.02641 25.7918 7.18657 26.7293 8.92094 26.7293H22.5967C25.0108 26.7293 26.0772 25.5691 27.1084 21.7488Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.5616 4.13554C10.4913 4.4871 10.6319 4.76835 10.9483 4.89726C11.335 5.02617 11.7334 4.82695 11.8038 4.41679C12.0616 2.65898 11.1944 0.854293 9.75299 0.13945C9.29595 -0.0949256 8.93267 0.127731 8.80377 0.444137C8.6983 0.748824 8.78033 1.08867 9.10845 1.26445C10.1749 1.75663 10.7256 2.90507 10.5616 4.13554ZM13.7725 13.077C13.6436 13.534 13.878 13.827 14.1827 13.909C14.5108 13.991 14.9092 13.8387 15.0147 13.4402C15.6124 11.202 14.6749 7.9207 12.2256 6.76054C11.7803 6.5496 11.4405 6.71367 11.2881 6.9832C11.1475 7.26445 11.1827 7.66288 11.6045 7.88554C13.6788 8.9871 14.2413 11.366 13.7725 13.077Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35993">
<rect width="26.3055" height="28.5894" fill="currentColor" transform="translate(1 0.0419922)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatRightMassageFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
