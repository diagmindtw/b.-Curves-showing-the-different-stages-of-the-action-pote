import type { AxisLabelProps } from './types';

export function AxisLabel({
  x,
  y,
  text,
  rotate = 0,
  fontSize = 20,
  anchor = 'middle',
}: AxisLabelProps) {
  const transform = rotate !== 0 ? `rotate(${rotate}, ${x}, ${y})` : undefined;
  return (
    <text
      x={x}
      y={y}
      fontSize={fontSize}
      textAnchor={anchor}
      dominantBaseline="middle"
      fill="#333333"
      transform={transform}
      fontFamily='Arial, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
    >
      {text}
    </text>
  );
}
