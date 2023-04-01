import React from "react";
import { Card, CardContent, Stack, CardMedia, Button } from "@mui/material";
import { BsCartPlus } from "react-icons/bs";
import FavoriteButton from "../FavoriteButton";

type Props = {
  product?: any;
  addToCart?: any;
};

export default function Product(props: Props) {
  const { product } = props;
  const { addToCart } = props;

  return (
    <Card
      sx={{
        maxWidth: 304,
      }}
    >
      <CardContent>
        <FavoriteButton />
        <CardMedia
          component="img"
          sx={{ mb: 4 }}
          image={product.images[0]}
          title={product.title}
          className="product-image"
        />

        <Stack direction="column">
          <span className="product-title">{product.title}</span>
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
            <div className="installmentPrice">
              R${product.installmentPrice},00
            </div>
            <div className="price">R${product.price},00</div>
            <div className="installment">
              em ate 
               <span className="installment-sapn">
                  {product.installments.max}x de {product.installments.value},00
              </span>
               sem juros
            </div>
            <div>
              <Button
                sx={{
                  background: "#40B25C",
                  width: "100%",
                  height: "40px",
                }}
                className="button-add-cart"
                variant="outlined"
                color={"success"}
                onClick={() => addToCart(product)}
              >
                {/* <BsCartPlus size={25}/> */}
                <p className="add-products">Adicionar</p>
              </Button>
            </div>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
