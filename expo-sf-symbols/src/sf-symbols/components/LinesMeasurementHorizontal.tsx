
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
<g clip-path="url(#clip0_2207_34852)">
<path d="M26.7681 19.4609C27.565 19.4609 27.9751 19.0507 27.9751 18.2656V8.94923C27.9751 8.16407 27.565 7.75391 26.7681 7.75391C25.9829 7.75391 25.5728 8.16407 25.5728 8.94923V18.2656C25.5728 19.0507 25.9829 19.4609 26.7681 19.4609Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M20.6509 16.5078C21.4361 16.5078 21.8462 16.0976 21.8462 15.3007V11.9141C21.8462 11.1172 21.4361 10.707 20.6509 10.707C19.8657 10.707 19.4556 11.1172 19.4556 11.9141V15.3007C19.4556 16.0976 19.8657 16.5078 20.6509 16.5078Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.5337 24.125C15.3189 24.125 15.7407 23.7148 15.7407 22.9296V4.28515C15.7407 3.5 15.3189 3.08984 14.5337 3.08984C13.7485 3.08984 13.3267 3.5 13.3267 4.28515V22.9296C13.3267 23.7148 13.7485 24.125 14.5337 24.125Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.4165 16.5078C9.20166 16.5078 9.61181 16.0976 9.61181 15.3007V11.9141C9.61181 11.1172 9.20166 10.707 8.4165 10.707C7.63134 10.707 7.22119 11.1172 7.22119 11.9141V15.3007C7.22119 16.0976 7.63134 16.5078 8.4165 16.5078Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M2.29932 19.4609C3.08448 19.4609 3.49463 19.0507 3.49463 18.2656V8.94923C3.49463 8.16407 3.08448 7.75391 2.29932 7.75391C1.50244 7.75391 1.09229 8.16407 1.09229 8.94923V18.2656C1.09229 19.0507 1.50244 19.4609 2.29932 19.4609Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34852">
<rect width="26.8828" height="21.0352" fill="currentColor" transform="translate(1.09229 3.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const LinesMeasurementHorizontal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
