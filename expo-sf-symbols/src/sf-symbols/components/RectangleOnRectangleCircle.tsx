
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
<g clip-path="url(#clip0_2207_34227)">
<path d="M13.9825 26.0268C20.5216 26.0268 25.9356 20.6011 25.9356 14.0737C25.9356 7.53467 20.5099 2.12061 13.9708 2.12061C7.44348 2.12061 2.02942 7.53467 2.02942 14.0737C2.02942 20.6011 7.4552 26.0268 13.9825 26.0268ZM13.9825 24.0347C8.4513 24.0347 4.03333 19.605 4.03333 14.0737C4.03333 8.54249 8.43958 4.1128 13.9708 4.1128C19.5021 4.1128 23.9435 8.54249 23.9435 14.0737C23.9435 19.605 19.5138 24.0347 13.9825 24.0347Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.75598 17.1089H16.5958C17.6622 17.1089 18.2013 16.5815 18.2013 15.5034V10.019C18.2013 8.97607 17.6622 8.43701 16.5958 8.43701H8.75598C7.67786 8.43701 7.15051 8.97607 7.15051 10.019V15.5034C7.15051 16.5815 7.67786 17.1089 8.75598 17.1089Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.3341 20.2729H19.1622C20.6388 20.2729 21.5177 19.4292 21.5177 17.9409V12.4565C21.5177 10.9917 20.6505 10.1245 19.1622 10.1245H11.3341C9.83411 10.1245 8.97864 10.9917 8.97864 12.4565V17.9409C8.97864 19.4292 9.84583 20.2729 11.3341 20.2729Z" fill="currentColor"/>
<path d="M11.3341 19.5347H19.1622C20.2403 19.5347 20.7677 19.0073 20.7677 17.9409V12.4565C20.7677 11.4136 20.2403 10.8628 19.1622 10.8628H11.3341C10.256 10.8628 9.71692 11.4136 9.71692 12.4565V17.9409C9.71692 19.0073 10.256 19.5347 11.3341 19.5347Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34227">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02942 2.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleOnRectangleCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
