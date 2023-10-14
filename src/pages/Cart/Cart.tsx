import Loading from '@/components/Loading/Loading'
import { useFetch } from '@/hooks/useFetch'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '@/contexts/AuthContext/auth';
const baseURL = "https://ecommerce.routemisr.com";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [products, setProducts] = useState([])
  const { authToken } = useContext(AuthContext)
  const { data, isLoading, isError, error } = useFetch<any>('api/v1/cart')
  console.log(products);

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
      setTotalPrice(data.totalCartPrice)
    }
  }, [data])

  if (isLoading) {
    return <Loading />;
  }

  if (isError && error) {
    return <span>Error: {error.message}</span>;
  }

  if (!products || !products.length) {
    return <span>No products available</span>;
  }

  const onRemove = async (productId: string) => {
    try {
      const res = await axios.delete(`${baseURL}/api/v1/cart/${productId}`, { headers: { token: authToken } })
      console.log(res);
      
      setProducts(res.data.data.products)
      setTotalPrice(res.data.data.totalCartPrice)
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <div className='cart'>
      <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
          <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
            <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-auto overflow-x-hidden lg:h-screen h-auto" id="scroll">
              <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <Link className="text-sm pl-2 leading-none" to={'../'}>Back</Link>
              </div>
              {products.map((product: any) => {
                return (
                  <>
                    <div key={product.product.id} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                      <div className="md:w-4/12 2xl:w-1/4 w-full">
                        <img src={product.product.imageCover} alt="Black Leather Bag" className=" w-full h-full object-center object-cover" />
                      </div>
                      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                        <div className="flex items-center justify-between w-full pt-1">
                          <p className="text-base font-black leading-none text-gray-800">{product.product.title}</p>

                          <p>count : {product.count}</p>
                        </div>

                        <p className="w-96 text-xs leading-3 text-gray-600">{product.product.category.name}</p>
                        <div className="flex items-center justify-between pt-5">
                          <div className="flex itemms-center">
                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => { onRemove(product.product.id) }}>Remove</p>
                          </div>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">${product.price}</p>
                      </div>
                    </div>
                  </>);
              })}
            </div>
            <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 h-full">
              <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800">Summary</p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">Subtotal</p>
                    <p className="text-base leading-none text-gray-800">${totalPrice}</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Shipping</p>
                    <p className="text-base leading-none text-gray-800">${30}</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">${35}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">${totalPrice + 30 + 35}  </p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart