import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router"
import { useDispatch } from "react-redux"
import { addtocart } from "../../redux/slice/cartSlice"
import Swal from 'sweetalert2'
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa"
import { FaMinus, FaPlus } from "react-icons/fa6"
import { IoMdHeartEmpty } from "react-icons/io"
import { TbTruckDelivery } from "react-icons/tb"
import { BsArrowRepeat } from "react-icons/bs"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoEyeOutline } from "react-icons/io5"

const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [product, setProduct] = useState({})
  const [gallery, setGallery] = useState([])
  const [mainImg, setMainImg] = useState(null)
  const [related, setRelated] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [showMore, setShowMore] = useState(false)

  /* ================= FETCH PRODUCT ================= */
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data)
        setGallery(res.data.images || [])
        setMainImg(res.data.thumbnail)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  /* ================= FETCH RELATED ================= */
  useEffect(() => {
    if (product.category) {
      axios
        .get(
          `https://dummyjson.com/products/category/${product.category}`
        )
        .then((res) => setRelated(res.data.products))
        .catch((err) => console.log(err))
    }
  }, [product.category])

  /* ================= QUANTITY ================= */
  const inc = () => setQuantity((prev) => prev + 1)
  const dec = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  /* ================= ADD TO CART ================= */
  const handleAddToCart = () => {
    dispatch(
      addtocart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity,
      }))      

       const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }      
        });
            Toast.fire({
        icon: "success",
        title: "Product Added To Cart"
      });
          
        }

  /* ================= RATING FUNCTION ================= */
  const renderStars = (rating = 0) => {
    return Array.from({ length: 5 }).map((_, i) => {
      const full = Math.floor(rating)
      const half = rating - full >= 0.5

      if (i < full) return <FaStar key={i} className="text-[#FFAD33]" />
      if (i === full && half)
        return <FaRegStarHalf key={i} className="text-[#FFAD33]" />
      return <FaRegStar key={i} className="text-[#FFAD33]" />
    })
  }

  return (
    <section className="pb-32">
      <div className="container mx-auto">

        {/* ================= MAIN SECTION ================= */}
        <div className="flex gap-12 mt-20">

          {/* GALLERY */}
          <div className="w-1/2 flex gap-6">
            <div className="flex flex-col gap-4">
              {gallery.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setMainImg(img)}
                  src={img}
                  className="w-24 h-24 object-contain bg-gray-100 cursor-pointer"
                  alt=""
                />
              ))}
            </div>

            <div className="flex-1 bg-gray-100 flex items-center justify-center">
              <img src={mainImg} className="max-h-[400px]" alt="" />
            </div>
          </div>

          {/* DETAILS */}
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold">{product.title}</h2>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-1">{renderStars(product.rating)}</div>
              <span className="text-gray-500 text-sm">
                ({product.rating})
              </span>
              <span className="text-green-500 text-sm border-l pl-3">
                {product.stock ? "In Stock" : "Out Of Stock"}
              </span>
            </div>

            <h3 className="text-xl font-medium mt-4">
              ${product.price}
            </h3>

            <div className="mt-4 border-b pb-4">
              <p
                className={`transition-all duration-500 ${
                  showMore ? "max-h-[500px]" : "max-h-[60px] overflow-hidden"
                }`}
              >
                {product.description}
              </p>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-sm underline mt-2"
              >
                {showMore ? "Show Less" : "View More"}
              </button>
            </div>

            {/* QUANTITY + CART */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex border">
                <button onClick={dec} className="px-3 py-2 border-r">
                  <FaMinus />
                </button>
                <div className="px-6 flex items-center">{quantity}</div>
                <button onClick={inc} className="px-3 py-2 border-l">
                  <FaPlus />
                </button>
              </div>
              <button onClick={handleAddToCart} type='button' className="bg-black text-white px-6 py-2">Add To Cart</button>

              <button className="border p-2">
                <IoMdHeartEmpty />
              </button>
            </div>

            {/* DELIVERY INFO */}
            <div className="border mt-8 p-4">
              <div className="flex gap-4 border-b pb-4">
                <TbTruckDelivery size={28} />
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-sm">
                    Enter your postal code for delivery availability
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <BsArrowRepeat size={28} />
                <div>
                  <h4 className="font-medium">Return Policy</h4>
                  <p className="text-sm">{product.returnPolicy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <div className="mt-24">
          <h3 className="text-xl font-semibold mb-8 text-red-500">
            Related Products
          </h3>

          <div className="grid grid-cols-4 gap-6">
            {related.map((item) => (
              <div key={item.id}>
                <div className="bg-gray-100 p-6 relative group">
                  <Link to={`/product/details/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      className="mx-auto"
                      alt=""
                    />
                  </Link>

                  <button
                    onClick={() =>
                      dispatch(
                        addtocart({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          thumbnail: item.thumbnail,
                          quantity: 1,
                        })
                      )
                    }
                    className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition"
                  >
                    Add To Cart
                  </button>
                </div>

                <h4 className="mt-3 font-medium">{item.title}</h4>
                <p className="text-red-500">
                  $
                  {(
                    item.price -
                    (item.price * item.discountPercentage) / 100
                  ).toFixed(2)}{" "}
                  <del className="text-gray-500">${item.price}</del>
                </p>

                <div className="flex gap-1 mt-2">
                  {renderStars(item.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details