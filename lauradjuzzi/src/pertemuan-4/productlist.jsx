import productData from "./product.json";

export default function ProductList() {
    return (
        <div className="p-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {productData.map((item) => (
                    <div
                        key={item.id}
                        className="border p-4 mb-4 rounded-lg shadow-md bg-white grid"
                    >
                        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className=" text-red-700 px-2 py-1 text-xs rounded-full mr-2"
                            >
                                {tag}{" "}
                            </span>
                        ))}
                        <p className="text-blue-600">{item.category}</p>
                        <p className="text-gray-600">Brand : {item.brand}</p>
                        <p className="text-gray-600">Price : {item.price}</p>
                        <p className="text-red-600">Discount : {item.discountPercentage} %</p>
                        <p className="text-gray-600">Rating : {item.rating} </p>
                        <p className="text-gray-600">Stock : {item.stock} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
