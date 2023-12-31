
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
<g clip-path="url(#clip0_2207_34462)">
<path d="M13.9909 25.9356C20.53 25.9356 25.944 20.5099 25.944 13.9825C25.944 7.44348 20.5183 2.02942 13.9792 2.02942C7.4519 2.02942 2.03784 7.44348 2.03784 13.9825C2.03784 20.5099 7.46362 25.9356 13.9909 25.9356ZM13.9909 23.9435C8.45972 23.9435 4.04175 19.5138 4.04175 13.9825C4.04175 8.4513 8.448 4.02161 13.9792 4.02161C19.5105 4.02161 23.9519 8.4513 23.9519 13.9825C23.9519 19.5138 19.5222 23.9435 13.9909 23.9435Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.83472 18.213H19.1589C19.7566 18.213 20.1081 17.8966 20.1081 17.4396C20.1081 16.7833 19.4636 16.2091 18.8894 15.6232C18.444 15.1661 18.362 14.2403 18.3151 13.5021C18.2566 11.006 17.5886 9.29504 15.8776 8.66223C15.6198 7.8302 14.9401 7.15051 13.9909 7.15051C13.0417 7.15051 12.3737 7.8302 12.1042 8.66223C10.3933 9.29504 9.72534 11.006 9.67846 13.5021C9.61987 14.2403 9.52612 15.1661 9.09253 15.6232C8.54175 16.2208 7.87378 16.7833 7.87378 17.4396C7.87378 17.8966 8.22534 18.213 8.83472 18.213ZM13.9909 20.92C15.0925 20.92 15.9011 20.1349 15.9714 19.1856H12.0105C12.0925 20.1349 12.8894 20.92 13.9909 20.92Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34462">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03784 2.02942)"/>
</clipPath>
</defs>
</svg>

`;

export const BellCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
