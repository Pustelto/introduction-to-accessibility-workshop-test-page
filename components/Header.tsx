import { Cart } from "./Cart";

export function Header() {
  return (
    <div className="grid grid-cols-5 gap-4 justify-between py-4 md:py-8 border-b-4 border-blue-600">
      <div className="relative flex items-center col-start-1 col-span-2 md:col-span-1 gap-4">
        <a
          href="/"
          className="text-xl md:text-2xl font-black text-blue-700 -skew-y-6 translate-x-1"
        >
          All-Shop
        </a>
        <button className="md:hidden">
          <img src="/images/icons/menu.svg" className="inline-block w-[24px]" />
        </button>
      </div>

      <form
        action=""
        className="hidden md:flex items-center col-start-2 col-span-3 w-full relative"
      >
        <input
          type="text"
          placeholder="Type what are you looking for"
          className="h-[32px] w-full
          outline-none focus:bg-gray-100 rounded-full px-3 pr-10"
        />
        <button className="absolute right-3">
          <img
            src="/images/icons/search.svg"
            className="inline-block w-[24px]"
          />
        </button>
      </form>

      <div className="flex items-center gap-2 col-start-4 md:col-start-5 col-span-2 md:col-span-1 justify-end">
        <button className="md:hidden">
          <img
            src="/images/icons/search.svg"
            title="search"
            className="inline-block w-[24px]"
          />
        </button>
        <a href="#">
          <img
            src="/images/icons/balance.svg"
            title="compare products"
            className="inline-block w-[24px]"
          />
        </a>
        <a href="#">
          <img
            src="/images/icons/favorite.svg"
            title="wishlist"
            className="inline-block w-[24px]"
          />
        </a>
        <Cart />
      </div>
    </div>
  );
}
