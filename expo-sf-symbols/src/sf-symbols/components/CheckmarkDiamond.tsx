
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
<g clip-path="url(#clip0_2207_37281)">
<path d="M2.3834 16.924L11.7701 26.3107C13.5045 28.0451 15.2154 28.0568 16.938 26.3458L26.3716 16.9005C28.0826 15.1896 28.0709 13.4669 26.3365 11.7326L16.9615 2.35752C15.2271 0.62314 13.5162 0.599702 11.7935 2.32236L2.34824 11.756C0.625581 13.4787 0.649019 15.1896 2.3834 16.924ZM3.74277 15.6232C2.91074 14.7794 2.8873 13.9005 3.75449 13.0333L13.0591 3.72861C13.9263 2.86142 14.8052 2.87314 15.649 3.71689L24.9771 13.0451C25.8091 13.8771 25.8326 14.7677 24.9654 15.6349L15.6607 24.9396C14.7935 25.8068 13.8912 25.7833 13.0709 24.963L3.74277 15.6232Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.0942 19.9005C13.4809 19.9005 13.809 19.713 14.0317 19.3497L19.3989 10.9239C19.5278 10.6895 19.6801 10.4317 19.6801 10.1739C19.6801 9.64657 19.2114 9.30673 18.7192 9.30673C18.4145 9.30673 18.1215 9.49423 17.9106 9.83407L13.0473 17.6388L10.727 14.6505C10.4575 14.2755 10.188 14.1818 9.87158 14.1818C9.35595 14.1818 8.96924 14.5919 8.96924 15.1076C8.96924 15.3654 9.06299 15.6115 9.23877 15.8341L12.0864 19.3497C12.3911 19.7365 12.6958 19.9005 13.0942 19.9005Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37281">
<rect width="26.5768" height="26.593" fill="currentColor" transform="translate(1.06934 1.04346)"/>
</clipPath>
</defs>
</svg>

`;

export const CheckmarkDiamond = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
