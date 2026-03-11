import type { ExternalAnnotationProps } from './types';

export function ExternalAnnotation({
  x,
  y,
  text,
  fontSize = 18,
  anchor = 'start',
  lineHeight = 1.4,
}: ExternalAnnotationProps) {
  const lines = Array.isArray(text) ? text : [text];
  const em = lineHeight * fontSize;

  return (
    <text
      x={x}
      y={y}
      fontSize={fontSize}
      textAnchor={anchor}
      fill="#333333"
      fontFamily='Arial, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
    >
      {lines.map((line, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : em}>
          {line}
        </tspan>
      ))}
    </text>
  );
}
