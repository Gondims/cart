import React from "react";
import Product from "../Products";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ListProducts(props) {
  const { products, addToCart } = props;

  return (
    <div>
      <Card
        sx={{ backgroundColor: "#222224", color: "#ffffff", m: 2 }}
      >
        <CardContent>
          <h2>Products</h2>
          <div className="row">
            {products?.map((item) => {
              return (
                <Product key={item.id} product={item} addToCart={addToCart} />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
