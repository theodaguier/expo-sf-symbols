
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="31" height="29" viewBox="0 0 31 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34226)">
<path d="M3.74073 21.0293H19.7485C22.1977 21.0293 23.4282 19.8105 23.4282 17.3964V6.3457C23.4282 3.93164 22.1977 2.71289 19.7485 2.71289H3.74073C1.29151 2.71289 0.0610352 3.93164 0.0610352 6.3457V17.3964C0.0610352 19.8222 1.29151 21.0293 3.74073 21.0293Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.52979 28.0605H25.5376C28.8657 28.0605 30.8227 26.1269 30.8227 22.8222V11.7714C30.8227 8.4668 28.8657 6.54492 25.5376 6.54492H9.52979C6.18995 6.54492 4.25635 8.4668 4.25635 11.7714V22.8222C4.25635 26.1386 6.18995 28.0605 9.52979 28.0605Z" fill="currentColor"/>
<path d="M9.52979 26.455H25.5376C27.9868 26.455 29.2172 25.2363 29.2172 22.8222V11.7714C29.2172 9.35742 27.9868 8.13867 25.5376 8.13867H9.52979C7.08057 8.13867 5.8501 9.35742 5.8501 11.7714V22.8222C5.8501 25.248 7.08057 26.455 9.52979 26.455Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34226">
<rect width="30.7617" height="26.9414" fill="currentColor" transform="translate(0.0610352 1.11914)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleFillOnRectangleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
