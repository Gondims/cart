import React from "react";
import { Card, CardContent, Stack, CardMedia, Button } from "@mui/material";
import { BsCartPlus } from "react-icons/bs";

export default function Product(props) {
  const { product } = props;
  const { addToCart } = props;

  return (
    <Card
      sx={{ maxWidth: 304 }}
    >
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
          <div className="row-direction">
          <div className="price">${product.price}.00</div>
          <div>
            <Button
              sx={{
                background: "#40B25C",
                minWidth: '232px',
              }}
              className="button-add-cart"
              variant="outlined"
              color={"success"}
              onClick={() => addToCart(product)}
              >
              <BsCartPlus size={25}/>
            </Button>
          </div>
              </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
