
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
<g clip-path="url(#clip0_2207_37377)">
<path d="M14.0371 25.9204C20.5762 25.9204 25.9902 20.4947 25.9902 13.9673C25.9902 7.42822 20.5645 2.01416 14.0254 2.01416C7.49804 2.01416 2.08398 7.42822 2.08398 13.9673C2.08398 20.4947 7.50976 25.9204 14.0371 25.9204ZM14.0371 23.9283C8.50586 23.9283 4.08789 19.4986 4.08789 13.9673C4.08789 8.43604 8.49414 4.00635 14.0254 4.00635C19.5567 4.00635 23.9981 8.43604 23.9981 13.9673C23.9981 19.4986 19.5684 23.9283 14.0371 23.9283Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3457 11.061C9.83008 11.061 9.47852 11.4477 9.47852 11.9985V17.5298C9.47852 18.2212 9.86524 18.4908 10.4629 18.4908H16.0176C16.5684 18.4908 16.9199 18.1509 16.9199 17.6353C16.9199 17.1197 16.5567 16.7798 15.9942 16.7798H13.8613L12.127 16.9673L13.9551 15.2564L18.2793 10.9438C18.4434 10.7798 18.5606 10.5454 18.5606 10.311C18.5606 9.78369 18.209 9.44385 17.6934 9.44385C17.4121 9.44385 17.1895 9.54932 17.0254 9.71338L12.7129 14.0259L11.0254 15.8306L11.2012 14.0025V11.9751C11.2012 11.4126 10.8613 11.061 10.3457 11.061Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37377">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08398 2.01416)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownLeftCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
