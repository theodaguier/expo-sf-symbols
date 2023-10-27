
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
<g clip-path="url(#clip0_2207_34704)">
<path d="M3.8584 23.0509H16.4444C18.7998 23.0509 20.2061 21.6916 20.2061 19.3361V7.72277C20.2061 5.37903 18.917 4.01965 16.5615 4.01965H3.8584C1.6084 4.01965 0.0966797 5.37903 0.0966797 7.72277V19.3361C0.0966797 21.6916 1.50293 23.0509 3.8584 23.0509ZM21.7998 16.9924L26.0655 20.6838C26.4639 21.0353 26.9326 21.258 27.3545 21.258C28.2686 21.258 28.8662 20.59 28.8662 19.6291V7.44153C28.8662 6.48059 28.2686 5.81262 27.3545 5.81262C26.9326 5.81262 26.4639 6.03527 26.0655 6.38684L21.7998 10.0665V16.9924Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.13184 18.5041C5.61621 18.5041 5.22949 18.1408 5.22949 17.6603C5.22949 17.4025 5.32324 17.1916 5.52246 16.9924L10.4561 12.0353L12.5069 10.172L9.03809 10.3829H7.39746C6.92871 10.3829 6.53027 10.0314 6.53027 9.56263C6.53027 9.05872 6.90527 8.66028 7.39746 8.66028H14.1358C14.7803 8.66028 15.085 8.97669 15.085 9.62122V16.3361C15.085 16.8283 14.6865 17.2033 14.1826 17.2033C13.7139 17.2033 13.3623 16.8049 13.3623 16.3361V14.7189L13.5733 11.2618L11.71 13.2892L6.77637 18.2345C6.58887 18.422 6.40137 18.5041 6.13184 18.5041Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34704">
<rect width="28.7695" height="19.043" fill="currentColor" transform="translate(0.0966797 4.01965)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUpRightVideoFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
