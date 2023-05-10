export function Button({ children, onClick, ...otherProps }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md bg-blue-700 hover:bg-blue-800 outline-none text-white px-8 py-2
          w-full antialiased font-normal"
      data-js-addToCart
      {...otherProps}
    >
      {children}
    </button>
  );
}
