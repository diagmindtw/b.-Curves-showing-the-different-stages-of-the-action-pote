import { palette } from './palette';
import { PanelBackground } from './PanelBackground';
import { Axis2D } from './Axis2D';
import { CurvePath } from './CurvePath';
import { IonLabel } from './IonLabel';
import {
  RIGHT_PANEL,
  RIGHT_AXIS,
  RIGHT_X_TICKS,
  RIGHT_NA_POINTS,
  RIGHT_K_POINTS,
} from './data';
import { rightXScale, rightYScale } from './scales';

const FONT_FAMILY = 'Arial, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

export function RightPanel() {
  const axisWidth = RIGHT_PANEL.x + RIGHT_PANEL.width - RIGHT_AXIS.originX;
  const axisHeight = RIGHT_AXIS.originY - RIGHT_PANEL.y;

  return (
    <g>
      {/* Panel background */}
      <PanelBackground
        x={RIGHT_PANEL.x}
        y={RIGHT_PANEL.y}
        width={RIGHT_PANEL.width}
        height={RIGHT_PANEL.height}
        fill={palette.panelBg}
      />

      {/* Panel label (c) */}
      <text
        x={RIGHT_PANEL.labelX}
        y={RIGHT_PANEL.labelY}
        fontSize={24}
        fill={palette.axis}
        fontFamily={FONT_FAMILY}
        dominantBaseline="middle"
      >
        {RIGHT_PANEL.label}
      </text>

      {/* Axes (no Y ticks for right panel – only axis line) */}
      <Axis2D
        x={RIGHT_AXIS.originX}
        y={RIGHT_AXIS.originY}
        width={axisWidth}
        height={axisHeight}
        xTicks={RIGHT_X_TICKS}
        xScale={rightXScale}
        yScale={rightYScale}
        stroke={palette.axis}
        tickLength={5}
        fontSize={18}
      />

      {/* Y-axis label – stacked vertical text */}
      <text
        x={360}
        y={RIGHT_PANEL.y + 4}
        fontSize={18}
        fill={palette.axis}
        fontFamily={FONT_FAMILY}
        textAnchor="middle"
      >
        <tspan x={360} dy="0">離</tspan>
        <tspan x={360} dy="1.35em">子</tspan>
        <tspan x={360} dy="1.35em">相</tspan>
        <tspan x={360} dy="1.35em">對</tspan>
        <tspan x={360} dy="1.35em">通</tspan>
        <tspan x={360} dy="1.35em">透</tspan>
        <tspan x={360} dy="1.35em">性</tspan>
      </text>

      {/* X-axis label */}
      <text
        x={rightXScale(2.5)}
        y={RIGHT_AXIS.originY + 28}
        fontSize={18}
        fill={palette.axis}
        fontFamily={FONT_FAMILY}
        textAnchor="middle"
      >
        時間 (ms)
      </text>

      {/* Na+ curve (orange) */}
      <CurvePath
        points={RIGHT_NA_POINTS}
        xScale={rightXScale}
        yScale={rightYScale}
        stroke={palette.orange}
        strokeWidth={3}
      />

      {/* K+ curve (magenta) */}
      <CurvePath
        points={RIGHT_K_POINTS}
        xScale={rightXScale}
        yScale={rightYScale}
        stroke={palette.magenta}
        strokeWidth={3}
      />

      {/* Na+ label */}
      <IonLabel x={445} y={50} baseText="Na" fontSize={24} />

      {/* K+ label */}
      <IonLabel x={470} y={110} baseText="K" fontSize={24} />
    </g>
  );
}
