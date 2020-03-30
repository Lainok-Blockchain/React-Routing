import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [iteme, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    const items = await data.json();
    console.log(items.data);
    // const item1 = items.data;
    // const item2 =
    // console.log(items.data.employee_name);
    setItem(items.data);
  };

  return (
    <div>
      <h4>this is Shop page Lainok Abilkconch</h4>
      <div>
        {iteme.map(item => (
          <h1 key={item.employee_name}>
            <Link to={`./shop/${item.id}`}>{item.employee_name}</Link>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Shop;
