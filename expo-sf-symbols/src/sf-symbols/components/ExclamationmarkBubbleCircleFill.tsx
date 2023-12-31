
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
<g clip-path="url(#clip0_2207_34609)">
<path d="M14.0393 25.9795C20.5784 25.9795 25.9924 20.5654 25.9924 14.0263C25.9924 7.49902 20.5667 2.07324 14.0276 2.07324C7.50024 2.07324 2.08618 7.49902 2.08618 14.0263C2.08618 20.5654 7.51196 25.9795 14.0393 25.9795Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0159 20.9873C10.6877 20.9873 10.4885 20.7412 10.4885 20.3779V18.6553H10.1956C8.44947 18.6553 7.47681 17.6709 7.47681 15.9248V11.3662C7.47681 9.64355 8.44947 8.65918 10.1956 8.65918H17.8831C19.6292 8.65918 20.6018 9.64355 20.6018 11.3662V15.9248C20.6018 17.6709 19.6292 18.6553 17.8831 18.6553H13.8518L11.6956 20.6123C11.4143 20.8818 11.2502 20.9873 11.0159 20.9873ZM14.0393 14.7763C14.344 14.7763 14.5198 14.5888 14.5198 14.2724L14.6135 11.0381C14.6253 10.71 14.3674 10.4756 14.0276 10.4756C13.6995 10.4756 13.4534 10.71 13.4651 11.0381L13.5471 14.2724C13.5589 14.5888 13.7229 14.7763 14.0393 14.7763ZM14.0393 16.7685C14.4026 16.7685 14.7307 16.4756 14.7307 16.1123C14.7307 15.7373 14.4143 15.4443 14.0393 15.4443C13.6643 15.4443 13.3479 15.749 13.3479 16.1123C13.3479 16.4756 13.676 16.7685 14.0393 16.7685Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34609">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08618 2.06152)"/>
</clipPath>
</defs>
</svg>

`;

export const ExclamationmarkBubbleCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
