
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
<g clip-path="url(#clip0_2207_35982)">
<path d="M1.21968 21.8803C2.25093 25.7007 3.31733 26.8608 5.7314 26.8608H19.6416C21.3759 26.8608 22.5361 25.9233 22.9697 24.1655L27.3759 6.28272C28.0205 3.68115 26.8017 2.04053 24.5166 2.04053C21.7627 2.04053 19.5361 4.65381 20.6025 8.29834L20.8252 7.16162C18.0947 9.09522 16.6533 13.2553 17.0283 18.2358L17.5673 17.5444C15.0127 17.0991 12.0361 16.853 9.08296 16.853C2.81343 16.853 0.258742 18.3764 1.21968 21.8803ZM3.02436 21.3764C2.50874 19.5014 3.93843 18.7397 9.08296 18.7397C13.2548 18.7397 16.2548 19.3022 17.5908 19.396C18.3056 19.4077 18.7509 18.9507 18.7392 18.2358C18.6572 13.8296 19.8173 10.2788 21.8681 8.74365C22.3134 8.38037 22.4072 8.146 22.2783 7.34912C21.9619 5.146 23.1806 3.92725 24.5166 3.92725C25.3837 3.92725 25.8525 4.64209 25.5712 5.79053L21.1298 23.7085C20.9306 24.5288 20.4267 24.9741 19.6416 24.9741H5.7314C4.4189 24.9741 3.87983 24.5522 3.02436 21.3764Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35982">
<rect width="26.5243" height="24.8555" fill="currentColor" transform="translate(1.02319 2.04053)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
