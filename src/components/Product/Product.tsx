import { Product as IProduct } from '@/types/product'
import './Product.scss'
import { useNavigate } from 'react-router-dom'
const Product = ({ product }: { product: IProduct }) => {
    const navigate = useNavigate()
    const addToCart = ()=>{}
    const goToDetails = (id : string)=>{
        navigate(`/productDetails/${id}`)
    }
    return (
        <>
            <div className={`product relative overflow-hidden bg-[#f7f7f761] flex-[0_1_300px]`}>
                <div className='cursor-pointer' onClick={()=>goToDetails(product.id)}>
                    <a className="block relative rounded " data-ur1313m3t="true">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.imageCover} />
                    </a>
                    <div className="p-4">
                        <h3 className="text-[#33b832] text-xs tracking-widest title-font mb-1">
                            {product.category.name}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                            {product.title}
                        </h2>
                        <div className="flex justify-between items-center">
                            <p className="mt-1">{product.price} EGP</p>
                            <div className="star flex items-center gap-1">
                                {/* <ng-icon name="bootstrapStarFill" className="text-[#ffc906]"></ng-icon> */}
                                <span className="text-[#a7adb1]">{product.ratingsAverage}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description w-full absolute bottom-0 left-0 translate-y-full transition-all duration-700">
                    <button className='bg-main text-white w-full p-2 rounded' onClick={addToCart}>Add To Cart</button>
                </div>
            </div>

        </>
    )
}

export default Product