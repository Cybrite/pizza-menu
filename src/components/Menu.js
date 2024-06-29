import React from "react";
import { pizzaData } from "../index";

export function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu!</h2>

      {/* && operator conditonal */}
      {/* {numPizzas > 0 && (
              <ul className="pizzas">
                {pizzas.map((pizza) => (
                  <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
              </ul>
            )} */}

      {/* ternary operator conditonal */}
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>kdjch vjhdskvhiufhl vishlviviuohdfviuldshiulfdhviufnb </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
            {/* this is rendering list using map  */}
          </ul>

          {/* this block is a react element */}
        </React.Fragment> // or can use <></> for react fragment
      ) : (
        <p>We're still working on our menu, Plzz come back later</p>
      )}

      {/* <Pizza
              name="Pizza Spinaci"
              ingredients="Tomato, mozarella, spinach and ricotta cheese"
              photoName="pizza photo/spinaci.jpg"
              price={10}
            />
      
            <Pizza
              name="Pizza Funghi"
              ingredients="Tomato, mozarella, mushrooms, and onion"
              photoName="pizza photo/funghi.jpg"
              price={10}
            /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
              <span>SOLD OUT</span>
            ) : (
              <span>{pizzaObj.price}</span>
            )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
} //never nest the component decalration itself.
