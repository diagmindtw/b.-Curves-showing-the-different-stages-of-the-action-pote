import type { PanelBackgroundProps } from './types';

export function PanelBackground({ x, y, width, height, fill }: PanelBackgroundProps) {
  return <rect x={x} y={y} width={width} height={height} fill={fill} />;
}
