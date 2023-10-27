
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33443)">
<path d="M3.0083 21.74C3.0083 22.2556 3.43018 22.6892 3.9458 22.6892C4.47314 22.6892 4.89502 22.2556 4.89502 21.74V5.96655C4.89502 5.45093 4.47314 5.02905 3.9458 5.02905C3.43018 5.02905 3.0083 5.45093 3.0083 5.96655V21.74ZM22.6958 21.74C22.6958 22.2556 23.1294 22.6892 23.645 22.6892C24.1606 22.6892 24.5825 22.2556 24.5825 21.74V5.96655C24.5825 5.45093 24.1606 5.02905 23.645 5.02905C23.1294 5.02905 22.6958 5.45093 22.6958 5.96655V21.74Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M15.1255 18.6579C15.5239 18.6579 15.8989 18.4236 15.8989 17.8611V16.7829H16.3677C16.8247 16.7829 17.0122 16.49 17.0122 16.1384C17.0122 15.7517 16.8013 15.4822 16.3677 15.4822H15.8989V10.6775C15.8989 9.90406 15.3833 9.4939 14.6216 9.4939C13.8481 9.4939 13.4731 9.90406 13.1099 10.5837C12.4185 11.7908 11.4106 13.6658 10.8599 14.7791C10.7075 15.1423 10.5786 15.5173 10.5786 15.9158C10.5786 16.4314 10.9536 16.7829 11.4927 16.7829H14.3521V17.8611C14.3521 18.4118 14.7271 18.6579 15.1255 18.6579ZM14.3872 15.529H11.9731V15.447C12.5942 14.0291 13.5669 12.2244 14.3403 10.865H14.3872V15.529Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33443">
<rect width="21.5742" height="17.6836" fill="currentColor" transform="translate(3.0083 5.00562)"/>
</clipPath>
</defs>
</svg>

`;

export const 4Lane = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
