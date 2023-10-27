
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
<g clip-path="url(#clip0_2207_37114)">
<path d="M14.0371 25.996C20.5762 25.996 25.9902 20.5703 25.9902 14.0429C25.9902 7.5039 20.5645 2.08984 14.0254 2.08984C7.49804 2.08984 2.08398 7.5039 2.08398 14.0429C2.08398 20.5703 7.50976 25.996 14.0371 25.996Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.47461 11.6406C6.93555 11.6406 6.54883 11.3008 6.54883 10.7852C6.54883 10.2695 6.93555 9.92969 7.47461 9.92969H20.6465C21.1738 9.92969 21.5723 10.2695 21.5723 10.7852C21.5723 11.3008 21.1738 11.6406 20.6465 11.6406H7.47461ZM9.26758 15.6484C8.7168 15.6484 8.3418 15.3086 8.3418 14.7812C8.3418 14.2656 8.7168 13.9257 9.26758 13.9257H18.8535C19.3926 13.9257 19.7676 14.2656 19.7676 14.7812C19.7676 15.3086 19.3926 15.6484 18.8535 15.6484H9.26758ZM11.1309 19.6562C10.5918 19.6562 10.2168 19.3046 10.2168 18.789C10.2168 18.2851 10.5918 17.9453 11.1309 17.9453H16.9785C17.5176 17.9453 17.9043 18.2851 17.9043 18.789C17.9043 19.3046 17.5176 19.6562 16.9785 19.6562H11.1309Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37114">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08398 2.08984)"/>
</clipPath>
</defs>
</svg>

`;

export const Line3HorizontalDecreaseCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
