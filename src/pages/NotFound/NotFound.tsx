import notFound from "@/assets/images/error.svg"

const NotFound = () => {
  return (
    <div className="">
      <div className="container mx-auto text-center px-5 py-12">
        <img src={notFound} alt="Not Found" className="mx-auto"/>
      </div>
    </div>
  )
}

export default NotFound