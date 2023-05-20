import classes from "./Card.module.css";
const Card = ({ toy }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_img}>
        <img src={toy.image} alt="img" />
      </div>
      <div className={classes.card_body}>
        <h2>{toy.name}</h2>
        <p>{toy.short_description}</p>
        <p>Price: ${toy.price}</p>
      </div>
      <div className={classes.card_footer}>
        <p>Rating: {toy.rating}</p>
        <p>Category: {toy.category}</p>
      </div>
    </div>
  );
};

export default Card;
