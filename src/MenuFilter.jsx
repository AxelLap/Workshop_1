import Link from "next/link";
import clsx from "clsx";

export const MenuFilter = ({ currentFilter, filters }) => {
  return (
    <nav className="h-full w-3/12 flex flex-col">
      <MenuItem currentFilter={currentFilter} filter="">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem key={filter} currentFilter={currentFilter} filter={filter}>
          {filter}
        </MenuItem>
      ))}
    </nav>
  );
};

const MenuItem = ({ currentFilter, filter, children }) => {
  return (
    <Link
      className={clsx(
        "p-2 mt-6 ml-auto mr-auto mb-6 cursor-pointer capitalize rounded-md hover:bg-gray-200 text-center flex justify-center",
        {
          "font-bold text-customBlue": filter === currentFilter,
        }
      )}
      href={`/?filter=${filter}`}
    >
      {children}
    </Link>
  );
};

export default MenuFilter;
