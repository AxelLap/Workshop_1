import Header from "@/src/Header";
import MenuFilter from "@/src/MenuFilter.jsx";
import Cards from "@/src/Cards";
import { REACT_CARDS } from "@/react-cards";

export default function Page({ searchParams }) {
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  const currentFilter = searchParams.filter;
  console.log({ currentFilter, filters });
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <section className="flex w-full">
        <MenuFilter currentFilter={currentFilter} filters={filters} />
        <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2">
          <Cards />
          <Cards />

          <Cards />

          <Cards />

          <Cards />

          <Cards />
        </div>
      </section>
    </main>
  );
}
