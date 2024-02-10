// MainContent.jsx
import React from "react";
import CardImages from "../data/Cards_img";
import './maincontent.css';
import './m-responsive.css';

export function MainContent() {
  return (
    <div id="landingpage">
      <main>
        <div className="card">
          <img src="https://raw.githubusercontent.com/knaappz/fajne_forum/main/assets/logo-fs.png" alt="" />
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
        <img src="https://img.freepik.com/darmowe-wektory/dwoch-przyjaciol-rozmawia-siedzi-i-korzysta-z-laptopa-dymek-krzeslo-plaski-ilustracja-komputer_74855-14185.jpg?w=1060&t=st=1707504653~exp=1707505253~hmac=f219e7ba2be8b33a1c62ad9e5236de836df775befeff91889da9947a17518211" className="womanimg" alt="" />
      </main>

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

      <section id="onas">
      <h1>O nas</h1>
        <p> (pracuje solo)</p>
        <div className="prawda"></div>
      </section>
    </div>
  );
}

export default MainContent;
