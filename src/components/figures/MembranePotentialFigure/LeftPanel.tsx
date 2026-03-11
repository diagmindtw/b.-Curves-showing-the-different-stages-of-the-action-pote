import { palette } from './palette';
import { PanelBackground } from './PanelBackground';
import { Axis2D } from './Axis2D';
import { DashedReferenceLine } from './DashedReferenceLine';
import { SegmentedCurve } from './SegmentedCurve';
import { NumberBadge } from './NumberBadge';
import { ExternalAnnotation } from './ExternalAnnotation';
import {
  LEFT_PANEL,
  LEFT_AXIS,
  LEFT_X_TICKS,
  LEFT_Y_TICKS,
  LEFT_SEGMENTS,
  LEFT_BADGES,
  LEFT_DASHED_LINES,
} from './data';
import { leftXScale, leftYScale } from './scales';

const FONT_FAMILY = 'Arial, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

export function LeftPanel() {
  const axisWidth = LEFT_PANEL.x + LEFT_PANEL.width - LEFT_AXIS.originX;
  const axisHeight = LEFT_AXIS.originY - LEFT_PANEL.y;

  return (
    <g>
      {/* Panel background */}
      <PanelBackground
        x={LEFT_PANEL.x}
        y={LEFT_PANEL.y}
        width={LEFT_PANEL.width}
        height={LEFT_PANEL.height}
        fill={palette.panelBg}
      />

      {/* Panel label (b) */}
      <text
        x={LEFT_PANEL.labelX}
        y={LEFT_PANEL.labelY}
        fontSize={24}
        fill={palette.axis}
        fontFamily={FONT_FAMILY}
        dominantBaseline="middle"
      >
        {LEFT_PANEL.label}
      </text>

      {/* Axes */}
      <Axis2D
        x={LEFT_AXIS.originX}
        y={LEFT_AXIS.originY}
        width={axisWidth}
        height={axisHeight}
        xTicks={LEFT_X_TICKS}
        yTicks={LEFT_Y_TICKS}
        xScale={leftXScale}
        yScale={leftYScale}
        stroke={palette.axis}
        tickLength={5}
        fontSize={18}
      />

      {/* Y-axis label – stacked vertical text */}
      <text
        x={58}
        y={LEFT_PANEL.y + 8}
        fontSize={18}
        fill={palette.axis}
        fontFamily={FONT_FAMILY}
        textAnchor="middle"
      >
        <tspan x={58} dy="0">膜</tspan>
        <tspan x={58} dy="1.35em">電</tspan>
        <tspan x={58} dy="1.35em">位</tspan>
        <tspan x={58} dy="1.35em">(</tspan>
        <tspan x={58} dy="1.35em">mV</tspan>
        <tspan x={58} dy="1.35em">)</tspan>
      </text>

      {/* X-axis label */}
      <text
        x={leftXScale(2.5)}
        y={LEFT_AXIS.originY + 28}
        fontSize={18}
        fill={palette.axis}
        fontFamily={FONT_FAMILY}
        textAnchor="middle"
      >
        時間 (ms)
      </text>

      {/* Dashed reference lines */}
      {LEFT_DASHED_LINES.map(({ yData }) => (
        <DashedReferenceLine
          key={yData}
          x1={LEFT_AXIS.originX + 1}
          x2={LEFT_PANEL.x + LEFT_PANEL.width}
          y={leftYScale(yData)}
          stroke={palette.dashed}
        />
      ))}

      {/* Main curve */}
      <SegmentedCurve
        segments={LEFT_SEGMENTS}
        xScale={leftXScale}
        yScale={leftYScale}
        strokeWidth={3}
      />

      {/* Number badges */}
      {LEFT_BADGES.map(({ cx, cy, fill, text }, i) => (
        <NumberBadge key={i} cx={cx} cy={cy} r={10} fill={fill} text={text} fontSize={16} />
      ))}

      {/* Dashed line annotations (right side) */}
      {LEFT_DASHED_LINES.map(({ yData, annotation }) => (
        <ExternalAnnotation
          key={yData}
          x={LEFT_PANEL.x + LEFT_PANEL.width + 4}
          y={leftYScale(yData) - 8}
          text={[...annotation]}
          fontSize={17}
          anchor="start"
        />
      ))}
    </g>
  );
}
