import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://629f57ac8b939d3dc2959500.mockapi.io/items')
      .then(res => {
        return res.json();
      }).then(json => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClickClose={() => setCartOpened(false)} />}
      {/*=== {cartOpened ? <Drawer onClickClose={() => setCartOpened(false)}/> : null}*/}
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              image={obj.imageUrl}
              onClickFavorite={() => console.log('Add to favorite')}
              onClickPlus={() => console.log('Add to cart')}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default App;



