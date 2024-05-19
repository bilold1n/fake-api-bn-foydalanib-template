import React, { useEffect, useState } from "react";

function Home() {
  const [url, setUrl] = useState("https://api.escuelajs.co/api/v1/products");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 10));
        console.log(data);
      });
  }, []);
  return (
    <div className="container ulconta">
      <ul className="ul">
        {data.map(({ title, price, images, description }) => {
          return (
            <li key={title} className="li">
              <img src={images[0]} alt={images[0]} />
              <p>{title}</p>
              <p>Price:{price}$</p>
              <p>Description:{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
