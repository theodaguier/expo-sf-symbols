
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36554)">
<path d="M6.32431 22.7639L22.0977 19.9866C24.5 19.553 25.4961 18.135 25.086 15.7678L23.1641 4.8811C22.7422 2.50219 21.3243 1.51781 18.9102 1.93969L3.14853 4.71704C0.734461 5.15063 -0.261633 6.55688 0.148523 8.93579L2.08212 19.8225C2.49228 22.2014 3.89853 23.1858 6.32431 22.7639Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.2501 28.0605H26.258C29.5861 28.0605 31.5431 26.1269 31.5431 22.8222V11.7714C31.5431 8.4668 29.5861 6.54492 26.258 6.54492H10.2501C6.91027 6.54492 4.97668 8.4668 4.97668 11.7714V22.8222C4.97668 26.1386 6.91027 28.0605 10.2501 28.0605Z" fill="currentColor"/>
<path d="M10.2501 26.455H26.258C28.7072 26.455 29.9376 25.2363 29.9376 22.8222V11.7714C29.9376 9.35742 28.7072 8.13867 26.258 8.13867H10.2501C7.8009 8.13867 6.57043 9.35742 6.57043 11.7714V22.8222C6.57043 25.248 7.8009 26.455 10.2501 26.455Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36554">
<rect width="31.4842" height="26.9414" fill="currentColor" transform="translate(0.0588379 1.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleFillOnRectangleAngledFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
