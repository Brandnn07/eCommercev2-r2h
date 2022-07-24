import React from "react";
import "./style.scss";
import AboutUsHero from "../../components/AboutUsHero/AboutUsHero";

export default function About() {
  return (
    <>
      <AboutUsHero />
      <section class="aboutUsSection">
        Born of the spirit of innovation, Emporium epitomises the power of a
        lifelong passion and the beauty of limitless human achievement, creating
        & marketing timeless icons for a changing world
      </section>
      <h1 class="ourValues">Our Values</h1>
      <main class="aboutUsValues">
        <div class="aboutCard">
          <div class="inner">
            <h2 class="aboutTitle">Individuality</h2>
            <p class="subaboutTitle">
              Our talented individuals are our greatest resource. However they
              can only pursue the extraordinary by working together as a team.
              By fostering integrity, excellence and generosity, we give each of
              our people the possibility to express their own full potential and
              to be part of something greater
            </p>
          </div>
        </div>

        <div class="aboutCard aboutCard2">
          <div class="inner">
            <h2 class="aboutTitle">Tradition & Innovation</h2>
            <p class="subaboutTitle">
              Tradition always stems from innovation. The ongoing quest for
              lasting firsts is what fuels us. Our ability to combine
              revolutionary technological solutions with exceptional artisanal
              craftsmanship is what enables us to create icons that stay
              timeless in a fast changing world.
            </p>
          </div>
        </div>

        <div class="aboutCard aboutCard3">
          <div class="inner">
            <h2 class="aboutTitle">Passion & Achievement</h2>
            <p class="subaboutTitle">
              Nothing excites us more than setting ambitious targets and
              expectations and then exceeding them, to push every boundary. It
              is how the power of passion becomes the beauty of achievement.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
