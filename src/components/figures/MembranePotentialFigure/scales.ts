import { scaleLinear } from 'd3-scale';
import {
  LEFT_AXIS,
  LEFT_DATA_DOMAIN,
  LEFT_PANEL,
  RIGHT_AXIS,
  RIGHT_DATA_DOMAIN,
  RIGHT_PANEL,
} from './data';

// ── Left panel scales ──────────────────────────────────────────────────────

export const leftXScale = scaleLinear()
  .domain(LEFT_DATA_DOMAIN.x)
  .range([LEFT_AXIS.originX, LEFT_PANEL.x + LEFT_PANEL.width]);

export const leftYScale = scaleLinear()
  .domain(LEFT_DATA_DOMAIN.y)
  .range([LEFT_AXIS.originY, LEFT_PANEL.y]);

// ── Right panel scales ─────────────────────────────────────────────────────

export const rightXScale = scaleLinear()
  .domain(RIGHT_DATA_DOMAIN.x)
  .range([RIGHT_AXIS.originX, RIGHT_PANEL.x + RIGHT_PANEL.width]);

export const rightYScale = scaleLinear()
  .domain(RIGHT_DATA_DOMAIN.y)
  .range([RIGHT_AXIS.originY, RIGHT_PANEL.y]);
