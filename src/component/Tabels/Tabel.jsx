const products = [
  {
    name: "Adrees",
    email: "Adrees@gmail.com",
    password: "Laptop",
    subject: "$2999",
    action1: "Edit",
    action2: "Delete",
  },
  {
    name: "Adrees",
    email: "Adrees@gmail.com",
    password: "Laptop",
    subject: "$2999",
    action1: "Edit",
    action2: "Delete",
  },
  {
    name: "Adrees",
    email: "Adrees@gmail.com",
    password: "Laptop",
    subject: "$2999",
    action1: "Edit",
    action2: "Delete",
  },
  {
    name: "Adrees",
    email: "Adrees@gmail.com",
    password: "Laptop",
    subject: "$2999",
    action1: "Edit",
    action2: "Delete",
  },
  {
    name: "Adrees",
    email: "Adrees@gmail.com",
    password: "Laptop",
    subject: "$2999",
    action1: "Edit",
    action2: "Delete",
  },
];

const ProductTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white max-w-screen-lg m-auto flex flex-col gap-10 p-6 my-10">
      <div className="flex lg:flex-row flex-col justify-between">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/signUp"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
      </div>
      </div>
      <table className="w-full text-sm text-left text-gray-900">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Subject
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">{product.email}</td>
              <td className="px-6 py-4">{product.password}</td>
              <td className="px-6 py-4">{product.subject}</td>
              <td className="px-6 py-4 flex gap-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {product.action1}
                </a>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {product.action2}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
