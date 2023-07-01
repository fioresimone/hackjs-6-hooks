import useLocalStorage from "../Hooks/useLocalStorage";

export default function LocalStorage() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <>
      <div
        className={
          "h-96 w-96 " + (theme === "light" ? "bg-slate-500" : "bg-black")
        }
      ></div>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Toggle theme
      </button>
    </>
  );
}
