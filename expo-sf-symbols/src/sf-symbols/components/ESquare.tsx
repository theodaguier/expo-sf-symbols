
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
<g clip-path="url(#clip0_2207_37641)">
<path d="M6.74073 24.6565H20.9555C23.4165 24.6565 24.6352 23.4377 24.6352 21.0236V6.71509C24.6352 4.30103 23.4165 3.08228 20.9555 3.08228H6.74073C4.29151 3.08228 3.06104 4.28931 3.06104 6.71509V21.0236C3.06104 23.4494 4.29151 24.6565 6.74073 24.6565ZM6.76416 22.7697C5.59229 22.7697 4.94776 22.1486 4.94776 20.9299V6.80884C4.94776 5.59009 5.59229 4.969 6.76416 4.969H20.9321C22.0922 4.969 22.7485 5.59009 22.7485 6.80884V20.9299C22.7485 22.1486 22.0922 22.7697 20.9321 22.7697H6.76416Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.1587 19.0783H16.7016C17.1587 19.0783 17.4751 18.7854 17.4751 18.3166C17.4751 17.8361 17.1587 17.5432 16.7016 17.5432H12.1079V14.3908H16.3969C16.854 14.3908 17.1704 14.133 17.1704 13.676C17.1704 13.1955 16.854 12.926 16.3969 12.926H12.1079V9.93775H16.7016C17.1587 9.93775 17.4751 9.63306 17.4751 9.16431C17.4751 8.68384 17.1587 8.40259 16.7016 8.40259H11.1587C10.5493 8.40259 10.2446 8.82446 10.2446 9.45728V18.0236C10.2446 18.6565 10.5493 19.0783 11.1587 19.0783Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37641">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06104 3.05884)"/>
</clipPath>
</defs>
</svg>

`;

export const ESquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
