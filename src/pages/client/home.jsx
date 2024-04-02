import { Box, Flex, Chip, Text, Loader } from "@mantine/core";
import { Search } from "../../modules/base/components/search";
import { BookCard } from "../../modules/base/components/card";
import {
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { useState } from "react";
import fetchAPI from "../../helpers/fetchAPI";

export async function loader({ request }) {
  const query = new URL(request.url).searchParams.get("query");

  let payloadBook;

  if (!query) {
    payloadBook = await fetchAPI("https://real-bookstore-api.vercel.app/books");
  } else {
    payloadBook = await fetchAPI(
      `https://real-bookstore-api.vercel.app/books/search?q=${query}`
    );
  }
  const books = payloadBook.data;

  const payloadGenre = await fetchAPI(
    "https://real-bookstore-api.vercel.app/genres"
  );
  const genres = payloadGenre.data;

  return {
    books,
    genres,
  };
}

export function HomePage() {
  const { books, genres } = useLoaderData();
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
    genre: "all-book",
  });
  const query = searchParams.get("query");
  const genre = searchParams.get("genre");

  const [selectedGenre, setSelectedGenre] = useState(genre);

  const handleSearchChange = (event) => {
    setSearchParams(
      (prev) => {
        const newValue = event.target.value;
        prev.set("query", newValue);
        return prev;
      },
      { replace: true }
    );
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setSearchParams({ query, genre }, { replace: true });
  };

  const filteredBooks = books.filter((book) => {
    return (
      selectedGenre === "all-book" ||
      book.genre.genre.toLowerCase() === selectedGenre.toLowerCase()
    );
  });

  return (
    <Box
      component="section"
      style={{
        position: "relative",
      }}
    >
      <Search
        onChange={handleSearchChange}
        value={query}
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
        <Chip.Group
          multiple={false}
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <Chip value={"all-book"} variant="outline">
            All Books
          </Chip>
          {genres &&
            genres.map((genre) => (
              <Chip
                key={genre.id}
                value={genre.genre.toLowerCase()}
                variant="outline"
              >
                {genre.genre}
              </Chip>
            ))}
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
        {navigation.state === "loading" ? (
          <Loader size={"md"} />
        ) : filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              summary={book.summary}
              price={book.price}
              imageSrc={book.img}
              link={`/book/${book.id}`}
            />
          ))
        ) : (
          <Text>Buku tidak ditemukan</Text>
        )}
      </Flex>
    </Box>
  );
}
