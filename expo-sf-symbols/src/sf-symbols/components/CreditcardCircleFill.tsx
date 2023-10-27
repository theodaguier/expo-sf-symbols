
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
<g clip-path="url(#clip0_2207_34788)">
<path d="M13.9636 25.958C20.5027 25.958 25.9167 20.5323 25.9167 14.0049C25.9167 7.46582 20.491 2.05176 13.9519 2.05176C7.42456 2.05176 2.0105 7.46582 2.0105 14.0049C2.0105 20.5323 7.43628 25.958 13.9636 25.958Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.91284 19.0088C7.70581 19.0088 7.08472 18.4112 7.08472 17.1924V12.7041H20.8425V17.1924C20.8425 18.4112 20.2214 19.0088 19.0144 19.0088H8.91284ZM9.47534 17.1924H10.9167C11.2566 17.1924 11.491 16.9698 11.491 16.6416V15.5518C11.491 15.2237 11.2566 15.001 10.9167 15.001H9.47534C9.14722 15.001 8.91284 15.2237 8.91284 15.5518V16.6416C8.91284 16.9698 9.14722 17.1924 9.47534 17.1924ZM7.08472 11.3682V10.8291C7.08472 9.61034 7.70581 9.02441 8.91284 9.02441H19.0144C20.2214 9.02441 20.8425 9.62206 20.8425 10.8291V11.3682H7.08472Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34788">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0105 2.05176)"/>
</clipPath>
</defs>
</svg>

`;

export const CreditcardCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
