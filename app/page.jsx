import Header from "@/src/Header";
import MenuFilter from "@/src/MenuFilter.jsx";
import Cards from "@/src/Cards";
import { REACT_CARDS } from "@/react-cards";

export default function Page({ searchParams }) {
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  const currentFilter = searchParams.filter;
  console.log({ currentFilter, filters });

  function displayCards(currentFilter) {
    return REACT_CARDS.filter((card) => {
      if (!currentFilter) return true;
      return card.category === currentFilter;
    }).map((card) => (
      <Cards
        key={card.name}
        name={card.name}
        category={card.category}
        url={card.url}
        currentFilter={currentFilter}
      />
    ));
  }

  return (
    <main className="m-auto flex h-full max-w-6xl flex-col px-4">
      <Header />
      <section className="flex w-full h-full overflow-hidden">
        <MenuFilter currentFilter={currentFilter} filters={filters} />
        <div className="flex-grow h-full">
          <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 overflow-auto">
            {displayCards(currentFilter)}
          </div>
        </div>
      </section>
    </main>
  );
}
