
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
<g clip-path="url(#clip0_2207_33729)">
<path d="M13.9741 25.9671C20.5132 25.9671 25.9272 20.553 25.9272 14.0139C25.9272 7.48657 20.5015 2.06079 13.9624 2.06079C7.43506 2.06079 2.021 7.48657 2.021 14.0139C2.021 20.553 7.44678 25.9671 13.9741 25.9671Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.0835 15.2093C8.36084 15.2093 7.36475 14.096 7.36475 12.7366C7.36475 11.4944 8.16162 10.6038 9.20459 10.2874C9.40381 8.14282 11.2085 6.42016 13.3765 6.42016C15.0522 6.42016 16.3882 7.35766 17.1265 8.77563C19.0835 8.77563 20.5952 10.135 20.5952 11.9866C20.5952 13.7561 19.1538 15.2093 17.2788 15.2093H10.0835ZM11.9351 18.6429L12.9194 16.3694C12.9898 16.2053 13.0835 16.1468 13.2944 16.1468H14.9116C15.0874 16.1468 15.1343 16.2757 15.064 16.4397L14.3491 17.7991H15.8257C16.0601 17.7991 16.1187 18.01 15.9663 18.1858L12.6968 21.5022C12.6148 21.6077 12.5327 21.6194 12.4624 21.6077C12.3921 21.5491 12.3687 21.4671 12.4155 21.3616L13.3882 18.9593H12.1343C11.9233 18.9593 11.8413 18.8069 11.9351 18.6429Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33729">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.021 2.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const CloudBoltCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
