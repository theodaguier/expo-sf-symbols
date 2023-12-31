
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
<g clip-path="url(#clip0_2207_37789)">
<path d="M14.0244 26.0141C20.5635 26.0141 25.9775 20.5884 25.9775 14.061C25.9775 7.52197 20.5518 2.10791 14.0127 2.10791C7.48535 2.10791 2.07129 7.52197 2.07129 14.061C2.07129 20.5884 7.49707 26.0141 14.0244 26.0141Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.59473 12.1509C9.59473 11.7993 9.84082 11.5649 10.1807 11.5649H10.9189V9.36182C10.9189 8.88135 11.2236 8.56494 11.7041 8.56494H14.6221C16.6143 8.56494 18.0205 9.74853 18.3135 11.5649H18.8994C19.2393 11.5649 19.4854 11.7993 19.4854 12.1509C19.4854 12.4907 19.2393 12.7602 18.8994 12.7602H18.3369C18.1143 14.647 16.6494 15.9243 14.6221 15.9243H12.5127V19.3227C12.5127 19.7915 12.1846 20.1196 11.7275 20.1196C11.2705 20.1196 10.9189 19.7915 10.9189 19.3227V12.7602H10.1807C9.84082 12.7602 9.59473 12.4907 9.59473 12.1509ZM12.5244 14.4829H14.3643C15.6885 14.4829 16.5322 13.8501 16.7197 12.7602H12.5244V14.4829ZM12.5244 11.5649H16.6846C16.4502 10.5571 15.6299 9.99463 14.3643 9.99463H12.5244V11.5649Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37789">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07129 2.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PesetasignCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
