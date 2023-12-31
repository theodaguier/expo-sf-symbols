
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37964)">
<path d="M14.0141 25.9133C20.5532 25.9133 25.9672 20.4876 25.9672 13.9602C25.9672 7.42114 20.5415 2.00708 14.0024 2.00708C7.47509 2.00708 2.06104 7.42114 2.06104 13.9602C2.06104 20.4876 7.48682 25.9133 14.0141 25.9133Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.3852 19.7024C11.8579 19.7024 11.4243 19.3391 11.4243 18.8235C11.4243 18.5774 11.4829 18.4133 11.5884 18.2024L16.0298 10.0696V9.97583H10.897C10.4868 9.97583 10.1821 9.65942 10.1821 9.22583C10.1821 8.78052 10.4751 8.47583 10.897 8.47583H16.8149C17.6001 8.47583 18.1391 8.97974 18.1391 9.6477C18.1391 9.90552 18.0805 10.1516 17.8462 10.5969L13.3344 19.0344C13.1001 19.5032 12.8071 19.7024 12.3852 19.7024Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37964">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06104 2.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 7CircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
