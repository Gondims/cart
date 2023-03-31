import React from "react";
import { Card, CardContent, Stack, CardMedia, Button } from "@mui/material";
import { BsCartPlus } from "react-icons/bs";

export default function Product(props) {
  const { product } = props;
  const { addToCart } = props;

  return (
    <Card>
      <CardContent>
        <CardMedia
          component="img"
          sx={{ mb: 4 }}
          image={product.images[0]}
          title={product.title}
          className="product-image"
        />

        <Stack direction="column">
          <span className="product-title">{product.title}</span>
          <span className="product-category">{product.category.name}</span>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="price">${product.price}.00</div>
          <div>
            <Button
              className="button-add-cart"
              variant="outlined"
              color={"success"}
              onClick={() => addToCart(product)}
            >
              <BsCartPlus size={25}/>
            </Button>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
