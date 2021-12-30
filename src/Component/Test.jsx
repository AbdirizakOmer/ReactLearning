const Test=  () => {
    return(
        <div className="my-5 mx-auto xy-5 border-2 px-2 py-1 max-w-sm rounded-xl shadow-md  my-4 text-center flex flex-col items-center  relative">
             <div>
                 <img src="strawberries.jpeg" alt="" className="h-auto w-60"/>
            <p>Frozen Fresh Strawberry Fruit </p>
            </div>
            <span className="bg-red-500 px-2 py-1 rounded-xl text-white absolute top-3 right-5">$39</span>

            <div className=" w-full">
            <button className="bg-red-500 rounded-b-lg text-white px-2 py-3 w-full">Add Chart</button>
            </div>


        </div>
    )
}

export default Test;