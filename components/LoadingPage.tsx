import { Skeleton } from "@/components/ui/skeleton"


const LoadingPage = () => {
  return (



    <div className="product-detail-container">
  <div className='Product-first-part-detail-container'>
    <div className="product-image-newest">
      <div className="image-container">
        <Skeleton className="h-[300px] w-[250px] bg-black" />
      </div>
      <div className="small-images-container">
          <Skeleton className='small-image'/>
        </div>
        {/* {name} */}
      </div>
     </div>
  </div>



    
        // <div>
        //   <div className="products-container">
        //     <div><Skeleton className="h-[360px] w-[270px] rounded-xl bg-black" /><Skeleton className="h-4 w-[250px] bg-black" /><Skeleton className="h-4 w-[200px] bg-black" /></div>
        //     <div><Skeleton className="h-[360px] w-[270px] rounded-xl bg-black" /><Skeleton className="h-4 w-[250px] bg-black" /><Skeleton className="h-4 w-[200px] bg-black" /></div>
        //     <div><Skeleton className="h-[360px] w-[270px] rounded-xl bg-black" /><Skeleton className="h-4 w-[250px] bg-black" /><Skeleton className="h-4 w-[200px] bg-black" /></div>
        //   </div>
        // </div>
    
    // <div className="flex flex-col space-y-3">
    //   <Skeleton className="h-[125px] w-[250px] rounded-xl bg-black" />
    //   <div className="space-y-2">
    //     <Skeleton className="h-4 w-[250px] bg-black" />
    //     <Skeleton className="h-4 w-[200px] bg-black" />
    //   </div>
    // </div>
  )
}

export default LoadingPage
