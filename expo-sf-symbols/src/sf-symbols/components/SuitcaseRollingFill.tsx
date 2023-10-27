
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="32" viewBox="0 0 29 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34905)">
<path d="M8.49902 29.75H20.1709C22.1982 29.75 23.6279 28.3203 23.6279 26.2929V10.0273C23.6279 7.98828 22.1982 6.57031 20.1709 6.57031H8.49902C6.47168 6.57031 5.04199 7.98828 5.04199 10.0273V26.2929C5.04199 28.3203 6.47168 29.75 8.49902 29.75ZM5.04199 25.0039V23.0469H23.6279V25.0039H5.04199ZM9.12011 7.91797H10.9365V2.77344C10.9365 2.21094 11.3467 1.84766 11.9561 1.84766H16.8311C17.3701 1.84766 17.7334 2.21094 17.7334 2.77344V7.89453H19.5498V2.79688C19.5498 1.16797 18.5303 0.136719 16.9131 0.136719H11.874C10.1865 0.136719 9.12011 1.16797 9.12011 2.79688V7.91797ZM8.96777 31.4609H9.69433C10.3272 31.4609 10.7373 31.0508 10.7373 30.4297V28.6484H7.9248V30.4297C7.9248 31.0508 8.33496 31.4609 8.96777 31.4609ZM18.9756 31.4609H19.7022C20.3232 31.4609 20.7451 31.0508 20.7451 30.4297V28.6484H17.9326V30.4297C17.9326 31.0508 18.3428 31.4609 18.9756 31.4609Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34905">
<rect width="18.5859" height="31.8398" fill="currentColor" transform="translate(5.04199 0.136719)"/>
</clipPath>
</defs>
</svg>

`;

export const SuitcaseRollingFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
