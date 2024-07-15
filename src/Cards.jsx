import { ReactSvg } from "./ReactSvg";
import { cva } from "class-variance-authority";
import { Button } from "./Button";
import { BookOpenText } from "lucide-react";
import { PlusCircle } from "lucide-react";

const cardRowVariant = cva("flex w-full align-center", {
  variants: {
    position: {
      up: "justify-start",
      middle: "justify-center h-10 mt-2 mb-2",
      bottom: "justify-between",
    },
  },
});

const Cards = ({ name, category, currentFilter, url }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100 w-25 h-25">
      <CardRow position="up">
        <ReactSvg size="25" />
        <span className="font-bold pl-2">React</span>
      </CardRow>
      <CardRow position="middle">
        <h2 className="font-bold h-fit mt-auto mb-auto capitalize">{name}</h2>
      </CardRow>
      <CardRow position="bottom">
        <span className="h-fit mt-auto mb-auto capitalize line-clamp-1 text-start text-xs text-gray-400 ">
          {currentFilter === "" ? category : ""}
        </span>
        <div className="flex">
          <Button type="cardBtn" url={url}>
            <BookOpenText />
          </Button>
          <Button type="cardBtn">
            <PlusCircle />
          </Button>
        </div>
      </CardRow>
    </div>
  );
};

const CardRow = ({ position, children }) => {
  return (
    <div className={cardRowVariant({ position: position })}>{children}</div>
  );
};

export default Cards;
