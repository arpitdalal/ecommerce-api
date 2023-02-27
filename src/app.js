import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

const PRODUCTS = [
  {
    id: 1,
    name: "Women's running track",
    price: "26.80",
    description:
      "Women's Lightweight Full Zip Running Track Jacket Workout Slim Fit Yoga Sportwear with Thumb Holes",
    brand: "Lviefent",
    image: "https://m.media-amazon.com/images/I/517A3-FwBrL._AC_UX679_.jpg",
    link: "https://a.co/d/gHsHryf",
  },
  {
    id: 2,
    name: "Hunting Clothes for Men",
    price: "125.99",
    description:
      "Hunting Clothes for Men, Safety Strap Compatible Hunting Jacket and Pants",
    brand: "TIDEWE",
    image: "https://m.media-amazon.com/images/I/81hfw7Z13XL._AC_SX425_.jpg",
    link: "https://a.co/d/1gdJsXE",
  },
  {
    id: 3,
    name: "Men's Shirt",
    price: "39.99",
    description:
      "Men's Casual Long Sleeve Henley Shirts Cotton Linen Premium Beach T-Shirt",
    brand: "COOFANDY",
    image: "https://m.media-amazon.com/images/I/615Cby-DciL._AC_UX569_.jpg",
    link: "https://a.co/d/8571S5x",
  },
  {
    id: 4,
    name: "Women's t-shirt",
    price: "25.60",
    description:
      "Amazon Essentials Women's 2-Pack Classic-Fit Short-Sleeve V-Neck T-Shirt",
    brand: "Amazon",
    image: "https://m.media-amazon.com/images/I/61VXOrqsTyS._AC_UX679_.jpg",
    link: "https://a.co/d/gxbS7uH",
  },
  {
    id: 5,
    name: "Women's Cute Shirt",
    price: "18.99",
    description:
      "Nope Not Today Shirt Women| Women's Cute Shirt | Teen Girl Graphic Tees | Graphic Tees Unisex",
    brand: "ALAPUSA",
    image: "https://m.media-amazon.com/images/I/51bvXDR6kvL._AC_UX679_.jpg",
    link: "https://a.co/d/5wE97SX",
  },
  {
    id: 6,
    name: "Joggers for Women",
    price: "33.99",
    description:
      "2-Pack Joggers for Women with Side Pockets, Rib Cuff Bottoms, Soft Fleece Sweatpants for Women",
    brand: "TEXFIT",
    image: "https://m.media-amazon.com/images/I/71AkhOEIW0L._AC_UX679_.jpg",
    link: "https://a.co/d/3ZGXkEa",
  },
  {
    id: 7,
    name: "Men's Jogging Pants",
    price: "27.61",
    description:
      "2-Pack Men's Jogging Pants with Side Pockets, Elastic Bottom, Soft Fleece Sweat Pants",
    brand: "TEXFIT",
    image: "https://m.media-amazon.com/images/I/91hF33zKhbL._AC_UX679_.jpg",
    link: "https://a.co/d/eSxm7hl",
  },
  {
    id: 8,
    name: "Mens Pants",
    price: "91.80",
    description: "Columbia Mens Silver Ridge Convertible Pant",
    brand: "Columbia",
    image: "https://m.media-amazon.com/images/I/81VWmSoPsxL._AC_UX569_.jpg",
    link: "https://a.co/d/dsoWTAs",
  },
  {
    id: 9,
    name: "Men's Dry Fit T Shirt",
    price: "42.99",
    description:
      "3-4 Pack Men's Dry Fit T Shirt Moisture Wicking Athletic Tees Exercise Short Sleeves Gym Workout Top",
    brand: "Ullnoy",
    image: "https://m.media-amazon.com/images/I/81GVWt6XTnL._AC_UY741_.jpg",
    link: "https://a.co/d/fXlnZDi",
  },
  {
    id: 10,
    name: "Women's Dress",
    price: "31.78",
    description:
      "Women's Vintage Sleeveless V-Neck Flared A-Line Party Swing Dress",
    brand: "GRACE KARIN",
    image: "https://m.media-amazon.com/images/I/61iR7ZIY0hL._AC_UX569_.jpg",
    link: "https://a.co/d/bglhDyU",
  },
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Men's Shirt",
    price: "39.99",
    description:
      "Men's Casual Long Sleeve Henley Shirts Cotton Linen Premium Beach T-Shirt",
    brand: "COOFANDY",
    image: "https://m.media-amazon.com/images/I/615Cby-DciL._AC_UX569_.jpg",
    link: "https://a.co/d/8571S5x",
  },
  {
    id: 2,
    name: "Women's t-shirt",
    price: "25.60",
    description:
      "Amazon Essentials Women's 2-Pack Classic-Fit Short-Sleeve V-Neck T-Shirt",
    brand: "Amazon",
    image: "https://m.media-amazon.com/images/I/61VXOrqsTyS._AC_UX679_.jpg",
    link: "https://a.co/d/gxbS7uH",
  },
  {
    id: 3,
    name: "Women's Cute Shirt",
    price: "18.99",
    description:
      "Nope Not Today Shirt Women| Women's Cute Shirt | Teen Girl Graphic Tees | Graphic Tees Unisex",
    brand: "ALAPUSA",
    image: "https://m.media-amazon.com/images/I/51bvXDR6kvL._AC_UX679_.jpg",
    link: "https://a.co/d/5wE97SX",
  },
  {
    id: 4,
    name: "Joggers for Women",
    price: "33.99",
    description:
      "2-Pack Joggers for Women with Side Pockets, Rib Cuff Bottoms, Soft Fleece Sweatpants for Women",
    brand: "TEXFIT",
    image: "https://m.media-amazon.com/images/I/71AkhOEIW0L._AC_UX679_.jpg",
    link: "https://a.co/d/3ZGXkEa",
  },
  {
    id: 5,
    name: "Men's Jogging Pants",
    price: "27.61",
    description:
      "2-Pack Men's Jogging Pants with Side Pockets, Elastic Bottom, Soft Fleece Sweat Pants",
    brand: "TEXFIT",
    image: "https://m.media-amazon.com/images/I/91hF33zKhbL._AC_UX679_.jpg",
    link: "https://a.co/d/eSxm7hl",
  },
  {
    id: 6,
    name: "Mens Pants",
    price: "91.80",
    description: "Columbia Mens Silver Ridge Convertible Pant",
    brand: "Columbia",
    image: "https://m.media-amazon.com/images/I/81VWmSoPsxL._AC_UX569_.jpg",
    link: "https://a.co/d/dsoWTAs",
  },
  {
    id: 7,
    name: "Men's Dry Fit T Shirt",
    price: "42.99",
    description:
      "3-4 Pack Men's Dry Fit T Shirt Moisture Wicking Athletic Tees Exercise Short Sleeves Gym Workout Top",
    brand: "Ullnoy",
    image: "https://m.media-amazon.com/images/I/81GVWt6XTnL._AC_UY741_.jpg",
    link: "https://a.co/d/fXlnZDi",
  },
  {
    id: 8,
    name: "Women's Dress",
    price: "31.78",
    description:
      "Women's Vintage Sleeveless V-Neck Flared A-Line Party Swing Dress",
    brand: "GRACE KARIN",
    image: "https://m.media-amazon.com/images/I/61iR7ZIY0hL._AC_UX569_.jpg",
    link: "https://a.co/d/bglhDyU",
  },
];

const BEST_SELLERS = [
  {
    id: 1,
    name: "Men's Jogging Pants",
    price: "27.61",
    description:
      "2-Pack Men's Jogging Pants with Side Pockets, Elastic Bottom, Soft Fleece Sweat Pants",
    brand: "TEXFIT",
    image: "https://m.media-amazon.com/images/I/91hF33zKhbL._AC_UX679_.jpg",
    link: "https://a.co/d/eSxm7hl",
  },
  {
    id: 2,
    name: "Mens Pants",
    price: "91.80",
    description: "Columbia Mens Silver Ridge Convertible Pant",
    brand: "Columbia",
    image: "https://m.media-amazon.com/images/I/81VWmSoPsxL._AC_UX569_.jpg",
    link: "https://a.co/d/dsoWTAs",
  },
  {
    id: 3,
    name: "Men's Dry Fit T Shirt",
    price: "42.99",
    description:
      "3-4 Pack Men's Dry Fit T Shirt Moisture Wicking Athletic Tees Exercise Short Sleeves Gym Workout Top",
    brand: "Ullnoy",
    image: "https://m.media-amazon.com/images/I/81GVWt6XTnL._AC_UY741_.jpg",
    link: "https://a.co/d/fXlnZDi",
  },
  {
    id: 4,
    name: "Women's Dress",
    price: "31.78",
    description:
      "Women's Vintage Sleeveless V-Neck Flared A-Line Party Swing Dress",
    brand: "GRACE KARIN",
    image: "https://m.media-amazon.com/images/I/61iR7ZIY0hL._AC_UX569_.jpg",
    link: "https://a.co/d/bglhDyU",
  },
];

app.get("/products", (req, res) => {
  res.status(200).send({
    data: {
      products: PRODUCTS,
    },
    error: "",
  });
});

app.get("/featured-products", (req, res) => {
  res.status(200).send({
    data: {
      products: FEATURED_PRODUCTS,
    },
    error: "",
  });
});

app.get("/best-seller", (req, res) => {
  res.status(200).send({
    data: {
      products: BEST_SELLERS,
    },
    error: "",
  });
});

app.get("/error", (req, res) => {
  res.status(500).send({
    data: {
      products: null,
    },
    error: "Something went wrong.",
  });
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "dev") {
    console.log(`API listening on port ${PORT}`);
  }
});
