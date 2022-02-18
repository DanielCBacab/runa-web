import React from "react";
import NavRuna from "../components/NavRuna";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const razonSocial = "Yucatan Projects S.A. de C.V.";
const direccion =
  "AV. HUAYACAN SMZ 336 MZ 12 LOTE 17 LOCAL 20 CP 77533, BENITO JUAREZ QUINTANA ROO.";
const hadaRazonSocial = "HADA HOLDING PROJECT SA DE CV (HADACORP)";
const hadaEmail = "legal@hadacorp.com.mx";

export default function Privacy() {
  return (
    <Container fluid className="g-0">
      <NavRuna />
      {/* TÍTULO DE POLITICAS DE PRIVACIDAD */}
      <Row className="justify-content-center g-0 py-5 runa-privacy">
        <Col xs={10} md={6} className="text-center my-5 py-5">
          <h2 className="primary-txt">Aviso de Privacidad</h2>
          <p className="text-light">
            De conformidad con lo establecido en la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares,{" "}
            <strong className="primary-txt">{razonSocial}</strong>, denominada
            como <strong className="primary-txt">“LA AUTORIZADA”</strong> pone a
            su disposición el siguiente aviso de privacidad.
          </p>
        </Col>
      </Row>

      {/* SEGUNDA SECCIÓN POLITICAS DE PRIVACIDAD */}
      <Row className="justify-content-center py-5 g-0 gradiente-gris-down">
        <Col xs={10} md={6} className="my-5">
          <p className="secondary-txt">
            <strong className="primary-txt">“LA AUTORIZADA”</strong>, es
            responsable del uso y protección de sus datos personales, en este
            sentido y atendiendo las obligaciones legales establecidas en le Ley
            Federal de Protección de Datos Personales en Posesión de los
            Particulares, a través de este instrumento se informa al titular de
            los datos, la información que de ellos se recaba y los fines que se
            le darán a dicha información.
          </p>
          <p className="secondary-txt">
            Además de lo anterior, informamos a usted que{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong> tiene su
            domicilio ubicado en{" "}
            <strong className="primary-txt">{direccion}</strong>{" "}
          </p>
          <p className="secondary-txt">
            Los datos personales que recabamos de usted serán utilizados para
            las siguientes finalidades, las cuales serán utilizados para el
            cumplimiento con las obligaciones legales contractuales y/o
            extracontractuales que se deriven de la relación jurídica existente
            entre usted y{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong> así como
            las derivadas para la atención al cliente, contacto y
            notificaciones, servicios, promoción y publicidad a través de medios
            impresos y digitales pero nunca en un lucro indebido y solo serán
            compartidos a petición de autoridad competente.
          </p>
          <p className="secondary-txt">
            Para llevar a cabo las finalidades descritas en el presente aviso de
            privacidad, utilizaremos los siguientes datos personales que podrán
            establecerse mediante copias fotostáticas: (1) Identificación
            Oficial (2) Imagen (3) Comprobante de domicilio (4) Cédula de
            Situación fiscal, (5) Acta de nacimiento (6) CURP (7) nacionalidad
            (8) Sexo (ocupación), (9) Estado civil (10) Teléfono (11) Correo.
          </p>
          <p className="secondary-txt">
            Usted tiene en todo momento el derecho a conocer que datos
            personales de usted, para que los utilizamos y las condiciones del
            uso que le damos (Acceso). Asimismo, es su derecho solicitar la
            corrección de su información personal en caso de que este
            desactualizada, sea inexacta o incompleta (Rectificación); de igual
            manera, tiene derecho a que su información se elimine de nuestros
            registros o bases de datos cunado considere que la misma no está
            siendo utilizada adecuadamente (Cancelación); así como también a
            oponerse al uso de sus datos personales para fines específicos
            (Oposición). Estos derechos se conocen como derechos de ARCO.
          </p>
          <p className="secondary-txt">
            Para el ejercicio de cualquiera de los derechos ARCO, se deberá
            presentar solicitud respectiva a través de “LA AUTORIZADAS, por
            escrito libre solicitando cualquiera de los derechos antes
            mencionados. En todo caso la respuesta a la solicitud se dará
            respuesta en un plazo no mayor a 72 (setenta y dos) horas. Asimismo
            puede presentar la revocación de su consentimiento para el
            tratamiento de los Datos Personales proporcionados mediante el envío
            de una solicitud escrita a la siguiente dirección de correo
            electrónico legal@gadacorp.com.mx
          </p>
          <p className="secondary-txt">
            Usted reconoce que es posible que{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong> tenga que
            divulgar los Datos Personales proporcionados en virtud de alguna
            disposición de Ley, procedimiento judicial, administrativo, acción
            legal, y/o por alguna solicitud hecha por alguna autoridad
            gubernamental competente.
          </p>
          <p className="secondary-txt">
            Los Datos Personales proporcionados por Usted pueden ser
            transferidos y/o tratados por personas distintas al Responsable con
            el objeto de cumplir con las finalidades señaladas en el presente
            Aviso de Privacidad; esta transferencia será dentro del territorio
            mexicano. En este sentido, los Datos Personales proporcionados por
            Usted pueden ser compartidos con las empresas que, directa o
            indirectamente, pertenezca{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong>, aquellas
            que se encuentren bajo un control común y/o con su empresa
            controladora,
            <strong className="primary-txt">{hadaRazonSocial}</strong> y sus
            empresas filiales. Además, Usted reconoce y acepta que{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong> podrá dar a
            conocer los Datos Personales proporcionados a las autoridades
            gubernamentales competentes que así lo solicite mediante
            requerimiento escrito debidamente fundado y motivado. Además, se le
            informa que en el marco de la relación contractual o comercial que
            usted mantenga, podrá compartir los Datos Personales proporcionados
            con cualquier otra entidad pública o privada en relación con la
            prestación de sus servicios contratados.
          </p>
          <p className="secondary-txt">
            El titular de los Datos Personales podrá manifestar, en cualquier
            momento, su negativa para que{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong> transfiera
            a terceros los Datos Personales proporcionados mediante el ejercicio
            de los Derechos ARCO aquí señalados, a través de los medios
            establecidos para tal efecto en el presente Aviso de Privacidad.
          </p>
          <p className="secondary-txt">
            Los Datos Personales proporcionados por Usted pueden ser
            transferidos y/o tratados por personas distintas al Responsable con
            el objeto de cumplir con las finalidades señaladas en el presente
            Aviso de Privacidad; esta transferencia será dentro del territorio
            mexicano. En este sentido, los Datos Personales proporcionados por
            Usted pueden ser compartidos con las empresas que, directa o
            indirectamente, pertenezca{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong>, aquellas
            que se encuentren bajo un control común y/o con su empresa
            controladora,
            <strong className="primary-txt">{hadaRazonSocial}</strong> y sus
            empresas filiales. Además, Usted reconoce y acepta que{" "}
            <strong className="primary-txt">“LA AUTORIZADA”</strong> podrá dar a
            conocer los Datos Personales proporcionados a las autoridades
            gubernamentales competentes que así lo solicite mediante
            requerimiento escrito debidamente fundado y motivado. Además, se le
            informa que en el marco de la relación contractual o comercial que
            usted mantenga, podrá compartir los Datos Personales proporcionados
            con cualquier otra entidad pública o privada en relación con la
            prestación de sus servicios contratados.
          </p>
          <p className="secondary-txt">
            A lo que nos comprometemos a mantenerle informado de cualquier
            cambio en nuestro modelo de negocio, o por cualquier otra causa
            pueda sufrir un cambio el presente aviso de privacidad, sin embargo,
            usted puede solicitar información sobre si el mismo ha sufrido algún
            cambio a través de la siguiente dirección electrónica:{" "}
            <strong className="primary-txt">{hadaEmail}</strong>.
          </p>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
}
