
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34536)">
<path d="M23.2066 23.4595C26.7457 23.4595 29.5113 20.8696 29.5113 17.647C29.5113 15.1861 28.0934 13.0532 25.8082 12.0923C25.8316 6.86573 22.0699 3.09229 17.277 3.09229C14.1012 3.09229 11.8395 4.79151 10.4332 6.84229C7.55042 5.99854 4.40979 8.18995 4.35119 11.4712C1.70275 11.8931 0.050415 14.2603 0.050415 17.1196C0.050415 20.565 3.06213 23.4595 7.06994 23.4595H23.2066Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.8785 18.5142V14.19C10.8785 13.44 11.1949 13.0532 11.816 13.0181V11.7407C11.816 9.73682 13.0231 8.40088 14.7809 8.40088C16.5621 8.40088 17.7574 9.73682 17.7574 11.7407V13.0181C18.3902 13.0532 18.7066 13.44 18.7066 14.19V18.5142C18.7066 19.3228 18.3434 19.6861 17.5934 19.6861H11.9801C11.2301 19.6861 10.8785 19.3228 10.8785 18.5142ZM12.9527 13.0063H16.609V11.6118C16.609 10.3462 15.8824 9.49073 14.7809 9.49073C13.7027 9.49073 12.9527 10.3462 12.9527 11.6118V13.0063Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34536">
<rect width="29.4609" height="22.2773" fill="currentColor" transform="translate(0.050415 3.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockIcloudFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
