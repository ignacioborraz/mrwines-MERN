import React from "react";
import "../styles/WineDetails.css";
import botellavino2 from "../assets/botellavino2.png";

function WineDetails() {
  return (
    <div className="custom-div1-details">
      <div className="custom-div1-details-subContainer">
        <div>
          <img className="botellavino2" src={botellavino2} />
        </div>
        <div className="custom-div2-details">
          <div className="padding-right">
            <h2>Fin del Mundo Single Vineyard – Pinot Noir</h2>
          </div>
          <div className="custom-price">
            <h2>$4000,00 x caja</h2>
          </div>
          <div className="custom-div3-details">
            <div className = "container-input-number">
              <button className = "button-customised">+</button>
              <input className="input-customised" type="number" />
              <button  className = "button-customised">-</button>
            </div>
            <div>
              <button>Añadir al carrito</button>
            </div>
          </div>
          <div className="custom-div4-details">
            <p>
              Las unidades se venden x Caja Cerrada. Las imágenes son meramente
              ilustrativas.
            </p>
          </div>
          <div className="custom-div-container-acordion">
            <div className="custom-acordion">
              <nav class="accordion arrows">
                <input type="radio" name="accordion" id="cb1" />
                <section class="box">
                  <label class="box-title" for="cb1">
                    Description
                  </label>
                  <label class="box-close" for="acc-close"></label>
                  <div class="box-content">
                    <style type="text/css"></style>
                    <div id="global">
                      <div id="mensajes">
                        <div class="texto">
                          Este vino Wapisa Pinot Noir, proveniente de la
                          Patagonia Atlántica. La brisa del mar, la complejidad
                          del suelo, se expresan en esta línea, con la frescura
                          característica de una zona única no explorada como es
                          la Patagonia Atlántica.
                        </div>
                        <div class="texto">
                          <div>Notas de Cata</div>
                          <div>
                            Vino con un color rojo intenso. Aromas y sabores a
                            fruto negros como moras y grosellas negras también
                            confitura de ciruela. Entre las especias la pimienta
                            negra y el eucaliptus. Estas notas se intercalan con
                            el café y chocolate que aporta el roble. Taninos
                            amables y jugosos.
                          </div>
                        </div>
                        <div class="texto">
                          <div>Variedades</div>
                          <div>100% Pinot Noir</div>
                        </div>
                        <div class="texto">
                          <div>Origen</div>
                          <div>
                            Finca Los Acantilados, San Javier, Patagonia
                            Atlántica, Río Negro. VIÑEDOS
                          </div>
                        </div>
                        <div class="texto">
                          <div>Finca de los Acantilados</div>
                          <ul>
                            <li>ALTITUD: 100 metros sobre el nivel del mar.</li>
                            <li>
                              CARACTERISTICAS: Es una zona muy cercana al Océano
                              Atlantico, lo que influye en una especial
                              tipicidad en sus vinos, con notas especiadas
                              intensas, buen color y estructura.
                            </li>
                          </ul>
                        </div>
                        <div class="texto">
                          <div>Datos Tecnicos</div>
                          <div>
                            Alcohol 14.40% Acidez Total 5.20 pH 3.78 Azúcar
                            residual 2.18
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <input type="radio" name="accordion" id="acc-close" />
              </nav>
            </div>
          </div>
          <div>
            <p>Pago y envío</p>
          </div>
          <div>
            <p>
              Pagá tu pedido con las principales tarjetas de crédito y débito,
              de forma segura por medio de MercadoPago.
            </p>
            <p className="custom-p-padding">
              Realizamos envíos GRATIS en CABA y GBA hasta 10km. Demora entre 48
              y 96hs, dependiendo de la zona.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineDetails;