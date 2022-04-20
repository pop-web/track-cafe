import { FC, useContext, useState } from "react";
import { TotalContext } from "./App";
import { Box, Button } from "@chakra-ui/react";

export const Drink: FC<{
  drink: { item: string; name: string; price: number };
}> = ({ drink }) => {
  const { addTotalCount, addTotalPrice } = useContext(TotalContext);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const counter = () => {
    setQuantity(quantity + 1);
    setPrice(drink.price * (quantity + 1));
    addTotalCount(1);
    addTotalPrice(drink.price);
  };

  return (
    <>
      <Button
        id={drink.item}
        onClick={counter}
        variant="outline"
        width="200px"
        style={{ position: "relative" }}
        display="flex"
        justifyContent="space-between"
      >
        <Box>{drink.name}</Box>
        <Box>{price.toLocaleString()}円</Box>
        <Box
          id={`${drink.name}-count`}
          style={{ position: "absolute", top: -8, right: -8 }}
          bg={"#e62727"}
          borderRadius="full"
          w={6}
          h={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          {quantity}
        </Box>
      </Button>
    </>
  );
};
