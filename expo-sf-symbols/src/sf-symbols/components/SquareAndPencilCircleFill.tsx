
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
<g clip-path="url(#clip0_2207_32912)">
<path d="M14.0351 26.0498C20.5742 26.0498 25.9882 20.6357 25.9882 14.0966C25.9882 7.56934 20.5625 2.14355 14.0234 2.14355C7.49609 2.14355 2.08203 7.56934 2.08203 14.0966C2.08203 20.6357 7.50781 26.0498 14.0351 26.0498Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3203 19.8624C8.98437 19.8624 8.28125 19.171 8.28125 17.8467V10.8038C8.28125 9.47959 8.98437 8.77647 10.3203 8.77647H16.6484L15.3828 10.0421H10.3437C9.81641 10.0421 9.54687 10.2999 9.54687 10.8624V17.7764C9.54687 18.3389 9.81641 18.5967 10.3437 18.5967H17.4804C17.832 18.5967 18.1015 18.3389 18.1015 17.7764V12.8077L19.3554 11.5538V17.8467C19.3554 19.171 18.6523 19.8624 17.4922 19.8624H10.3203ZM12.6054 15.8897C12.3711 15.9835 12.125 15.7491 12.2304 15.5147L12.7929 14.3546L18.3242 8.81163L19.3789 9.83116L13.8242 15.3858L12.6054 15.8897ZM19.8945 9.30382L18.8515 8.27256L19.3789 7.75694C19.6367 7.48741 20.0234 7.48741 20.2695 7.7335L20.4218 7.88585C20.6562 8.12022 20.6679 8.47177 20.3984 8.74132L19.8945 9.30382Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_32912">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08203 2.13184)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareAndPencilCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
