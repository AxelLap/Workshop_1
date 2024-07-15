import { ReactSvg } from "./ReactSvg";
import clsx from "clsx";
import { Button } from "./Button";
import { ShoppingBasket } from "lucide-react";
import { User } from "lucide-react";

export default function Header() {
  return (
    <header
      className={clsx(
        "flex",
        "w-full",
        "items-center",
        "px-2",
        "py-4",
        "justify-between"
      )}
    >
      <h1 className="flex w-fit items-center py-4 gap-2 text-lg font-bold">
        <ReactSvg size="25" />
        <span>ReactJourney</span>
      </h1>
      <nav className="flex gap-3">
        <Button type="headerBtn">
          <ShoppingBasket />
        </Button>
        <Button type="headerBtn">
          <User></User>
        </Button>
      </nav>
    </header>
  );
}
