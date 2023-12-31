
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
<g clip-path="url(#clip0_2207_35176)">
<path d="M13.6279 17.9797C17.8818 17.9797 21.1982 13.4563 21.1982 7.80786C21.1982 3.36645 18.1045 0.0266113 13.6279 0.0266113C9.15137 0.0266113 6.06934 3.36645 6.06934 7.80786C6.06934 13.4563 9.37403 17.9797 13.6279 17.9797ZM13.6279 16.2219C10.3584 16.2219 7.83887 12.4016 7.83887 7.80786C7.83887 4.4563 10.2178 1.79614 13.6279 1.79614C17.0146 1.79614 19.4404 4.4563 19.4404 7.80786C19.4404 12.4016 16.8857 16.2219 13.6279 16.2219ZM11.9873 17.1711L11.4365 19.2805C11.2959 19.7493 11.5654 20.2532 12.1631 20.2532H15.1045C15.7021 20.2532 15.96 19.7493 15.8311 19.2805L15.2568 17.1711H11.9873ZM13.4873 31.9133C13.9443 31.9133 14.3193 31.5266 14.3193 31.0696C14.3193 28.5032 16.6513 27.9055 16.6513 25.3039C16.6513 22.6321 14.4014 22.1282 14.4248 19.7961H12.7607C12.749 22.9836 14.999 23.4758 14.999 25.3039C14.999 27.1672 12.6553 27.4485 12.6553 31.0696C12.6553 31.5266 13.0303 31.9133 13.4873 31.9133Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35176">
<rect width="15.1289" height="32.0508" fill="currentColor" transform="translate(6.06934 0.0266113)"/>
</clipPath>
</defs>
</svg>

`;

export const Balloon = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
