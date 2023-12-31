
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
<g clip-path="url(#clip0_2207_37558)">
<path d="M18.794 24.6386C19.0518 24.6386 19.3565 24.5214 19.5557 24.3222L26.4463 17.5605C26.6807 17.3378 26.7979 17.0566 26.7979 16.7753C26.7979 16.4824 26.6807 16.2128 26.4463 15.9902L19.5557 9.22852C19.3565 9.0293 19.0518 8.90039 18.794 8.90039C18.1729 8.90039 17.7627 9.33399 17.7627 9.93164C17.7627 10.2363 17.8565 10.4707 18.044 10.6582L21.419 13.9511L24.3252 16.4238L24.5244 15.8847L20.8916 15.7324H5.93848C4.69629 15.7324 4.15723 15.1933 4.15723 13.916V6.99024C4.15723 5.74805 4.69629 5.20899 5.93848 5.20899H12.501C13.1455 5.20899 13.5674 4.74024 13.5674 4.16602C13.5674 3.5918 13.1455 3.12305 12.501 3.12305H5.93848C3.20801 3.12305 2.07129 4.25977 2.07129 6.99024V13.916C2.07129 16.5644 3.20801 17.8183 5.93848 17.8183H20.8916L24.5244 17.6542L24.3252 17.1152L21.419 19.5996L18.044 22.8925C17.8565 23.08 17.7627 23.3027 17.7627 23.6074C17.7627 24.2168 18.1729 24.6386 18.794 24.6386Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37558">
<rect width="24.7266" height="22.6523" fill="currentColor" transform="translate(2.07129 3.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const ReturnRight = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
