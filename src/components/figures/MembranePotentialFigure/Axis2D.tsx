import type { Axis2DProps } from './types';
import { palette } from './palette';

export function Axis2D({
  x,
  y,
  height,
  xTicks,
  yTicks,
  xScale,
  yScale,
  stroke = palette.axis,
  tickLength = 5,
  fontSize = 18,
}: Axis2DProps) {
  // The axis origin is at (x, y) – bottom-left corner of the plot area.
  // The X axis goes rightward; the Y axis goes upward.
  const xEnd = xScale(5);   // use tick range end via scale
  const yTop = y - height;

  const fontFamily = 'Arial, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

  return (
    <g>
      {/* Y axis */}
      <line x1={x} y1={y} x2={x} y2={yTop} stroke={stroke} strokeWidth={3} strokeLinecap="round" />
      {/* X axis */}
      <line x1={x} y1={y} x2={xEnd} y2={y} stroke={stroke} strokeWidth={3} strokeLinecap="round" />

      {/* X ticks */}
      {xTicks.map(({ value, label }) => {
        const tx = xScale(value);
        return (
          <g key={`xtick-${value}`}>
            <line x1={tx} y1={y} x2={tx} y2={y + tickLength} stroke={stroke} strokeWidth={1.5} />
            <text
              x={tx}
              y={y + tickLength + 4}
              textAnchor="middle"
              dominantBaseline="hanging"
              fontSize={fontSize}
              fill={stroke}
              fontFamily={fontFamily}
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* Y ticks */}
      {yTicks?.map(({ value, label }) => {
        const ty = yScale(value);
        return (
          <g key={`ytick-${value}`}>
            <line x1={x} y1={ty} x2={x - tickLength} y2={ty} stroke={stroke} strokeWidth={1.5} />
            <text
              x={x - tickLength - 3}
              y={ty}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize={fontSize}
              fill={stroke}
              fontFamily={fontFamily}
            >
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}
