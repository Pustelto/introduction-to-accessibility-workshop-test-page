import kebabCase from "lodash/kebabCase";
import { AddToCartButton } from "./Cart/AddToCartButton";

export function ProductTile({ product, productType }) {
  return (
    <div className="relative grid flex-col grid-rows-[360px,_min-content]">
      <div className="flex items-center p-2">
        {product.energyClass ? (
          <span className="absolute top-0 left-0">
            <img
              src={`/images/energy-class-${product.energyClass}.jpg`}
              alt="Energy class"
            />
          </span>
        ) : null}
        <a
          href={`/products/${kebabCase(product.name)}`}
          className="flex justify-center w-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="block h-[320px] md:h-100% object-contain"
          />
        </a>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <a
          href={`/products/${kebabCase(product.name)}`}
          className="mr-[auto] text-base font-medium text-slate-800"
        >
          {product.name}
        </a>
        <div
          role="button"
          tabIndex={-1}
          className="inline-flex flex-col items-center bg-orange-500
        rounded-md px-0.5 py-0.5"
        >
          {productType ? (
            <span className="px-4 py-1">{productType}</span>
          ) : null}
          <span className="w-full bg-white rounded-b p-1 font-semibold text-slate-800 text-center text-lg">
            ${product.price}
          </span>
        </div>
        <AddToCartButton itemId={product.id} />
      </div>
    </div>
  );
}
