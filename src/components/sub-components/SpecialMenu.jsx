import React from "react";
import { images, data } from "../../constants";
import Subheading from "./Subheading";
import ItemList from "./ItemList";
import Button from "./Button";

const SpecialMenu = () => {
  return (
    <section className="app_specialmenu">
      <div className="specialmenu-container">
        <div className="specialmenu-title">
          <Subheading>Menu that fits you palatte</Subheading>
          <h1 className="cormorant">Today's Special</h1>
        </div>

        <div className="specialmenu-menu">
          <div className="wine-n-beer">
            <p className="wine_header">Wine & Beer</p>
            <div className="menu_items">
              {data.wines.map((wine, i) => (
                <ItemList
                  title={wine.title}
                  price={wine.price}
                  key={wine.title + i}
                  tags={wine.tags}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="specialmenu-img">
            <img src={images.menu} alt="Menu Img" loading="lazy" />
          </div>

          <div className="cocktails">
            <p className="cocktails_header">Cocktails</p>
            <div className="menu_items">
              {data.cocktails.map((cocktail, i) => (
                <ItemList
                  title={cocktail.title}
                  price={cocktail.price}
                  key={cocktail.title + i}
                  tags={cocktail.tags}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "15px" }}>
          <Button>View More</Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
