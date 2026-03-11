import type { FigureSvgProps } from './types';
import { CANVAS } from './data';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';

export function FigureSvg({ width = CANVAS.width, className }: FigureSvgProps) {
  return (
    <svg
      viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
      width={width}
      className={className}
      style={{ height: 'auto', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <LeftPanel />
      <RightPanel />
    </svg>
  );
}
