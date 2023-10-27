
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
<g clip-path="url(#clip0_2207_37892)">
<path d="M6.10449 24.0547H14.3428C14.8584 24.0547 15.2802 23.6445 15.2802 23.1289C15.2802 22.6133 14.8584 22.1914 14.3428 22.1914H7.76856V22.0508L14.8818 11.3867C15.081 11.082 15.1982 10.7305 15.1982 10.3789C15.1982 9.71094 14.6943 9.23047 13.9795 9.23047H5.95215C5.43652 9.23047 5.02637 9.65234 5.02637 10.168C5.02637 10.6836 5.43652 11.0938 5.95215 11.0938H12.5732V11.2578L5.35449 21.9805C5.12012 22.3438 5.01465 22.5547 5.01465 22.9766C5.01465 23.586 5.44824 24.0547 6.10449 24.0547ZM20.1787 24.3242C20.8115 24.3242 21.3388 23.7969 21.3388 23.1641V13.1328L22.8037 12.3359C24.0107 11.7148 23.1787 10.2617 22.124 10.8125L21.3388 11.2461V4.27344C21.3388 3.64063 20.8115 3.11328 20.1787 3.11328C19.5458 3.11328 19.0302 3.64063 19.0302 4.27344V12.4648L17.6943 13.1914C16.5927 13.7656 17.2724 15.2891 18.4794 14.6563L19.0302 14.3399V23.1641C19.0302 23.7969 19.5458 24.3242 20.1787 24.3242Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37892">
<rect width="18.385" height="21.2227" fill="currentColor" transform="translate(5.01465 3.11328)"/>
</clipPath>
</defs>
</svg>

`;

export const Polishzlotysign = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
