import type { FigureSvgProps } from './types';
import { FigureSvg } from './FigureSvg';

export function MembranePotentialFigure(props: FigureSvgProps) {
  return <FigureSvg {...props} />;
}

export { FigureSvg } from './FigureSvg';
export { LeftPanel } from './LeftPanel';
export { RightPanel } from './RightPanel';
export { PanelBackground } from './PanelBackground';
export { Axis2D } from './Axis2D';
export { AxisLabel } from './AxisLabel';
export { DashedReferenceLine } from './DashedReferenceLine';
export { CurvePath } from './CurvePath';
export { SegmentedCurve } from './SegmentedCurve';
export { NumberBadge } from './NumberBadge';
export { ExternalAnnotation } from './ExternalAnnotation';
export { IonLabel } from './IonLabel';
