import BookCard from "../components/BookCard";
import Grid from "@mui/material/Grid";

const allBooksList = [
  {
    name: "HuckleBerry Finn",
    imgUrl:
      "https://ccsbooks.co.uk/wp-content/uploads/2019/10/9781910619872-scaled.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit possimus quaerat fuga qui ad! Esse sequi accusamus quam laborum reiciendis. Deserunt, maxime aliquid? Explicabo aperiam nostrum rerum maiores nihil.",
  },
  {
    name: "HuckleBerry Finn",
    imgUrl:
      "https://ccsbooks.co.uk/wp-content/uploads/2019/10/9781910619872-scaled.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit possimus quaerat fuga qui ad! Esse sequi accusamus quam laborum reiciendis. Deserunt, maxime aliquid? Explicabo aperiam nostrum rerum maiores nihil.",
  },
  {
    name: "HuckleBerry Finn",
    imgUrl:
      "https://ccsbooks.co.uk/wp-content/uploads/2019/10/9781910619872-scaled.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit possimus quaerat fuga qui ad! Esse sequi accusamus quam laborum reiciendis. Deserunt, maxime aliquid? Explicabo aperiam nostrum rerum maiores nihil.",
  },
  {
    name: "HuckleBerry Finn",
    imgUrl:
      "https://ccsbooks.co.uk/wp-content/uploads/2019/10/9781910619872-scaled.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit possimus quaerat fuga qui ad! Esse sequi accusamus quam laborum reiciendis. Deserunt, maxime aliquid? Explicabo aperiam nostrum rerum maiores nihil.",
  },
  {
    name: "HuckleBerry Finn",
    imgUrl:
      "https://ccsbooks.co.uk/wp-content/uploads/2019/10/9781910619872-scaled.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit possimus quaerat fuga qui ad! Esse sequi accusamus quam laborum reiciendis. Deserunt, maxime aliquid? Explicabo aperiam nostrum rerum maiores nihil.",
  },
];

const BooksList = () => {
  return (
    <div>
      <h2>Popular Books</h2>

      <Grid container spacing={2}>
        {allBooksList.map((book, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <BookCard key={index} book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BooksList;
