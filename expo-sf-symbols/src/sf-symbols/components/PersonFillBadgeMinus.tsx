
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="33" viewBox="0 0 29 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33230)">
<path d="M2.02271 26.979H17.7376C18.9915 26.979 19.7415 26.3931 19.7415 25.4204C19.7415 22.397 15.9563 18.2251 9.87427 18.2251C3.80396 18.2251 0.0187988 22.397 0.0187988 25.4204C0.0187988 26.3931 0.768799 26.979 2.02271 26.979ZM9.88599 16.1274C12.3938 16.1274 14.5735 13.8774 14.5735 10.9477C14.5735 8.05322 12.3938 5.90869 9.88599 5.90869C7.37818 5.90869 5.19849 8.1001 5.19849 10.9712C5.19849 13.8774 7.36646 16.1274 9.88599 16.1274Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.8586 32.7915C23.9719 32.7915 27.4055 29.3579 27.4055 25.2446C27.4055 21.0962 23.9954 17.686 19.8586 17.686C15.7102 17.686 12.3 21.0962 12.3 25.2446C12.3 29.3931 15.6985 32.7915 19.8586 32.7915Z" fill="currentColor"/>
<path d="M19.8586 31.1977C23.0813 31.1977 25.8118 28.4907 25.8118 25.2446C25.8118 21.9751 23.1165 19.2915 19.8586 19.2915C16.5891 19.2915 13.8938 21.9751 13.8938 25.2446C13.8938 28.5141 16.5891 31.1977 19.8586 31.1977Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M16.8352 25.9595C16.4485 25.9595 16.1204 25.6196 16.1204 25.2446C16.1204 24.8579 16.4485 24.5181 16.8352 24.5181H22.8586C23.2571 24.5181 23.5852 24.8579 23.5852 25.2446C23.5852 25.6196 23.2571 25.9595 22.8586 25.9595H16.8352Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33230">
<rect width="27.3867" height="32.6836" fill="currentColor" transform="translate(0.0187988 0.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PersonFillBadgeMinus = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
