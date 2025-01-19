import { useEffect, useState } from "react";
import { Layout } from "../components/container";
import { Grid } from "../components/grid";
import { Card } from "../components/card";

const Loading = () => {
  const [likedCats, setLikedCats] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const loadLikedCatsFromLocalStorage = () => {
    const catsData = localStorage.getItem("likedCats");
    if (catsData) {
      setLikedCats(JSON.parse(catsData));
    }
  };

  useEffect(() => {
    loadLikedCatsFromLocalStorage();
  }, []);

  // Функция для обновления liked Cats
  const updateLikedCatList = () => {
    loadLikedCatsFromLocalStorage(); // Перезагружаем список
  };

   return (
     <div className="app">
       <Layout>
         <Grid gap="48px" min="230px" max="1fr">
           {likedCats.slice(0, visibleCount).map((cat: any) => (
             <Card key={cat.id} cat={cat} onUpdateLikes={updateLikedCatList} />
           ))}
         </Grid>

         {likedCats.length > visibleCount && (
           <div className="buttonContainer">
             <button onClick={() => setVisibleCount( (prevCount: any) => prevCount + 10)}>Показать еще</button>
           </div>
        )}
      </Layout>
    </div >
   );
};

export default Loading;