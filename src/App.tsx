import "./App.css";
import { Drink } from "./Drink";
import { createContext, useState } from "react";
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

type TotalContextContextProps = {
  addTotalCount: (q: number) => void;
  addTotalPrice: (p: number) => void;
};

export const TotalContext = createContext({} as TotalContextContextProps);

const App = () => {
  const drinks = [
    { item: "coffee", name: "コーヒー", price: 480 },
    { item: "tea", name: "紅茶", price: 280 },
    { item: "milk", name: "ミルク", price: 180 },
    { item: "coke", name: "コーラ", price: 190 },
    { item: "beer", name: "ビール", price: 580 },
  ];

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const addTotalCount = (q: number) => setTotalCount(totalCount + q);
  const addTotalPrice = (p: number) => setTotalPrice(totalPrice + p);

  return (
    <TotalContext.Provider value={{ addTotalCount, addTotalPrice }}>
      <Container maxW="lg" py={5}>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            {drinks.map((drink, index) => (
              <Box key={drink.item} mb={drinks.length !== index + 1 ? 5 : ""}>
                <Drink drink={drink} />
              </Box>
            ))}
          </Box>
          <Box border="1px" borderColor="gray.200" borderRadius={5} p={3}>
            <Heading mb={2} as="h4" size="md">
              お会計
            </Heading>
            <hr />
            <Box mt={2}>
              <Box display="flex" justifyContent="space-between">
                <span>商品数：</span>
                <span id="count">{totalCount}個</span>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <span>合計金額：</span>
                <span id="price">{totalPrice.toLocaleString()}円</span>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </TotalContext.Provider>
  );
};

export default App;
