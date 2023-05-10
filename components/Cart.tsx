export function Cart({}) {
  return (
    <>
      <div id="cart" className="flex items-center">
        <img
          src="/images/icons/shopping_bag.svg"
          className="inline-block w-[24px]"
        />
        Cart
        <span
          id="cartCount"
          className="rounded-full bg-blue-700 text-white font-medium text-xs hidden
            w-4 h-4 justify-center items-center"
        ></span>
      </div>
      <div
        id="cart-content"
        className="hidden absolute shadow-gray-600 shadow-lg py-8 px-6 bg-white"
      >
        <div>Cart is empty</div>
      </div>
    </>
  );
}
