// MainContent.jsx
import React from "react";
import CardImages from "../data/cards_img";
import './maincontent.css';
import './m-responsive.css';

export function MainContent() {
  return (
    <>
      <main>
        <div className="card">
          <img src="src/assets/logo-fs.png" alt="" />
          <div className="welcome">
            <h1>WITAJ!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        
          <div className="button-box">
            <button type="button" className="btn btn-light btn-lg">
              Zacznij pisać
            </button>
          </div>
        </div>
        <img src="src/assets/womans.jpg" className="womanimg" alt="" />
      </main>
      <section id="separator"></section>

      <section id="ococho">

        <section className="gkfcolumn">
          {CardImages.map((image, index) => (

            <div
              key={index}
              className="gkfcards"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="cards-title">
                <h3>{image.name}</h3>
              </div>
              <div className="desc">
                <p>{image.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section id="separator"></section>

      <section id="onas">
      <h1>O nas</h1>
        <p> (pracuje solo)</p>
        <div className="prawda"></div>
      </section>
    </>
  );
}

export default MainContent;
