import kebabCase from "lodash/kebabCase";

export function BlogTile({ blog }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={blog.image} className="h-[280px] rounded-lg object-cover" />
      <div>
        <span className="text-sm text-gray-400">16 April 2023</span>
      </div>
      <a href={`/blog/${kebabCase(blog.name)}`}>
        <h3 className="text-xl text-slate-900 font-medium my-1">{blog.name}</h3>
      </a>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        recusandae optio vero animi eligendi. Sit modi incidunt reprehenderit,
        itaque nisi ab qui, unde hic dolor libero vel, animi vitae asperiores.
      </p>
      <a
        href={`/blog/${kebabCase(blog.name)}`}
        className="text-base text-blue-700 underline ml-[auto]"
      >
        More &#8594;
      </a>
    </div>
  );
}
