import { BlogTile } from "@/components/BlogTile";
import { LogoTile } from "@/components/logoTile";
import { ProductTile } from "@/components/productTile";
import { BLOGS } from "@/data/blogs";
import { LOGOS } from "@/data/logos";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  return (
    <div
      className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12
  grid-rows-[250px,_min-content,_min-content,_min-content,1fr] lg:grid-rows-[250px,_300px,_1fr,_1fr,_1fr]"
    >
      <div className="flex banner relative bg-gradient-to-r from-blue-800 to-blue-600 rounded">
        <div
          className="w-full py-8 px-4 flex flex-col text-white bg-spring-sale-banner
      bg-[calc(100%_+_1rem)_calc(100%_+_4rem)]
      bg-[length:50%] bg-no-repeat"
        >
          <h2 className="text-3xl font-bold">Spring discounts</h2>
          <span className="mt-4 font-medium text-xl">
            Our top products for best prices!
          </span>
          <span className="mt-[auto] font-medium text-xl">
            Click here &rarr;
          </span>
        </div>
        <a className="absolute inset-0" href="/banner"></a>
      </div>

      <div>
        <h2 className="text-2xl text-slate-900 font-semibold mt-6 mb-4">
          Best selling brands
        </h2>
        <div id="logos-slider" className="splide">
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <span aria-hidden>
                <img src="/images/icons/arrow_left.svg" />
              </span>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <span aria-hidden>
                <img src="/images/icons/arrow_right.svg" />
              </span>
            </button>
          </div>
          <div className="splide__track">
            <ul className="splide__list">
              {LOGOS.map((logo, index) => (
                <LogoTile key={index} logo={logo} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-slate-900 font-semibold mt-6 mb-4">
          New products
        </h2>
        <div id="new-products-slider" className="splide">
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <span aria-hidden>
                <img src="/images/icons/arrow_left.svg" />
              </span>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <span aria-hidden>
                <img src="/images/icons/arrow_right.svg" />
              </span>
            </button>
          </div>
          <div className="splide__track">
            <ul className="splide__list">
              {PRODUCTS.map((product, index) => (
                <li key={index} className="splide__slide">
                  <ProductTile product={product} productType="New product" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-slate-900 font-semibold mt-6 mb-4">
          Most favorite products
        </h2>
        <div>
          <div id="fav-products-slider" className="splide">
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev">
                <span aria-hidden>
                  <img src="/images/icons/arrow_left.svg" />
                </span>
              </button>
              <button className="splide__arrow splide__arrow--next">
                <span aria-hidden>
                  <img src="/images/icons/arrow_right.svg" />
                </span>
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                {PRODUCTS.reverse().map((product, index) => (
                  <li key={index} className="splide__slide">
                    <ProductTile product={product} productType="Best deal" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-slate-900 font-semibold mt-6 mb-4">
          We are testing
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {BLOGS.map((blog) => (
            <BlogTile blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
