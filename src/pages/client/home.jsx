import { Box, Flex, Chip, Group } from "@mantine/core";
import { Search } from "../../modules/base/components/search";
import { BookCard } from "../../modules/base/components/card";
import { useState } from "react";

export function HomePage() {
  const [value, setValue] = useState("all-book");

  return (
    <Box
      component="section"
      style={{
        position: "relative",
      }}
    >
      <Search
        style={{
          top: -20,
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          width: 380,
        }}
      />

      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{
          paddingTop: "60px",
        }}
      >
        <Chip.Group multiple={false} value={value} onChange={setValue}>
          <Chip value={"all-book"} variant="outline">
            All Books
          </Chip>
          <Chip value={"romance"} variant="outline">
            Romance
          </Chip>
          <Chip value={"Horror"} variant="outline">
            Horror
          </Chip>
          <Chip value={"commedy"} variant="outline">
            Commedy
          </Chip>
          <Chip value={"biography"} variant="outline">
            Biography
          </Chip>
          <Chip value={"technical"} variant="outline">
            Technical
          </Chip>
        </Chip.Group>
      </Flex>

      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{
          paddingTop: 28,
        }}
      >
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </Flex>
    </Box>
  );
}
