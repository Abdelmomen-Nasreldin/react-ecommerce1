import { useFetch } from "@/hooks/useFetch"
import { Product  as IProduct} from '@/types/product'
import Product from "../Product/Product";
import Loading from '@/components/Loading/Loading';

const ProductList = () => {
    const { data, isLoading, isError, error } = useFetch<IProduct[]>('api/v1/products')

    if (isLoading) {
        return <Loading />;
      }
    
      if (isError && error) {
        return <span>Error: {error.message}</span>;
      }
    
      if (!data || !data.length) {
        return <span>No products available</span>;
      }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex justify-evenly flex-wrap  m-4 gap-5">
                    {
                        data.map(product => {
                            return (
                                <Product key={product.id} product={product}/>
                            )
                        }
                        )}


                </div>
            </div>
        </section>
    )
}

export default ProductList