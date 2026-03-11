import { CurvePath } from './CurvePath';
import type { SegmentedCurveProps } from './types';

export function SegmentedCurve({
  segments,
  xScale,
  yScale,
  strokeWidth = 3,
}: SegmentedCurveProps) {
  return (
    <>
      {segments.map((seg, i) => (
        <CurvePath
          key={i}
          points={seg.points}
          xScale={xScale}
          yScale={yScale}
          stroke={seg.color}
          strokeWidth={strokeWidth}
          linecap="round"
          linejoin="round"
        />
      ))}
    </>
  );
}
