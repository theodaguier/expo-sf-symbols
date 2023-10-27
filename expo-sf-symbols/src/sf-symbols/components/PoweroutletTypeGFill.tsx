
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35033)">
<path d="M6.68604 24.7124H21.6391C24.0883 24.7124 25.3188 23.4936 25.3188 21.0795V6.771C25.3188 4.35694 24.0883 3.13818 21.6391 3.13818H6.68604C4.23682 3.13818 3.00635 4.34522 3.00635 6.771V21.0795C3.00635 23.5053 4.23682 24.7124 6.68604 24.7124Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.6704 12.4897C13.2719 12.4897 12.9907 12.2085 12.9907 11.7983V8.271C12.9907 7.86084 13.2719 7.59131 13.6704 7.59131H14.643C15.0532 7.59131 15.3227 7.86084 15.3227 8.271V11.7983C15.3227 12.2085 15.0532 12.4897 14.643 12.4897H13.6704ZM8.36182 19.6147C7.93994 19.6147 7.68213 19.3569 7.68213 18.9467V17.9624C7.68213 17.5639 7.93994 17.2827 8.36182 17.2827H11.5024C11.9126 17.2827 12.1821 17.5522 12.1821 17.9624V18.9467C12.1821 19.3569 11.9126 19.6147 11.5024 19.6147H8.36182ZM16.8227 19.6147C16.4125 19.6147 16.1313 19.3569 16.1313 18.9467V17.9624C16.1313 17.5522 16.4125 17.2827 16.8227 17.2827H19.9516C20.3735 17.2827 20.643 17.5639 20.643 17.9624V18.9467C20.643 19.3569 20.3852 19.6147 19.9516 19.6147H16.8227Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35033">
<rect width="22.3125" height="21.5977" fill="currentColor" transform="translate(3.00635 3.11475)"/>
</clipPath>
</defs>
</svg>

`;

export const PoweroutletTypeGFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
