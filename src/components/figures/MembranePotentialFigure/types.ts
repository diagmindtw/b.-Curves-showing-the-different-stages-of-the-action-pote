export type Point = { x: number; y: number };

export type FigureSvgProps = {
  width?: number | string;
  className?: string;
};

export type PanelBackgroundProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
};

export type TickDef = { value: number; label: string };

export type Axis2DProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  xTicks: TickDef[];
  yTicks?: TickDef[];
  xScale: (v: number) => number;
  yScale: (v: number) => number;
  stroke?: string;
  tickLength?: number;
  fontSize?: number;
};

export type AxisLabelProps = {
  x: number;
  y: number;
  text: string;
  rotate?: number;
  fontSize?: number;
  anchor?: 'start' | 'middle' | 'end';
};

export type DashedReferenceLineProps = {
  x1: number;
  x2: number;
  y: number;
  stroke?: string;
  dashArray?: string;
};

export type CurvePathProps = {
  points: Point[];
  xScale: (v: number) => number;
  yScale: (v: number) => number;
  stroke: string;
  strokeWidth?: number;
  linecap?: 'round' | 'butt' | 'square';
  linejoin?: 'round' | 'miter' | 'bevel';
};

export type SegmentDef = {
  color: string;
  points: Point[];
};

export type SegmentedCurveProps = {
  segments: SegmentDef[];
  xScale: (v: number) => number;
  yScale: (v: number) => number;
  strokeWidth?: number;
};

export type NumberBadgeProps = {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  text: string;
  textColor?: string;
  fontSize?: number;
};

export type ExternalAnnotationProps = {
  x: number;
  y: number;
  text: string | string[];
  fontSize?: number;
  anchor?: 'start' | 'middle' | 'end';
  lineHeight?: number;
};

export type IonLabelProps = {
  x: number;
  y: number;
  baseText: 'Na' | 'K';
  fontSize?: number;
};
