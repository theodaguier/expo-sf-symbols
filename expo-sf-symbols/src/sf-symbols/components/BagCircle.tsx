
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
<g clip-path="url(#clip0_2207_34765)">
<path d="M13.9992 25.9328C20.5383 25.9328 25.9523 20.5071 25.9523 13.9797C25.9523 7.44067 20.5266 2.02661 13.9875 2.02661C7.4602 2.02661 2.04614 7.44067 2.04614 13.9797C2.04614 20.5071 7.47192 25.9328 13.9992 25.9328ZM13.9992 23.9407C8.46802 23.9407 4.05005 19.511 4.05005 13.9797C4.05005 8.44849 8.4563 4.0188 13.9875 4.0188C19.5188 4.0188 23.9602 8.44849 23.9602 13.9797C23.9602 19.511 19.5305 23.9407 13.9992 23.9407Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.5071 19.7219H17.6789C18.7805 19.7219 19.4133 19.0891 19.4133 17.8469V11.5188C19.4133 10.2649 18.7688 9.6438 17.4914 9.6438H16.5188C16.4953 8.35473 15.382 7.26489 13.9992 7.26489C12.6164 7.26489 11.5032 8.35473 11.4797 9.6438H10.5071C9.22974 9.6438 8.58521 10.2649 8.58521 11.5188V17.8469C8.58521 19.1008 9.22974 19.7219 10.5071 19.7219ZM12.6047 9.6438C12.6399 8.8352 13.1672 8.3313 13.9992 8.3313C14.8313 8.3313 15.3586 8.8352 15.3938 9.6438H12.6047Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34765">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04614 2.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BagCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
