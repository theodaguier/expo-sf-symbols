
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
<g clip-path="url(#clip0_2207_35421)">
<path d="M4.05249 18.8223C4.05249 20.5567 5.10718 21.6582 6.73608 21.6582H21.3259C22.9548 21.6582 24.0095 20.5567 24.0095 18.8223V8.91992C24.0095 7.18554 22.9548 6.08398 21.3259 6.08398H6.73608C5.10718 6.08398 4.05249 7.18554 4.05249 8.91992V18.8223ZM5.93921 18.5879V9.15429C5.93921 8.41601 6.36108 7.9707 7.05249 7.9707H21.0213C21.7009 7.9707 22.1228 8.41601 22.1228 9.15429V18.5879C22.1228 19.3262 21.7009 19.7715 21.0213 19.7715H7.05249C6.36108 19.7715 5.93921 19.3262 5.93921 18.5879ZM16.0408 18.4121C18.5603 18.4121 20.5877 16.3731 20.5877 13.8652C20.5877 11.3574 18.5603 9.31836 16.0408 9.31836C13.533 9.31836 11.5056 11.3574 11.5056 13.8652C11.5056 16.3731 13.533 18.4121 16.0408 18.4121ZM16.0408 16.9121C14.3416 16.9121 13.0056 15.5645 13.0056 13.8652C13.0056 12.166 14.3416 10.8184 16.0408 10.8184C17.7517 10.8184 19.0877 12.166 19.0877 13.8652C19.0877 15.5645 17.7517 16.9121 16.0408 16.9121Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35421">
<rect width="19.957" height="15.5742" fill="currentColor" transform="translate(4.05249 6.08398)"/>
</clipPath>
</defs>
</svg>

`;

export const IpodshuffleGen2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
