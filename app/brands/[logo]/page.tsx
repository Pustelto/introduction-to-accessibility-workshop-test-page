import { ProductTile } from "@/components/productTile";
import { LOGOS } from "@/data/logos";
import { PRODUCTS } from "@/data/products";
import kebabCase from "lodash/kebabCase";

export default function BrandPage({ params }) {
  const logo = LOGOS.find((l) => kebabCase(l.name) === params.logo);
  return (
    <>
      <h1 className="text-5xl font-black leading-none text-blue-700 mb-12">
        {logo.name}
      </h1>
      <div
        className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16
  grid-rows-[_min-content,_min-content]"
      >
        <div
          className="grid align-center grid-rows-[360px,_min-content] md:grid-cols-2
    md:grid-rows-[none]"
        >
          <div className="flex items-center p-2">
            <img
              src={logo.image}
              alt={logo.name}
              className="block h-[320px] md:h-100% object-contain"
            />
          </div>
          <div className="flex flex-col items-left space-y-3 gap-8">
            <p className="mb-6">
              Lorem ipsum euismod congue suspendisse, phasellus viverra porta
              eleifend, mollis aliquet libero. Imperdiet pretium eget
              sollicitudin curae diam ornare hendrerit cursus hendrerit
              pharetra, ornare massa aliquam pharetra primis cubilia donec
              ligula quisque. Sagittis ante nunc torquent primis eleifend
              conubia eros cras sed cubilia, et velit consectetur dapibus congue
              sollicitudin risus per conubia nisl, quisque consequat himenaeos
              luctus ac platea in varius porta.
            </p>
          </div>
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
