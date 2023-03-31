import React, { memo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import Card from "@mui/material/Card";


function Cart(props) {
  const { cartItems, totalPrice, onAdd, onRemove } = props;

  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#222224",
          color: "#ffffff",
          m: 2,
        }}
      >
        <h2 className="cart-title">Cart Items</h2>
        {cartItems.map((item) => (
          <Box
            key={item.id}
            className="box-cart-product"
          >
            <div className="cart-product-title">{item.title}</div>
            <div>
              <Button
                sx={{ width: "8rem", mr: 2 }}
                variant="contained"
                color="error"
                onClick={() => onRemove(item)}
              >
                <BsCartDash size={20} />
              </Button>
              <Button
                sx={{ width: "8rem" }}
                variant="contained"
                color="success"
                onClick={() => onAdd(item)}
              >
                <BsCartPlus size={20} />
              </Button>
            </div>

            <Box sx={{ textAlign: "right", fontSize:"1.4rem" }} mr={4}>
              {item.quantity} x ${item.price}
            </Box>
          </Box>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <Box className="box-cart-product">
              <div>
                <span className="cart-product-title">Total Price</span>
              </div>
              <div>
                <span className="price">${totalPrice}</span>
              </div>
            </Box>
          </>
        )}
      </Card>
    </div>
  );
}

export default memo(Cart);
