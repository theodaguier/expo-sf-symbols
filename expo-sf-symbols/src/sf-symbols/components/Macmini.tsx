
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
<g clip-path="url(#clip0_2207_35412)">
<path d="M23.1126 16.9844C23.9212 16.9609 24.6008 16.293 24.6008 15.4844C24.6008 14.6641 23.9212 13.9727 23.1126 13.9727C22.3157 13.9727 21.6243 14.6641 21.6243 15.4844C21.6243 16.293 22.3157 16.9961 23.1126 16.9844ZM3.75318 20.9219H25.093C27.5423 20.9219 28.7727 19.7031 28.7727 17.2891V10.7148C28.7727 8.3125 27.5423 7.09375 25.093 7.09375H3.75318C1.29224 7.09375 0.0734863 8.30078 0.0734863 10.7148V17.2891C0.0734863 19.7149 1.29224 20.9219 3.75318 20.9219ZM3.77661 19.0351C2.60474 19.0351 1.96021 18.4141 1.96021 17.1953V10.8203C1.96021 9.60156 2.60474 8.98047 3.77661 8.98047H25.0696C26.2297 8.98047 26.886 9.60156 26.886 10.8203V17.1953C26.886 18.4141 26.2297 19.0351 25.0696 19.0351H3.77661Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35412">
<rect width="28.6992" height="13.957" fill="currentColor" transform="translate(0.0734863 7.09375)"/>
</clipPath>
</defs>
</svg>

`;

export const Macmini = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
