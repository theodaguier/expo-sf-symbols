
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
<g clip-path="url(#clip0_2207_35507)">
<path d="M4.05249 24.4009C4.05249 26.2525 5.35327 27.4946 7.29858 27.4946H20.3884C22.3337 27.4946 23.6345 26.2525 23.6345 24.4009V4.19776C23.6345 2.3462 22.3337 1.09229 20.3884 1.09229H7.29858C5.35327 1.09229 4.05249 2.3462 4.05249 4.19776V24.4009ZM5.93921 24.0845V4.51417C5.93921 3.55323 6.52515 2.97901 7.53296 2.97901H20.1541C21.1502 2.97901 21.7478 3.55323 21.7478 4.51417V24.0845C21.7478 25.0454 21.1502 25.6079 20.1541 25.6079H7.53296C6.52515 25.6079 5.93921 25.0454 5.93921 24.0845Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.8689 18.272H15.8416C16.4744 18.272 16.7908 17.9439 16.7908 17.2759V14.229C16.7908 13.7017 16.5916 13.397 16.2048 13.2681V12.4712C16.2048 10.8892 15.2556 9.81104 13.8494 9.81104C12.4548 9.81104 11.4939 10.8892 11.4939 12.4712V13.2798C11.1189 13.397 10.908 13.7017 10.908 14.229V17.2759C10.908 17.9439 11.2361 18.272 11.8689 18.272ZM12.654 13.2212V12.3657C12.654 11.4985 13.1228 10.936 13.8494 10.936C14.5759 10.936 15.0447 11.4985 15.0447 12.3657V13.2212H12.654Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35507">
<rect width="19.582" height="26.4258" fill="currentColor" transform="translate(4.05249 1.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockIpad = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
