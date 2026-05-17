import React, { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const foodApi =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

  const logoImg =
    "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png";

  const cartIconImg =
    "https://cdn-icons-png.flaticon.com/512/833/833314.png";

  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  // FETCH DATA
  useEffect(() => {
    fetch(foodApi)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []));
  }, []);

  // ADD ITEM
  const addItem = (meal) => {
    setCart((prev) => ({
      ...prev,
      [meal.idMeal]: {
        ...meal,
        qty: prev[meal.idMeal] ? prev[meal.idMeal].qty + 1 : 1,
      },
    }));
  };

  // INCREASE
  const inc = (meal) => addItem(meal);

  // DECREASE
  const dec = (id) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[id].qty === 1) {
        delete updated[id];
      } else {
        updated[id].qty -= 1;
      }

      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce(
    (a, b) => a + b.qty,
    0
  );

  return (
    <div className="app">
      {/* HEADER */}
      <div className="header">
        <img src={logoImg} className="logo" />

        <h2>Food App</h2>

        <div className="cart" onClick={() => setShowCart(!showCart)}>
          <img src={cartIconImg} />
          <span>{totalItems}</span>
        </div>
      </div>

      {/* MAIN */}
      {!showCart ? (
        <div className="grid">
          {meals.map((meal) => {
            const qty = cart[meal.idMeal]?.qty || 0;

            return (
              <div className="card" key={meal.idMeal}>
                <img src={meal.strMealThumb} />
                <h3>{meal.strMeal}</h3>
                <p className="veg">Veg</p>

                {qty === 0 ? (
                  <button onClick={() => addItem(meal)}>ADD</button>
                ) : (
                  <div className="qtyBox">
                    <button onClick={() => dec(meal.idMeal)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => inc(meal)}>+</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        // CART PAGE
        <div className="cartPage">
          <h2>Cart Items</h2>

          {Object.values(cart).length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            Object.values(cart).map((item) => (
              <div className="cartItem" key={item.idMeal}>
                <p>{item.strMeal}</p>
                <p>Qty: {item.qty}</p>
              </div>
            ))
          )}

          <h3>Total Items: {totalItems}</h3>

          <button onClick={() => setShowCart(false)}>
            Back
          </button>
        </div>
      )}

      {/* FOOTER */}
      <div className="footer">Veg Food App 🍽️</div>
    </div>
  );
}

export default App
