import kebabCase from "lodash/kebabCase";

export function LogoTile({ logo }) {
  return (
    <li className="splide__slide">
      <a
        href={`/brands/${kebabCase(logo.name)}/`}
        className="w-[200px] shrink-0 outline-none"
      >
        <img src={logo.image} />
      </a>
    </li>
  );
}
