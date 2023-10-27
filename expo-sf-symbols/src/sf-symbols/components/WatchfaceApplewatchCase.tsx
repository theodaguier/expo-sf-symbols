
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
<g clip-path="url(#clip0_2207_35569)">
<path d="M8.28906 25.5684H17.2187C20.5117 25.5684 22.4804 23.5645 22.4804 20.2129V8.5293C22.4804 5.17773 20.5117 3.18555 17.2187 3.18555H8.28906C4.99609 3.18555 3.02734 5.17773 3.02734 8.5293V20.2129C3.02734 23.5645 4.99609 25.5684 8.28906 25.5684ZM8.20703 23.6816C6.14453 23.6816 4.91406 22.4277 4.91406 20.2949V8.50586C4.91406 6.38477 6.14453 5.13086 8.20703 5.13086H17.3007C19.375 5.13086 20.5937 6.38477 20.5937 8.50586V20.2949C20.5937 22.4277 19.375 23.6816 17.3007 23.6816H8.20703ZM22.2695 13.1465H22.7968C23.5468 13.1465 24.0273 12.6309 24.0273 11.8223V9.86523C24.0273 9.0332 23.5468 8.51758 22.7968 8.51758H22.2695V13.1465Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.4883 15.1973C12.0742 15.6895 12.6133 15.6895 13.1757 15.1973L18.0156 10.9785C18.3671 10.6621 18.3671 10.1113 18.0273 9.75977C17.6875 9.41992 17.1718 9.41992 16.7851 9.75977L12.3203 13.627L9.60156 11.3184C9.25 11.0137 8.6875 11.0723 8.38281 11.4238C8.0664 11.7988 8.125 12.3496 8.5 12.666L11.4883 15.1973Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35569">
<rect width="21" height="22.418" fill="currentColor" transform="translate(3.02734 3.15039)"/>
</clipPath>
</defs>
</svg>

`;

export const WatchfaceApplewatchCase = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
