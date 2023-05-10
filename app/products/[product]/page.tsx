import { Button } from "@/components/Button";
import { Rating } from "@/components/Rating";
import { PRODUCTS } from "@/data/products";
import kebabCase from "lodash/kebabCase";

export default function ProductCategory({ params }) {
  const product = PRODUCTS.find((c) => kebabCase(c.name) === params.product);

  if (!product) {
    return <h1>This product doesn&apos;t exits</h1>;
  }

  return (
    <>
      <h1 className="text-5xl font-black leading-none text-blue-700 mb-12">
        {product.name}
      </h1>
      <div
        className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12
  grid-rows-[_min-content,_min-content]"
      >
        <div
          className="relative grid align-center grid-rows-[360px,_min-content] md:grid-cols-2
    md:grid-rows-[none]"
        >
          <div className="flex items-center p-2">
            {product.energyClass ? (
              <span className="absolute top-0 left-0">
                <img
                  src={`/images/energy-class-${product.energyClass}.jpg`}
                  alt="Energy class"
                />
              </span>
            ) : null}
            <img
              src={product.image}
              alt={product.name}
              className="block h-[320px] md:h-100% object-contain"
            />
          </div>
          <div className="flex flex-col items-left space-y-3 gap-8">
            <div className="space-y-2">
              <div>
                <strong>Manufacturer:</strong>&nbsp;Arasaka
              </div>
              <div>
                <strong>Energy class:</strong>&nbsp;
                {product.energyClass ? product.energyClass : "-"}
              </div>
              <div>
                <strong>Price:</strong>&nbsp;
                <span className="w-full bg-white rounded-b p-1 font-semibold text-slate-800 text-center text-lg">
                  ${product.price}
                </span>
              </div>
              <div>
                <strong>Rating:</strong>&nbsp;{" "}
                <Rating rating={product.rating} />
              </div>
            </div>
            <Button>Add to cart</Button>
          </div>
        </div>

        <div>
          <p className="mb-6 w-8/12">
            Lorem ipsum euismod congue suspendisse, phasellus viverra porta
            eleifend, mollis aliquet libero. Imperdiet pretium eget sollicitudin
            curae diam ornare hendrerit cursus hendrerit pharetra, ornare massa
            aliquam pharetra primis cubilia donec ligula quisque. Sagittis ante
            nunc torquent primis eleifend conubia eros cras sed cubilia, et
            velit consectetur dapibus congue sollicitudin risus per conubia
            nisl, quisque consequat himenaeos luctus ac platea in varius porta.
            Fermentum quisque nullam mi condimentum felis placerat lobortis
            curabitur morbi, venenatis malesuada ante nisl aenean auctor eget
            curabitur, odio suspendisse ullamcorper cras mauris viverra sed
            praesent.
          </p>

          <p className="mb-6 w-8/12">
            Aliquam turpis habitant quisque hendrerit fames venenatis eget ante
            porttitor, ipsum potenti senectus non facilisis maecenas lacus
            taciti, sagittis vivamus tristique quisque elementum eu donec
            quisque. Tempus felis dui id feugiat platea fames netus fames neque
            luctus, hendrerit accumsan varius laoreet facilisis diam sodales
            placerat bibendum. Neque eleifend elementum massa felis aptent metus
            dolor, sodales nunc ipsum velit metus quis placerat, blandit viverra
            velit justo quis iaculis.
          </p>

          <p className="mb-6 w-8/12">
            Egestas auctor fusce quis id inceptos, commodo purus aliquam nullam
            nisl, scelerisque vel sagittis sem. Dapibus hendrerit feugiat
            placerat nisi aliquam commodo vivamus congue cubilia dapibus, mattis
            eu faucibus congue viverra imperdiet sapien vehicula ultricies.
            Ornare elementum porta lectus duis pharetra sagittis mattis orci
            bibendum urna placerat, mollis commodo consequat in senectus
            volutpat risus sodales aliquam primis. Augue senectus ad senectus at
            bibendum lorem lobortis dui augue, bibendum ut elit euismod justo
            risus eleifend lacinia hac sociosqu, molestie pellentesque lacinia
            eget ad proin volutpat nulla.
          </p>

          <p className="mb-6 w-8/12">
            Rutrum donec porttitor aptent aliquet ligula diam habitasse amet
            odio, interdum senectus gravida iaculis velit iaculis donec neque
            interdum massa, semper eu aliquet eu malesuada cursus volutpat
            potenti. Taciti rutrum ac varius laoreet praesent massa nam,
            molestie cras leo in eleifend ipsum, ut arcu mattis vulputate lacus
            id. Fringilla tincidunt mauris molestie convallis aenean id
            venenatis massa aenean curae vivamus, nulla quisque eget lobortis
            faucibus cubilia condimentum habitasse eleifend blandit, ad sociosqu
            leo donec cras curabitur etiam morbi etiam amet.
          </p>
        </div>
      </div>
    </>
  );
}
