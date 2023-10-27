
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
<g clip-path="url(#clip0_2207_34813)">
<path d="M23.3118 4.4834C22.1165 3.28809 20.429 3.10059 18.4251 3.10059H9.29615C7.3274 3.10059 5.6399 3.28809 4.44458 4.4834C3.24927 5.67871 3.07349 7.3545 3.07349 9.32325V18.4522C3.07349 20.4561 3.24927 22.1318 4.44458 23.3272C5.6399 24.5225 7.3274 24.71 9.31958 24.71H18.4251C20.429 24.71 22.1165 24.5225 23.3118 23.3272C24.5071 22.1318 24.6829 20.4561 24.6829 18.4522V9.34668C24.6829 7.34278 24.5071 5.67871 23.3118 4.4834Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.8547 20.3975C10.3508 20.3975 7.38599 17.4326 7.38599 13.917C7.38599 10.3896 10.3274 7.43652 13.8547 7.43652C17.3704 7.43652 20.3352 10.4014 20.3352 13.917C20.3352 17.4444 17.3938 20.3975 13.8547 20.3975ZM9.16724 13.917C9.16724 16.4717 11.3118 18.6162 13.8547 18.6162C14.8157 18.6162 15.7063 18.3115 16.4446 17.7959L9.97583 11.3271C9.48365 12.0771 9.16724 12.9678 9.16724 13.917ZM11.2649 10.0381L17.7454 16.5068C18.2376 15.7568 18.554 14.8662 18.554 13.917C18.554 11.3623 16.4094 9.21777 13.8547 9.21777C12.9055 9.21777 12.0149 9.52246 11.2649 10.0381Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34813">
<rect width="21.6094" height="21.6211" fill="currentColor" transform="translate(3.07349 3.10059)"/>
</clipPath>
</defs>
</svg>

`;

export const NosignAppFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
