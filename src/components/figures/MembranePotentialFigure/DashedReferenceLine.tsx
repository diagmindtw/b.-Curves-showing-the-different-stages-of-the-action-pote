import type { DashedReferenceLineProps } from './types';
import { palette } from './palette';

export function DashedReferenceLine({
  x1,
  x2,
  y,
  stroke = palette.dashed,
  dashArray = '5 4',
}: DashedReferenceLineProps) {
  return (
    <line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={stroke}
      strokeWidth={1.5}
      strokeDasharray={dashArray}
    />
  );
}
