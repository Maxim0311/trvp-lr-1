export default function Card({ img, title, price }) {
  return (
    <div>
      <img src={img} />
      <h5>{title}</h5>
      <h6>{price}р.</h6>
    </div>
  );
}
