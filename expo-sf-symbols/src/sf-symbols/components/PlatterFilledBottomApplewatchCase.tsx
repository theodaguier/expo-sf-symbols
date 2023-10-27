
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
<g clip-path="url(#clip0_2207_35572)">
<path d="M8.31421 25.5284H17.2439C20.5369 25.5284 22.5056 23.5245 22.5056 20.1729V8.48926C22.5056 5.13769 20.5369 3.14551 17.2439 3.14551H8.31421C5.02124 3.14551 3.05249 5.13769 3.05249 8.48926V20.1729C3.05249 23.5245 5.02124 25.5284 8.31421 25.5284ZM8.23218 23.6416C6.16968 23.6416 4.93921 22.3877 4.93921 20.2549V8.46582C4.93921 6.34473 6.16968 5.09082 8.23218 5.09082H17.3259C19.4002 5.09082 20.6189 6.34473 20.6189 8.46582V20.2549C20.6189 22.3877 19.4002 23.6416 17.3259 23.6416H8.23218ZM22.2947 13.1064H22.822C23.572 13.1064 24.0525 12.5908 24.0525 11.7822V9.82519C24.0525 8.99316 23.572 8.47754 22.822 8.47754H22.2947V13.1064Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.4978 20.4072C6.4978 21.4384 7.09546 22.0712 8.07983 22.0712H17.49C18.4627 22.0712 19.0603 21.4384 19.0603 20.4072V18.3447C19.0603 17.3369 18.4392 16.6689 17.49 16.6689H8.07983C7.1189 16.6689 6.4978 17.3369 6.4978 18.3447V20.4072Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35572">
<rect width="21" height="22.418" fill="currentColor" transform="translate(3.05249 3.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlatterFilledBottomApplewatchCase = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
