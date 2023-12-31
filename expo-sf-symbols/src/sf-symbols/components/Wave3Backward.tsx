
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
<g clip-path="url(#clip0_2207_35730)">
<path d="M6.04407 14.0897C6.04407 19.035 7.59095 23.6522 10.3331 27.4842C11.2238 28.7029 12.8878 27.6131 11.9972 26.3943C9.43079 22.867 8.05969 18.6248 8.05969 14.0897C8.05969 9.55448 9.43079 5.30058 11.9972 1.77323C12.9113 0.542766 11.1769 -0.488484 10.3331 0.69511C7.59095 4.51542 6.04407 9.13261 6.04407 14.0897Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.4308 14.0893C12.4308 17.7689 13.5909 21.2143 15.6769 24.015C16.6027 25.2807 18.2433 24.0736 17.3527 22.9252C15.4542 20.4174 14.4347 17.3588 14.4347 14.0893C14.4347 10.8197 15.4542 7.7611 17.3527 5.25329C18.2433 4.10485 16.6027 2.89782 15.6769 4.15173C13.5909 6.95251 12.4308 10.4096 12.4308 14.0893Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.7941 14.0896C18.7941 16.5036 19.6261 18.7536 21.1027 20.4997C22.0636 21.6364 23.4816 20.3474 22.7668 19.4216C21.3488 17.6403 20.798 16.1521 20.798 14.0896C20.798 12.0271 21.3488 10.5388 22.7668 8.75751C23.4816 7.82001 22.0753 6.51923 21.1027 7.66766C19.6261 9.42548 18.7941 11.6755 18.7941 14.0896Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35730">
<rect width="16.9179" height="27.8664" fill="currentColor" transform="translate(6.04407 0.150391)"/>
</clipPath>
</defs>
</svg>

`;

export const Wave3Backward = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
