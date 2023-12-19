import "../Pages/Home.css";
import Card from "./Components/Card";
function Home() {
  return (
    <body className="body">
      <h1 className="article">Товары</h1>
      <div className="container">
        {items.map((item) => (
          <Card img={item.img} title={item.title} price={item.price} />
        ))}
      </div>
    </body>
  );
}

const items = [
  {
    img: "https://spb.sotovik.shop/upload/resize_cache/iblock/6a7/400_400_140cd750bba9870f18aada2478b24840a/roa29ocrgtzrqs4629e9wu1nlmz0txwz.jpg",
    title: "IPhone 14 Pro Max",
    price: 129999,
  },
  {
    img: "https://spb.sotovik.shop/upload/resize_cache/iblock/d20/400_400_140cd750bba9870f18aada2478b24840a/0g36o4cjy0okfq498eclog01sablxtfy.jpg",
    title: "IPhone 12 Pro",
    price: 45000,
  },
  {
    img: "https://spb.sotovik.shop/upload/resize_cache/iblock/1e4/400_400_140cd750bba9870f18aada2478b24840a/j72qf1iq4y62n0x2gy1a8b85w343ph0u.jpeg",
    title: "IPhone 13 Pro",
    price: 89000,
  },
];

export default Home;
