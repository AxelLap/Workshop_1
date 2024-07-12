import { ReactSvg } from "./ReactSvg";
import clsx from "clsx";

export default function Header() {
  return (
    <header
      className={clsx(
        "flex",
        "w-full",
        "items-center",
        "px-2",
        "py-4",
        "hover:bg-black",
        "hover:text-white"
      )}
    >
      <h1 className="flex w-fit">
        <ReactSvg size="25" />
        <span>ReactJourney</span>
      </h1>
      <nav></nav>
    </header>
  );
}
