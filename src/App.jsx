import React, { useState } from "react";
import AnimatedText from "./animatedText";
import "./css/index.css";
import AnimatedTextTop from "./animatedTextTop";
import TypewriterBot from "typewriter-effect";
import TypewriterTop from "typewriter-effect";
import BtnDownload from "./btnDownload";

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <tr className="navMenu">
          <th className="col">
            <a href="#root" className="navOption">
              Inicio
            </a>
          </th>
          <th className="col">
            <a href="#list" className="navOption">
              Apps
            </a>
          </th>
          <th className="col">
            <a href="#info" className="navOption">
              Informacion
            </a>
          </th>
        </tr>
      </nav>
      <img src="./src/img/thumbail.png" className="thumbail"></img>
      <div id="TypewriterBot">
        <TypewriterBot
          options={{
            autoStart: true,
            loop: true,
            wrapperClassName: "TypewriterBot",
          }}
          onInit={(TypewriterBot) => {
            TypewriterBot.typeString("Una solución para cada problema")
              .pauseFor(3000)
              .deleteChars(8)
              .typeString("situacion")
              .pauseFor(4000)
              .deleteChars(9)
              .typeString("duda")
              .pauseFor(5000)
              .deleteChars(4)
              .start();
          }}
        />
      </div>
      <div id="TypewriterTop">
        <TypewriterTop
          options={{
            autoStart: true,
            loop: true,
            wrapperClassName: "TypewriterTop",
          }}
          onInit={(TypewriterTop) => {
            TypewriterTop.typeString("Software gratuito, rápido y fácil.")
              .pauseFor(3000)
              .deleteChars(15)
              .typeString("libre y sin virus")
              .pauseFor(4000)
              .deleteChars(9)
              .typeString("escalabidad y confianza")
              .pauseFor(5000)
              .deleteChars(10)
              .start();
          }}
        />
      </div>
<section id="info">
      <div className="content">
        <h3 className="h2">Quienes somos?</h3>
        <p className="p">
          Mas bien dicho quien soy. Soy una persona que le encanta la
          programación y quiere crear una micro empresa para vender o mejor
          dicho dar gratis los mismos programas pero full, sin pagar nada. Todo
          esto esta creado con el fan de ofrecer el servicios sin tener que
          entregar información a cambio. Solo ofrecer una alternativa gratuita
          para tu emprendimiento.
        </p>

        <h3 className="h2Question">Por que lo hacen?</h3>
        <p className="pQuestion">
          Solo quiero un mundo donde allá un servicio realmente gratuito, donde
          no tengas que dar nada a cambio, solo hacer clic en el botón de
          descarga y listo, solo usarlo hasta donde uno quiera, software
          gratuito, sin licencias ni tarjetas, solo tu y el software.
        </p>

        <h3 className="h2Question2">Hasta cuando es gratuito?</h3>
        <p className="pQuestion2">
          Espero que el proyecto sea gratis y de código fuente libre, la idea es
          que sea gratis para siempre pero, mantenerlo es complicado ya que al
          no tener una fuente de ingresos estable y tratar de ofrecer el mejor
          servicio posible, es complicado. En el pero de los casos tendríamos
          que romper nuestra promesa de poner anuncios o alguno método para
          obtener ingresos para el proyecto y asi ofrecer lo mejor.
        </p>

        <h3 className="h2Question3">Apps</h3>
        <p className="pQuestion3">
          Aquí estarán las Apps que se van a publicar con su botón de descarga y
          su información breve.
        </p>
      </div>
</section>
      <div id="list">
        <div id="soft1">
          <img src="./src/img/youtapp.png" id="youtapp" />
          <h3 id="youtappTittle">YoutApp</h3>
          <h5 id="youtappDesc">
            Este software sirve para descargar videos de YouTube, lo puedes
            hacer en diferentes calidades o solo descargar el audio.
          </h5>
          <BtnDownload />
        </div>
        <div id="soft2"></div>
      </div>
      <footer className="footer">
        <th className="footerTittle">Redes Sociales</th>
        <th className="footerTittle">
          Pagina
          <div className="footerList">
            <th>
              <a href="#root" className="footerOption">
                Inicio
              </a>
            </th>
            <th>
              <a href="#list" className="footerOption">
                Apps
              </a>
            </th>
            <th>
              <a href="#info" className="footerOption">
                Informacion
              </a>
            </th>
          </div>
        </th>
        <th className="footerTittle">SoftWare
        <div>
          <th><a href="https://www.tiktok.com/@t.a_perspectiva"><img src="./src/img/tik-tok.png" className="imgTiktok" /></a></th>
        </div></th>
      </footer>
    </div>
  );
}

export default App;
