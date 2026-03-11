import type { NumberBadgeProps } from './types';
import { palette } from './palette';

export function NumberBadge({
  cx,
  cy,
  r = 10,
  fill,
  text,
  textColor = palette.white,
  fontSize = 16,
}: NumberBadgeProps) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={fontSize}
        fill={textColor}
        fontWeight="bold"
        fontFamily='Arial, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
      >
        {text}
      </text>
    </g>
  );
}
