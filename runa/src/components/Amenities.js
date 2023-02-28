import React, { useState } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import gold from "../img/gold.png";

import laberinto from "../img/amenidades/laberinto.jpg";
import templo from "../img/amenidades/templo.jpg";
import temazcales from "../img/amenidades/temazcal.jpg";
import santuario from "../img/amenidades/santuario.jpg";
import oraculos from "../img/amenidades/oraculos.jpg";
import fuente from "../img/amenidades/fuente.jpg";
import holistica from "../img/amenidades/holistica.jpg";
import yoga from "../img/amenidades/yoga.jpg";

const amenidadesLeft = [
  {
    name: "El laberinto de meditación ",
    desc: "Existen muchas formas de meditación, pero una que llama mucho la atención por la herramienta que utiliza, y lo extraña que resulta, es la meditación del laberinto, la cual, ni más ni menos, se trata de meditar mientras se camina por un laberinto especialmente diseñado para tal fin.",
    img: laberinto,
  },

  {
    name: "Templo ceremonial ",
    desc: "Un lugar especial y sagrado para compartir y recibir bendiciones, que, con el simple hecho de entrar en ellos, se graban poderosas impresiones en nuestra mente y nuestro inconsciente que nos conducen al logro de manifestaciones profundas de paz interior. Diseñados con hermosos altares acompañaos de los 4 elementos de la naturaleza establecidos en una estructura de geometría sagrada.",
    img: templo,
  },
  {
    name: "Temazcales de renacimiento ",
    desc: "Lo que ahora consideramos como una práctica especial y meramente recreativa, anteriormente era un ritual mucho más cotidiano, debido a que esta actividad tiene toda una carga espiritual, de purificación y conexión con los que se consideraban, en su tiempo, los grandes dioses del universo. El temazcal representa la tierra, la diosa madre que nos sustenta y nos da vida; por eso se piensa que cuando la persona se introduce en él, está entrando en el vientre de la madre tierra y por eso tiene forma de domo con pequeñas dimensiones, representando el vientre materno.",
    img: temazcales,
  },
  {
    name: "Santuario de las artes ",
    desc: "Un espacio de esparcimiento artístico y expansión creativa para chicos y grandes. El Santuario de las Artes tiene como labor principal inspirar un enfoque de recreación con lo necesario para realizar actividades de pintura, armonía para la música, espacio para danza y demás actividades de goce y disfrute para los residentes. ",
    img: santuario,
  },
  {
    name: "El palacio de los oráculos ",
    desc: "Un palacio con una ambientación ancestral y milenaria para encontrarnos con las respuestas de todas aquellas consultas mundanas que emergen en nuestra vida cotidiana y ser recibidas por fuerzas sutiles del universo en un entorno de silencio, energía y poder. Los oráculos se consideran lugares sagrados donde se acudía en la antigüedad para consultar a deidades e inteligencias universales.",
    img: oraculos,
  },
  {
    name: "Fuente de los cuencos tibetanos ",
    desc: "Los cuencos son instrumentos de curación, sanación, relajación y meditación, ayudándonos a establecer una vibración saludable en todo nuestro organismo, tanto a nivel físico, mental o psicológico, emocional y espiritualmente. Desde hace siglos, los lamas y magos del Tíbet fabrican y utilizan unos cuencos especiales para inducir estados mentales de profundo bienestar, relajación y meditación, así como para tratar determinadas dolencias del cuerpo y de la mente. Este espacio contará con cuencos y cantores de cuarzo y de aleaciones metálicas que simbolizan a los planetas: oro (Sol), plata (Luna), mercurio (Mercurio), hierro (Marte), plomo (Saturno), estaño (Júpiter) y cobre (Venus).",
    img: fuente,
  },

  {
    name: "Centro de sanación holística",
    desc: "Contamos con un centro de sanación donde se realizan terapias holísticas para el bienestar físico y emocional de los residentes. Ayudando a que la energía fluya de manera armónica a través de la mente, el cuerpo y el alma.Se trabaja la energía usando diversas técnicas de respiración que reestablecen el balance natural para llegar a un estado lúcido y relajado.Se realizan diferentes actividades y terapias con las que se cuentan por parte de diferentes terapeutas y colaboradores incluso otorgando el espacio para los terapeutas personales, especiales o exclusivos de los residentes.",
    img: holistica,
  },
  {
    name: "Paraíso de yoga",
    desc: "Más que una práctica, el yoga es un estilo de vida que sana, cuida y fortalece el cuerpo, la mente y el espíritu mediante la práctica de las asanas, la respiración y la meditación. Practicado en la India desde hace miles de años, se ha convertido en uno de los sistemas de acondicionamiento físico y espiritual con más adeptos en nuestros días.",
    img: yoga,
  },
];

const amenidadesRight = [
  {
    name: "Lago de los secretos",
    desc: "Una piscina ubicada en el área social, dice la sabiduría oriental que la mente es como un lago cuyos pensamientos son piedras que, al caer, crean ondulaciones que impiden ver su fondo. Meditar es el arte de detener los pensamientos, para así poder contemplar lo que anida en nuestro interior. Si calmamos las olas de la mente, comprenderemos que no somos la imagen creada por nuestro intelecto, sino el fondo de ese lago donde yace nuestra esencia y los más profundos secretos de nuestro espíritu. ",
    img: "./test.png",
  },
  {
    name: "Áreas de conexión ",
    desc: "Se dice que tener mayor conexión contigo mismo, con otros seres y con la naturaleza te permitirá vibrar en un nivel alto y energético positivo. Por eso se crean estas increíbles áreas de esparcimiento para convivir con familiares y amigos y crear esas mágicas conexiones por medio de la unión que permiten crear relaciones y generar hermosos recuerdos.",
    img: "./test.png",
  },
  {
    name: "Solárium",
    desc: "Se dice que es necesario que el sol incida sobre nuestra piel, hay muchas razones importantes pero de las más importantes  es que es la principal fuente de vitamina D, y que es imprescindible para que el organismo pueda absorber el calcio, y necesario para mantener los huesos sanos y fuertes por eso, disfruta de Solárium  Rodeado de preciosa Naturaleza en medio de dos Reinos, el Reino humano y animal y así mismo descubre un bello lugar reservado para tomarte un descanso y llenarte de esa vitamina y luz que irradia esa gran Estrella llamada sol. ",
    img: "./test.png",
  },
  {
    name: "Áreas de fogata ",
    desc: "Una de las cosas más importantes y especiales que nos da tener espacios sociales, es que nos transmite una agradable sensación de bienestar y nos hace sentir libres por eso aquí podrás volver a amarla y realizar convivencias alrededor de estas áreas donde tendrás oportunidad de un fuego que se enciende al aire libre donde puedes hacer un campamento o un picnic, mientras disfrutas de charlas enriquecedoras o momentos de satisfacción con tus seres amados compartiendo alimentos , contando historias y aventuras de vida.",
    img: "./test.png",
  },
];

export default function Amenities() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [indexR, setIndexR] = useState(0);
  const handleSelectR = (selectedIndex, e) => {
    setIndexR(selectedIndex);
  };
  return (
    <Row
      className="justify-content-center py-2 py-md-5 amenities position-relative g-0 "
      id="amenidades"
    >
      <Col xs={11} md={10}>
        <Row className="my-2 py-2 my-md-5 py-md-5">
          <img
            src={gold}
            className="img-fluid d-none"
            alt="Runa - Terrenos ecoresidenciales"
          />
          <Col xs={12} md={6} className="my-md-5 my-2 py-md-5 py-4">
            <h3 className="mb-3 primary-txt">Amenidades</h3>
            <p className="text-white">
              <strong>
                Las amenidades están pensadas para concebir un ambiente lleno de
                equilibrio y buena energía.
              </strong>
            </p>
            <p className="text-white">
              En <strong>Runa Yucatán</strong> se transmite magia y tranquilidad
              en cada una de las actividades que se llevan a cabo dentro de las
              instalaciones. El objetivo es formar una comunidad completa donde
              se pueda convivir en armonía con los demás residentes junto con la
              hermosa y misteriosa Selva Maya.
            </p>
            <p className="text-white">
              Se dice que convivir con la naturaleza aumenta la estima y el
              autocontrol, estimula tu creatividad, aumenta tu concentración y
              reduce el estrés. Por eso y más, te ofrecemos mágicos amaneceres y
              atardeceres sumergidos en jardines naturales dentro de la
              hipnotizante selva.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              fade
            >
              {amenidadesLeft.map((left) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid my-5 "
                    src={left.img}
                    alt={left.name}
                  />
                  <h4 className="primary-txt">{left.name}</h4>
                  <p className="text-light">{left.desc}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center d-none">
          <Col xs={12} md={6}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              fade
            >
              {amenidadesLeft.map((left) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid my-5"
                    src={left.img}
                    alt={left.name}
                  />
                  <h4 className="primary-txt">{left.name}</h4>
                  <p className="text-light d-none d-md-block">{left.desc}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} md={6}>
            <Carousel
              activeIndex={indexR}
              onSelect={handleSelectR}
              indicators={false}
              fade
            >
              {amenidadesRight.map((right) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid my-5"
                    src={right.img}
                    alt={right.name}
                  />

                  <h4 className="primary-txt">{right.name}</h4>
                  <p className="text-light d-none d-md-block">{right.desc}</p>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center my-4 py-4 my-md-5 py-md-5">
          <Col
            xs={10}
            md={10}
            lg={9}
            xl={7}
            className="p-3 p-md-4 banner-brochure align-items-center text-center"
          >
            <p className="text-light">¿Quieres mayores informes?</p>
            <a href="/brochure" className="btn btn-warning btn-lg">
              Ver Brochure Online
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
