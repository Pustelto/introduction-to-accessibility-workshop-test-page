import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainMenu } from "@/components/MainMenu";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "AllShop - best stuff for almost best prices.",
  description: "Best shop with best products for almost best prices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link
          href=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css "
          rel="stylesheet"
        />
        <script
          defer
          src=" https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js "
        ></script>
      </head>

      <body className="antialiased">
        <div className="container mx-auto grid grid-cols-8 gap-4 min-h-100vh px-3 md:px-0">
          <div className="hidden xl:block col-start-1 col-span-1 relative py-16 px-4">
            <a href="/banner">
              <span role="img" className="text-5xl">
                🚨
              </span>
              <h1 className="text-5xl font-black text-[red] -skew-y-6 leading-none">
                Big sales!
              </h1>
              <h2 className="mt-8 text-xl font-medium text-gray-700 -skew-y-6">
                Check out our hottest stuff for killer prices!
              </h2>
            </a>
          </div>

          <div className="hidden xl:block col-span-1 col-start-8 relative py-16 px-4">
            <a href="/banner">
              <h1 className="text-5xl font-black text-[red] leading-none">
                Our best sellers
              </h1>
              <h2 className="mt-8 text-xl font-medium text-gray-700">
                Our best selling products of all time.
              </h2>
            </a>
          </div>

          <div
            className="grid gap-4 md:gap-8 col-span-8 lg:col-span-6 col-start-1 lg:col-start-2 row-start-1
    grid-rows-[80px_1fr] md:grid-rows-[100px_1fr]"
          >
            <Header />

            <div className="grid grid-cols-5 gap-4 lg:gap-8">
              <div className="gap-4 md:gap-6 lg:gap-8 col-start-1 col-span-5 md:col-start-2 md:col-span-4">
                {children}
                <Footer />
              </div>

              <div className="hidden md:block md:col-start-1 md:col-span-1 row-start-1">
                <MainMenu />
              </div>
            </div>
          </div>
        </div>

        <Script
          id="logo-slider-script"
          dangerouslySetInnerHTML={{
            __html: `if(document.getElementById("logos-slider")) {
                  var logoSlider = new Splide('#logos-slider', {
                  perPage: 4,
                  focus: 0,
                  omitEnd: true,
                  breakpoints: {
                    1280: {perPage: 3},
                    530: {perPage: 2},
                  }
                });
                logoSlider.mount();
              }
`,
          }}
        ></Script>
        <Script
          id="sliders-scripts"
          dangerouslySetInnerHTML={{
            __html: `const hasProductSliders = document.getElementById("new-products-slider")
              if (hasProductSliders) {
            var newProductsSlider = new Splide('#new-products-slider', {
                perPage: 3,
              focus: 0,
              gap: "2rem",
              pagination: false,
              // mediaQuery: "min",
              omitEnd: true,
              breakpoints: {
                1020: {perPage: 2},
              540: {perPage: 1},
              }
            });
              newProductsSlider.mount();

              var newProductsSlider = new Splide('#fav-products-slider', {
                perPage: 3,
              focus: 0,
              gap: "2rem",
              pagination: false,
              // mediaQuery: "min",
              omitEnd: true,
              breakpoints: {
                1020: {perPage: 2},
              540: {perPage: 1},
              }
            });
              newProductsSlider.mount();
          }
`,
          }}
        ></Script>
      </body>
    </html>
  );
}
