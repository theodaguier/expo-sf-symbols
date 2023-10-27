
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34795)">
<path d="M7.63501 26.2754H20.0803C22.4944 26.2754 23.7131 25.0449 23.7131 22.6074V4.83008C23.7131 2.38086 22.5061 1.15039 20.0803 1.15039H17.1038C16.7053 1.15039 16.4358 1.43164 16.4358 1.85352C16.4358 1.91211 16.4358 1.9707 16.4358 2.01758C16.4358 3.54101 15.4045 4.45508 13.8577 4.45508C12.3108 4.45508 11.2795 3.54101 11.2795 2.01758C11.2795 1.9707 11.2795 1.91211 11.2795 1.85352C11.2795 1.43164 11.01 1.15039 10.6116 1.15039H7.63501C5.20923 1.15039 4.0022 2.38086 4.0022 4.83008V22.6074C4.0022 25.0449 5.22095 26.2754 7.63501 26.2754ZM9.41626 9.88086C8.99439 9.88086 8.6897 9.56445 8.6897 9.14258C8.6897 8.74414 8.99439 8.42773 9.41626 8.42773H18.3108C18.721 8.42773 19.0256 8.74414 19.0256 9.14258C19.0256 9.56445 18.721 9.88086 18.3108 9.88086H9.41626ZM9.41626 14.041C8.99439 14.041 8.6897 13.7246 8.6897 13.3262C8.6897 12.916 8.99439 12.5996 9.41626 12.5996H13.6233C14.0452 12.5996 14.3499 12.916 14.3499 13.3262C14.3499 13.7246 14.0452 14.041 13.6233 14.041H9.41626Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34795">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.0022 1.15039)"/>
</clipPath>
</defs>
</svg>

`;

export const WalletPassFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
