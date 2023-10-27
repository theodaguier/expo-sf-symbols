
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
<g clip-path="url(#clip0_2207_33180)">
<path d="M9.30102 6.88037C8.85571 6.88037 8.5393 6.55224 8.5393 6.13037C8.5393 5.70849 8.85571 5.38037 9.30102 5.38037H19.0393C19.4729 5.38037 19.7893 5.70849 19.7893 6.13037C19.7893 6.55224 19.4729 6.88037 19.0393 6.88037H9.30102ZM9.30102 10.3843C8.85571 10.3843 8.5393 10.0562 8.5393 9.63427C8.5393 9.22412 8.85571 8.89599 9.30102 8.89599H15.0081C15.4417 8.89599 15.7698 9.22412 15.7698 9.63427C15.7698 10.0562 15.4417 10.3843 15.0081 10.3843H9.30102ZM9.48852 22.3374C8.45727 22.3374 7.87134 21.7867 7.87134 20.7203V14.0171C7.87134 12.9507 8.45727 12.4 9.48852 12.4H18.4065C19.4729 12.4 20.012 12.9507 20.012 14.0171V20.7203C20.012 21.7867 19.4729 22.3374 18.4065 22.3374H9.48852ZM4.08618 22.5132C4.08618 24.9624 5.29321 26.1812 7.71899 26.1812H20.1643C22.5901 26.1812 23.7971 24.9624 23.7971 22.5132V4.73584C23.7971 2.29834 22.5901 1.05615 20.1643 1.05615H7.71899C5.29321 1.05615 4.08618 2.29834 4.08618 4.73584V22.5132Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33180">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.08618 1.05615)"/>
</clipPath>
</defs>
</svg>

`;

export const DocTextImageFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
