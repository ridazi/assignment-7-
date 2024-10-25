
"use client";
import { useEffect, useState } from "react";

export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Click event handler
    const handleClick = (title, price) => {
        alert(`You clicked on: ${title}\nPrice: $${price}`);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-green-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">*...Product List...*</h1>
            {products.map((item) => (
                <div
                    className="bg-pink-100 rounded-md shadow-md p-4 mb-4 transition-transform transform hover:scale-105 cursor-pointer hover:bg-gray-200 hover:border-2 hover:border-blue-500"
                    key={item.id}
                    onClick={() => handleClick(item.title, item.price)} // Pass the price as well
                >
                    <h3 className="text-lg font-semibold transition-colors hover:text-blue-600">
                        Name: {item.title}
                    </h3>
                </div>
            ))}
        </div>
    );
}
