import React, { useState } from "react";
import { Layout } from "./components/container";
import { Card } from "./components/card";
import { useGetCatsQuery } from "./app/services/cats";
import { Grid } from "./components/grid";
import Loading from "./components/loading";
import Error from "./components/error";

const App = () => {
  const [visibleCount, setVisibleCount] = useState(10); // Количество видимых котов
  let { data: cats, isLoading, isError } = useGetCatsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  console.log(cats);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Увеличиваем количество видимых котов на десять
  };

  return (
    <div className="app">
      <Layout>
        <Grid gap="48px" min="230px" max="1fr">
          {!cats || cats.length === 0 ? (
            <div>Ничего не найдено!</div>
          ) : (
            cats
              .slice(0, visibleCount)
              .map((cat) => (
                <Card cat={cat} key={cat.id} onUpdateLikes={() => {}} />
              ))
          )}
        </Grid>
        <div className="buttonContainer">
          {cats && cats.length > visibleCount && (
            <button onClick={handleShowMore}>Показать еще</button>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default App;
