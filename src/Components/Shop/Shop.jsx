import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router";

const Shop = () => {

  const Color = [
    { id: 1, color: "#000000", name: "Black" },
    { id: 2, color: "#FF0000", name: "Red" },
    { id: 3, color: "#00FF38", name: "Green" },
  ];

  const [categories, setCategories] = useState([]);
  const [sortby, setSortBy] = useState("");
  const [items, setItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const itemsPerPage = 6;

  // Fetch category list
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch products (all or by category)
  useEffect(() => {
    const url = sortby
      ? `https://dummyjson.com/products/category/${sortby}`
      : "https://dummyjson.com/products";

    axios
      .get(url)
      .then((res) => setItems(res.data.products))
      .catch((err) => console.log(err));
  }, [sortby]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="pt-20 pb-[104px]">
      <div className="container">
        <div className="flex pt-10 gap-10">

          {/* Sidebar */}
          <div className="w-[20%]">
            <h3 className="font-bold pb-4">Shop by Category</h3>

            <div className="flex flex-col gap-3 mb-10">
              {categories.slice(0, 9).map((ct) => (
                    <span
                      key={ct.slug}
                      onClick={() => setSortBy(ct.slug)}
                      className="pagination cursor-pointer hover:text-red-500"
                    >
                      {ct.name}
                    </span>
                  ))}
            </div>

            <h3 className="font-bold pb-4">Shop by Color</h3>
            <div className="flex flex-col gap-3">
              {Color.map((cl) => (
                <div key={cl.id}>
                  <label className="flex gap-2 items-center cursor-pointer">
                    <span
                      style={{ backgroundColor: cl.color }}
                      className="w-3 h-3 rounded-full"
                    ></span>
                    {cl.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="w-[80%]">
            <div className="grid grid-cols-3 gap-6 pb-10">
              {currentItems.slice(0, visibleCount).map((product) => {

                const discount = product.discountPercentage;
                const discountedPrice =
                  product.price - (product.price * discount) / 100;

                return (
                  <div key={product.id}>
                    <div className="bg-gray-100 p-6 rounded relative group overflow-hidden">
                      <Link to={`/product/details/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="mx-auto"
                      />
                      
                      </Link>

                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 rounded text-sm">
                        -{discount.toFixed(0)}%
                      </div>

                      <button className="absolute left-0 bottom-[-40px] w-full bg-black text-white py-2 group-hover:bottom-0 duration-300">
                        Add To Cart
                      </button>

                      <div className="absolute right-2 top-2 flex flex-col gap-2">
                        <div className="bg-white p-2 rounded-full">
                          <IoIosHeartEmpty />
                        </div>
                        <div className="bg-white p-2 rounded-full">
                          <IoEyeOutline />
                        </div>
                      </div>
                    </div>

                    <h3 className="pt-3 font-medium">
                      <Link to={`/product/details/${product.id}`}>
                      {product.title} </Link>
                      </h3>

                    <p className="flex gap-3">
                      <span className="text-red-500">
                        ${discountedPrice.toFixed(2)}
                      </span>
                      <del>${product.price}</del>
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span>(88)</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< Previous"
              containerClassName="flex gap-3 justify-center"
              activeClassName="text-red-500 font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;