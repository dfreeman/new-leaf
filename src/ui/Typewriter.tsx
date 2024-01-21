import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Description } from '../engine/model';
import styles from './Typewriter.module.css';

type TypewriterSegment =
  | { kind: 'text'; content: string }
  | { kind: 'action'; content: string; action?: () => void }
  | { kind: 'break' };

function Segment({
  segment,
  truncate,
  ...props
}: {
  segment: TypewriterSegment;
  truncate?: number;
}) {
  return segment.kind === 'break' ? (
    <div className={styles.break} {...props} />
  ) : segment.kind === 'text' ? (
    <span {...props}>{segment.content.slice(0, truncate ?? Infinity)}</span>
  ) : (
    <span
      {...props}
      {...(segment.action ? { onClick: segment.action, tabIndex: 0 } : {})}
      className={styles.ref}
    >
      {segment.content.slice(0, truncate ?? Infinity)}
    </span>
  );
}

export function Typewriter(props: {
  startAt?: number;
  content: Array<{ description: Description; action?: () => void }>;
}) {
  const delay = 10;
  const advance = 1;
  const end = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [segments, segmentMapping] = useMemo(() => {
    const segments: Array<TypewriterSegment> = [];
    const mapping: Array<number> = [];
    for (const [
      contentIndex,
      {
        description: { refs, text },
        action,
      },
    ] of props.content.entries()) {
      for (let i = 0; i < text.length; i++) {
        const paragraphs = text[i].split(/\s*\n\s*\n\s*/g);
        for (let j = 0; j < paragraphs.length; j++) {
          mapping.push(contentIndex);
          segments.push({
            kind: 'text',
            content: paragraphs[j].replace(/\s*\n\s*/g, ' '),
          });
          if (j < paragraphs.length - 1) {
            mapping.push(contentIndex);
            segments.push({ kind: 'break' });
          }
        }
        if (i < refs.length) {
          mapping.push(contentIndex);
          segments.push({ kind: 'action', content: refs[i], action });
        }
      }
    }
    return [segments, mapping];
  }, [props.content]);
  const startSegment = segmentMapping.indexOf(props.startAt ?? 0);
  const [segment, setSegment] = useState(
    startSegment === -1 ? segments.length + 1 : startSegment,
  );
  if (props.startAt !== undefined) {
    console.log(segmentMapping);
    console.log({ startAt: props.startAt, segment });
  }
  const current = segments[segment];
  const finish = useCallback(() => {
    setSegment(segments.length);
    setOffset(0);
  }, [segments.length]);

  useEffect(() => {
    if (current) {
      const timeout = setTimeout(() => {
        const nextSegment =
          current.kind === 'break' || offset >= current.content.length;
        if (nextSegment) {
          setSegment((segment) => segment + 1);
          setOffset(0);
        } else {
          setOffset((offset) => offset + advance);
        }
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [segments, current, offset]);

  useEffect(() => {
    end.current?.scrollIntoView();
  }, [current, offset]);

  return (
    <div onClick={finish} className={styles.scroller}>
      {...segments
        .slice(0, segment)
        .map((segment, i) => <Segment key={i} segment={segment} />)}
      {current ? (
        <Segment key={'current'} segment={current} truncate={offset} />
      ) : (
        <></>
      )}
      <div ref={end} />
    </div>
  );
}
