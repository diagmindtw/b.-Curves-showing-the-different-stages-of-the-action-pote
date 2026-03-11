import type { IonLabelProps } from './types';

export function IonLabel({ x, y, baseText, fontSize = 24 }: IonLabelProps) {
  const superSize = Math.round(fontSize * 0.65);
  return (
    <text
      x={x}
      y={y}
      fontSize={fontSize}
      fill="#333333"
      fontFamily='Arial, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
    >
      {baseText}
      <tspan fontSize={superSize} dy={-fontSize * 0.35} dx={1}>
        +
      </tspan>
    </text>
  );
}
