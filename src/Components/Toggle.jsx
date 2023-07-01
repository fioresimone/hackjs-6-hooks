import useToggle from "../Hooks/useToggle";

export default function Toggle() {
  const [color, setColor] = useToggle();

  return (
    <button
      className={"px-3 py-2 " + (color ? "bg-red-700" : "bg-emerald-700")}
      onClick={setColor}
    >
      {color ? "Toggled" : "Click to toggle"}
    </button>
  );
}
