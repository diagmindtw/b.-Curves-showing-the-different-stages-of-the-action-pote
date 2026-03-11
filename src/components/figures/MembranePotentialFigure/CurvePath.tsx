import { line, curveCatmullRom } from 'd3-shape';
import type { CurvePathProps } from './types';

export function CurvePath({
  points,
  xScale,
  yScale,
  stroke,
  strokeWidth = 3,
  linecap = 'round',
  linejoin = 'round',
}: CurvePathProps) {
  const pathGenerator = line<{ x: number; y: number }>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y))
    .curve(curveCatmullRom.alpha(0.5));

  const d = pathGenerator(points);
  if (!d) return null;

  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={linecap}
      strokeLinejoin={linejoin}
    />
  );
}
