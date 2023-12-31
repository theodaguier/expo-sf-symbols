
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
<g clip-path="url(#clip0_2207_33116)">
<path d="M13.9719 25.9405C20.511 25.9405 25.925 20.5264 25.925 13.9873C25.925 7.45996 20.4993 2.03418 13.9602 2.03418C7.43286 2.03418 2.0188 7.45996 2.0188 13.9873C2.0188 20.5264 7.44458 25.9405 13.9719 25.9405Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9719 21.0772C13.761 21.0772 13.5032 20.9952 13.2688 20.7491L8.37036 15.5577C8.08911 15.2413 7.94849 14.9834 7.94849 14.667C7.94849 14.21 8.26489 13.8936 8.72192 13.8936H11.3821V8.43262C11.3821 7.47168 11.9211 6.9209 12.8469 6.9209H15.0852C16.011 6.9209 16.5618 7.47168 16.5618 8.43262V13.8936H19.1985C19.6321 13.8936 19.9954 14.21 19.9954 14.6905C19.9954 14.9952 19.8547 15.2061 19.5266 15.5577L14.6868 20.7491C14.4407 20.9952 14.1946 21.0772 13.9719 21.0772Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33116">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.0188 2.02246)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeDownCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
