
import { clsx } from "clsx";
import { cva } from "class-variance-authority";

const buttonVariant = cva()

// inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring bg-transparent text-gray-950 hover:bg-gray-200 h-8 text-sm font-semibold
export default Button ({children}){
  return(
    <button

    >
      {children}
    </button>
  )
}