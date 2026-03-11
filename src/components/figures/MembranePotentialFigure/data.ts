import { palette } from './palette';
import type { Point, SegmentDef, TickDef } from './types';

// ── Canvas / panel layout ──────────────────────────────────────────────────

export const CANVAS = { width: 576, height: 249 } as const;

export const LEFT_PANEL = {
  x: 92,
  y: 20,
  width: 148,
  height: 160,
  label: '(b)',
  labelX: 5,
  labelY: 35,
} as const;

export const RIGHT_PANEL = {
  x: 394,
  y: 20,
  width: 146,
  height: 160,
  label: '(c)',
  labelX: 342,
  labelY: 35,
} as const;

// ── Left plot area ─────────────────────────────────────────────────────────

export const LEFT_AXIS = {
  originX: 94,   // Y-axis x position
  originY: 180,  // X-axis y position
} as const;

export const LEFT_DATA_DOMAIN = {
  x: [0, 5] as [number, number],
  y: [-80, 35] as [number, number],
} as const;

export const LEFT_X_TICKS: TickDef[] = [0, 1, 2, 3, 4, 5].map((v) => ({
  value: v,
  label: String(v),
}));

export const LEFT_Y_TICKS: TickDef[] = [
  { value: 30, label: '+30' },
  { value: 0, label: '0' },
  { value: -70, label: '-70' },
];

// ── Right plot area ────────────────────────────────────────────────────────

export const RIGHT_AXIS = {
  originX: 394,
  originY: 180,
} as const;

export const RIGHT_DATA_DOMAIN = {
  x: [0, 5] as [number, number],
  y: [0, 1.05] as [number, number],
} as const;

export const RIGHT_X_TICKS: TickDef[] = [0, 1, 2, 3, 4, 5].map((v) => ({
  value: v,
  label: String(v),
}));

// ── Left panel curve segments ──────────────────────────────────────────────

export const LEFT_SEGMENTS: SegmentDef[] = [
  {
    color: palette.maroon,
    points: [
      { x: 0.0, y: -72 },
      { x: 0.2, y: -72 },
      { x: 0.4, y: -72 },
      { x: 0.6, y: -72 },
    ],
  },
  {
    color: palette.blue,
    points: [
      { x: 0.6, y: -72 },
      { x: 0.85, y: -66 },
      { x: 1.05, y: -55 },
      { x: 1.2, y: -20 },
    ],
  },
  {
    color: palette.magenta,
    points: [
      { x: 1.2, y: -20 },
      { x: 1.35, y: 10 },
      { x: 1.5, y: 28 },
      { x: 1.62, y: 30 },
    ],
  },
  {
    color: palette.green,
    points: [
      { x: 1.62, y: 30 },
      { x: 1.78, y: 15 },
      { x: 2.0, y: -30 },
      { x: 2.25, y: -78 },
    ],
  },
  {
    color: palette.orange,
    points: [
      { x: 2.25, y: -78 },
      { x: 2.6, y: -82 },
      { x: 3.2, y: -78 },
      { x: 4.1, y: -72 },
      { x: 5.0, y: -70 },
    ],
  },
];

// ── Left panel number badges ───────────────────────────────────────────────

export const LEFT_BADGES = [
  { cx: 103, cy: 160, fill: palette.maroon, text: '1' },
  { cx: 128, cy: 142, fill: palette.blue,   text: '2' },
  { cx: 118, cy: 80,  fill: palette.magenta, text: '3' },
  { cx: 160, cy: 80,  fill: palette.green,  text: '4' },
  { cx: 165, cy: 170, fill: palette.orange, text: '5' },
  { cx: 225, cy: 160, fill: palette.maroon, text: '1' },
] as const;

// ── Left panel dashed reference lines ─────────────────────────────────────

export const LEFT_DASHED_LINES = [
  { yData: 0,   annotation: ['閾值電位'] },
  { yData: -70, annotation: ['靜止膜電位'] },
] as const;

// ── Right panel curves ─────────────────────────────────────────────────────

export const RIGHT_NA_POINTS: Point[] = [
  { x: 0.0, y: 0.02 },
  { x: 0.8, y: 0.03 },
  { x: 1.2, y: 0.08 },
  { x: 1.45, y: 0.95 },
  { x: 1.6, y: 0.55 },
  { x: 1.9, y: 0.18 },
  { x: 2.4, y: 0.05 },
  { x: 5.0, y: 0.01 },
];

export const RIGHT_K_POINTS: Point[] = [
  { x: 0.0, y: 0.02 },
  { x: 0.9, y: 0.04 },
  { x: 1.4, y: 0.18 },
  { x: 1.9, y: 0.42 },
  { x: 2.3, y: 0.44 },
  { x: 2.8, y: 0.30 },
  { x: 3.5, y: 0.12 },
  { x: 4.3, y: 0.04 },
  { x: 5.0, y: 0.01 },
];
