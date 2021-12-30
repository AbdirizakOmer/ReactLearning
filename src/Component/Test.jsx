const Test = (props) => {
  return (
    <div className="my-6 x-5 border-2 px-2 py-1 max-w-sm rounded-xl shadow-md  my-4 text-center flex flex-col   relative">
      <div>
        <img src={props.ImageUrl} alt="" className="h-auto w-60" />
        <h1 className="font-bold text-2xl text-black">{props.name}</h1>
        <h1 className="bg-red-500 px-2 py-1 rounded-xl text-white inline">
         quantity {props.quantity}
        </h1>
        <p> {props.discription} </p>
      </div>
      <div></div>
      <span className="bg-red-500 px-2 py-1 rounded-xl text-white absolute top-3 right-5">
       $ {props.price}
      </span>

      <div className=" w-full">
        <button className="bg-red-500 rounded-b-lg text-white px-2 py-3 w-full">
          Add Chart
        </button>
      </div>
    </div>
  );
};

export default Test;
