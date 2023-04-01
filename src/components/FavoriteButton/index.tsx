import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavoriteButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <button
      className="favorite-button"
      onClick={toggleFavorite}
    >
      {isFavorited ? (
        <AiFillHeart size={30} color="red" className="button-favorite"/>
      ) : (
        <AiOutlineHeart
          size={30}
          className="favorite-button-add"
        />
      )}
    </button>
  );
};

export default FavoriteButton;