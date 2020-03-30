import React from "react";
import { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = fetch("http://dummy.restapiexample.com/api/v1/employees"); // here i use the same url cox the other won not seems to working; what we need to do is add ${match.id} at the end of the url 
    const item = await (await data).json();
    console.log(item);
  };

  return (
    <div>
      <h4>this is Shop page Lainok Abilkconch</h4>
      <div>
        <h1>Lainok Blockchain you are awsome</h1>
      </div>
    </div>
  );
}

export default Item;
