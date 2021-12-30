import Test from "./Component/Test";

function App() {
  const store = [
    {
      name: "Apple",
      image: "/Apples.jpeg",
      description: "Organic Granny Apples 3 Lb Pouch",

      quantity: 15,
      price: 4.96,
    },
    {
      name: "Bananas",
      image: "/images/Bananas.jpeg",
      description: "Organic Bananas, Bunch",
      quantity: 17,
      price: 1.63,
    },
    {
      name: "Grapes",
      image: "/images/Grapes.jpeg",
      quantity: 51,
      price: 5.98,
    },
    {
      name: "Strawberries",
      image: "/images/Strawberries.jpeg",
      description: "Fresh USDA Organic Strawberries, 16 Oz",
      quantity: 105,
      price: 4.98,
    },
    {
      name: "Carrots",
      image: "./Carrots.jpeg",
      description: "Organic Whole Carrots, 2 Lb Bag",
      quantity: 92,
      price: 2.06,
    },
    {
      name: "Tomatoes",
      image: "./tomatoes.jpeg",
      description: "Organic Grape Tomatoes, 10 oz",
      quantity: 26,
      price: 2.92,
    },
    {
      name: "Avocados",
      image: "/images/avocados.jpeg",
      description: "Organic Medium Hass Avocados, 3-5 Count Bag",
      quantity: 66,
      price: 4.96,
    },
  ];

  const name = "Strawberry";
  const discription = "Fresh Strawberry Fruit";
  const Quantity = 25;
  const price = 39;
  const ImageUrl = "/strawberries.jpeg";
  return (
    <>
      <Test
        nasme={store[5].name}
        discription={store[5].description}
        quantity={store[5].quantity}
        price={store[5].price}
        ImageUrl={store[5].image}
      />
       <Test
        nasme={store[4].name}
        discription={store[4].description}
        quantity={store[4].quantity}
        price={store[4].price}
        ImageUrl={store[4].image}
      />
    </>
  );
}

export default App;
