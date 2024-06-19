/* eslint-disable react/prop-types */
import "./Card.css";

export const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          width={150}
          height={200}
          src={card?.img}
          alt="card-front"
          className="front"
        />
        <img
          onClick={handleClick}
          width={200}
          height={200}
          src="/images/cover.png"
          alt="card-back"
          className="back"
        />
      </div>
    </div>
  );
};
