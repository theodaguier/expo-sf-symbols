
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
<g clip-path="url(#clip0_2207_34689)">
<path d="M6.70288 24.7461H20.9177C23.3787 24.7461 24.5974 23.5273 24.5974 21.1132V6.80469C24.5974 4.39063 23.3787 3.17188 20.9177 3.17188H6.70288C4.25366 3.17188 3.02319 4.37891 3.02319 6.80469V21.1132C3.02319 23.539 4.25366 24.7461 6.70288 24.7461ZM6.72631 22.8593C5.55444 22.8593 4.90991 22.2382 4.90991 21.0195V6.89844C4.90991 5.67969 5.55444 5.0586 6.72631 5.0586H20.8943C22.0544 5.0586 22.7107 5.67969 22.7107 6.89844V21.0195C22.7107 22.2382 22.0544 22.8593 20.8943 22.8593H6.72631Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.906 18.6757H15.1052C16.2771 18.6757 16.9685 17.9961 16.9685 16.8359V11.0703C16.9685 9.91016 16.3357 9.24219 15.1638 9.24219H8.906C7.79272 9.24219 7.04272 9.91016 7.04272 11.0703V16.8359C7.04272 17.9961 7.74585 18.6757 8.906 18.6757ZM17.6248 15.5586L19.9216 17.4922C20.1209 17.6679 20.3435 17.7851 20.5544 17.7851C21.0115 17.7851 21.3044 17.457 21.3044 16.9648V10.9297C21.3044 10.4492 21.0115 10.1211 20.5544 10.1211C20.3435 10.1211 20.1091 10.2383 19.9216 10.4023L17.6248 12.3477V15.5586Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34689">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02319 3.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VideoSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
