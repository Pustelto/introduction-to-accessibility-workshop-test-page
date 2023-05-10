import { ProductTile } from "@/components/productTile";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import kebabCase from "lodash/kebabCase";

export default function ProductCategory({ params }) {
  const category = CATEGORIES.find(
    (c) => kebabCase(c.name) === params.category
  );

  return (
    <>
      <h1 className="text-5xl font-black leading-none text-blue-700 mb-12">
        {category.name}
      </h1>
      <div
        className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16
  grid-rows-[_min-content,_min-content]"
      >
        <div className="flex flex-col items-left w-8/12">
          <p className="mb-6">
            Lorem ipsum euismod congue suspendisse, phasellus viverra porta
            eleifend, mollis aliquet libero. Imperdiet pretium eget sollicitudin
            curae diam ornare hendrerit cursus hendrerit pharetra, ornare massa
            aliquam pharetra primis cubilia donec ligula quisque. Sagittis ante
            nunc torquent primis eleifend conubia eros cras sed cubilia, et
            velit consectetur dapibus congue sollicitudin risus per conubia
            nisl, quisque consequat himenaeos luctus ac platea in varius porta.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
          {PRODUCTS.map((product, index) => (
            <ProductTile key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
