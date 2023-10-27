
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
<g clip-path="url(#clip0_2207_35571)">
<path d="M8.32056 25.5284H17.2502C20.5432 25.5284 22.5119 23.5245 22.5119 20.1729V8.48926C22.5119 5.13769 20.5432 3.14551 17.2502 3.14551H8.32056C5.02759 3.14551 3.05884 5.13769 3.05884 8.48926V20.1729C3.05884 23.5245 5.02759 25.5284 8.32056 25.5284ZM8.23853 23.6416C6.17603 23.6416 4.94556 22.3877 4.94556 20.2549V8.46582C4.94556 6.34473 6.17603 5.09082 8.23853 5.09082H17.3322C19.4065 5.09082 20.6252 6.34473 20.6252 8.46582V20.2549C20.6252 22.3877 19.4065 23.6416 17.3322 23.6416H8.23853ZM22.301 13.1064H22.8283C23.5783 13.1064 24.0588 12.5908 24.0588 11.7822V9.82519C24.0588 8.99316 23.5783 8.47754 22.8283 8.47754H22.301V13.1064Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.50415 10.3174C6.50415 11.3486 7.10181 11.9814 8.08618 11.9814H17.4963C18.469 11.9814 19.0666 11.3486 19.0666 10.3174V8.25488C19.0666 7.24707 18.4455 6.5791 17.4963 6.5791H8.08618C7.12525 6.5791 6.50415 7.24707 6.50415 8.25488V10.3174Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35571">
<rect width="21" height="22.418" fill="currentColor" transform="translate(3.05884 3.11035)"/>
</clipPath>
</defs>
</svg>

`;

export const PlatterFilledTopApplewatchCase = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
