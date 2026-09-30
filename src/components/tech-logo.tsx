import type { SimpleIcon } from "simple-icons";

export function TechLogo(props: { icon: SimpleIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden="true">
      <path d={props.icon.path} />
    </svg>
  );
}
