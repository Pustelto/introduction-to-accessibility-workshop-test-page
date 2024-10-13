import { CATEGORIES } from "@/data/categories";
import kebabCase from "lodash/kebabCase";

export function MainMenu() {
  return (
    <>
      {" "}
      <h3 className="border-b-2 border-blue-600 py-2">Menu</h3>
      <ul>
        {CATEGORIES.map((category) => (
          <li
            key={category.id}
            className="py-1 hover:text-blue-800 focus-within:text-blue-800 h-[40px]"
          >
            <a
              href={`/product-categories/${kebabCase(category.name)}/`}
              className="leading-7"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
