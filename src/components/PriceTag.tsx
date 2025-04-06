import { FC } from 'react'

const PriceTag :FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-rose-50 rounded-2xl w-70 my-5">
          <h1 className="text-lime-800 bg-green-100 m-3 p-2 flex justify-center items-center rounded-2xl border-3 hover:bg-green-200 hover:shadow-cyan-600/50
          hover:shadow-md hover:animate-pulse">1 ₽</h1>
          <h1 className="text-neutral-500 bg-green-100 m-3 p-2 line-through flex justify-end rounded-2xl border-2 hover:bg-green-200 hover:shadow-cyan-600/50
          hover:shadow-md">2 ₽</h1>
          <div className="flex gap-3 justify-center items-center m-2">
            <div className="bg-red-300 rounded-full w-10 h-10 flex items-center justify-center"><span className="text-amber-700 text-2xl rotate-88">V</span></div>
            <div className="text-black text-3xl font-bold">Price</div>
          </div>                   
        </div> 
               
      </div>
    </div>
  )
}

export default PriceTag
