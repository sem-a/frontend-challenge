import React, { useState } from "react";
import styles from "./index.module.css";
import { Cat } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";

type Props = {
  cat: Cat;
  onUpdateLikes: () => void;
};

export const Card: React.FC<Props> = ({ cat, onUpdateLikes }) => {
  const [liked, setLiked] = useState(() => {
    const likedCats = JSON.parse(localStorage.getItem("likedCats") || "[]");
    return likedCats.some((savedCat: Cat) => savedCat.id === cat.id);
  });

  // Новое состояние для отслеживания наведения
  const [hovered, setHovered] = useState(false);

  const handleLikeClick = () => {
    setLiked((prev: any) => !prev);

    if (liked) {
      removeCatFromLocalStorage(cat.id);
      onUpdateLikes();
    } else {
      addCatToLocalStorage(cat);
      onUpdateLikes();
    }
  };

  const addCatToLocalStorage = (cat: Cat) => {
    let likedCats = JSON.parse(localStorage.getItem("likedCats") || "[]");

    if (!likedCats.some((savedCat: Cat) => savedCat.id === cat.id)) {
      likedCats.push(cat);
      localStorage.setItem("likedCats", JSON.stringify(likedCats));
    }
  };

  const removeCatFromLocalStorage = (id: string) => {
    let likedCats = JSON.parse(localStorage.getItem("likedCats") || "[]");

    // Удаляем кота из списка понравившихся
    likedCats = likedCats.filter((sаvеd: Cat) => sаvеd.id !== id);

    localStorage.setItem("likedCats", JSON.stringify(likedCats));
  };

  return (
    <div className={styles.card}>
      <img src={cat.url} />
      <div className={styles.linear}></div>
      <div
        className={`${styles.like} ${liked ? styles.liked : ""}`}
        onClick={handleLikeClick}
        onMouseEnter={() => setHovered(true)} // Обработчик наводки мыши
        onMouseLeave={() => setHovered(false)} // Обработчик ухода мыши
      >
        {hovered || liked ? (
          <FontAwesomeIcon
            size="2x"
            icon={solid}
            style={{ color: "#F24E1E" }}
          />
        ) : (
          <FontAwesomeIcon
            size="2x"
            icon={regular}
            style={{ color: "#F24E1E" }}
          />
        )}
      </div>
    </div>
  );
};
