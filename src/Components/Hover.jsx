import useHover from "../Hooks/useHover";

export default function Hover() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      className={"px-3 py-2 " + (isHovered ? "bg-slate-900" : "bg-yellow-500")}
    >
      {isHovered ? "I'm in" : "I'm out"}
    </div>
  );
}
