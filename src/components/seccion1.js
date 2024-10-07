import React from 'react';
import '../Home.css';
import ataquesImg from '../assets/ataques_ciberneticos.jpg';

const Seccion1 = () => {
  return (
    <div className="container">
      <h2>Ataques Cibernéticos</h2>
      <img src={ataquesImg} alt="Ataques Cibernéticos" className="img-responsive" />
      <p>Los ataques cibernéticos son acciones maliciosas que buscan comprometer la seguridad de sistemas informáticos, redes y datos. A continuación, exploraremos algunos de los tipos de ataques más comunes y sus características:</p>

      <div className="ataque">
        <h3>DDoS (Distributed Denial of Service)</h3>
        <p>Un ataque DDoS inunda un servidor o red con tráfico masivo para sobrecargar los recursos, haciendo que el servicio sea inaccesible para usuarios legítimos. Estos ataques suelen involucrar redes de dispositivos infectados.</p>
      </div>

      <div className="ataque">
        <h3>Ordenador Zombie</h3>
        <p>Un ordenador zombie es un equipo que ha sido infectado por malware y controlado remotamente sin que su propietario lo sepa. Los ciberdelincuentes lo usan para ejecutar ataques como DDoS o para enviar spam.</p>
      </div>

      <div className="ataque">
        <h3>Ciberdelincuente</h3>
        <p>Un ciberdelincuente es una persona que utiliza tecnologías de la información para cometer delitos, tales como robos de información, fraudes o ataques a sistemas informáticos.</p>
      </div>

      <div className="ataque">
        <h3>Botmaster</h3>
        <p>Un botmaster es la persona que controla una red de ordenadores infectados (botnet). Estos ordenadores zombies son utilizados para realizar ataques coordinados.</p>
      </div>

      <div className="ataque">
        <h3>Botnet</h3>
        <p>Una botnet es una red de ordenadores infectados con malware, que están controlados de manera remota por un botmaster. Estas redes suelen usarse para enviar correos spam o ejecutar ataques DDoS.</p>
      </div>

      <div className="ataque">
        <h3>Ransomware</h3>
        <p>El ransomware es un tipo de malware que cifra los archivos del usuario y exige un pago (generalmente en criptomonedas) para desbloquearlos. Ejemplos notables incluyen WannaCry y Petya.</p>
      </div>

      <div className="ataque">
        <h3>Disclaimer</h3>
        <p>En ciberseguridad, un disclaimer es una advertencia legal que generalmente informa sobre los riesgos de seguridad. Por ejemplo, algunos sitios muestran un aviso antes de que los usuarios accedan a recursos potencialmente peligrosos.</p>
      </div>

      <div className="ataque">
        <h3>The Morris Worm</h3>
        <p>El Morris Worm fue uno de los primeros gusanos informáticos distribuidos por Internet en 1988, causando importantes interrupciones en las redes a nivel global.</p>
      </div>

      <div className="ataque">
        <h3>Ciberwarfare</h3>
        <p>La ciberwarfare, o guerra cibernética, se refiere a la utilización de ataques cibernéticos por parte de naciones o grupos organizados para dañar la infraestructura o las redes de un país rival.</p>
      </div>

      <div className="ataque">
        <h3>Stuxnet</h3>
        <p>Stuxnet es un gusano informático que fue utilizado para sabotear instalaciones nucleares iraníes en 2010, siendo uno de los primeros ejemplos conocidos de ciberwarfare dirigida a infraestructuras críticas.</p>
      </div>

      <div className="ataque">
        <h3>Moonlight Maze</h3>
        <p>Moonlight Maze fue una operación de espionaje cibernético a finales de los 90 que atacó sistemas del gobierno de los EE.UU., comprometiendo datos sensibles de agencias como el Departamento de Defensa y la NASA.</p>
      </div>

      <div className="ataque">
        <h3>Operación Aurora</h3>
        <p>Una serie de ataques cibernéticos dirigidos a grandes empresas tecnológicas en 2009, incluyendo Google, con el objetivo de robar propiedad intelectual y datos sensibles.</p>
      </div>

      <div className="ataque">
        <h3>Freeze it into submission</h3>
        <p>Una táctica en la que los atacantes ralentizan un sistema o lo congelan para que quede fuera de servicio o para que sus defensas se debiliten antes de lanzar un ataque más grande.</p>
      </div>

      <div className="ataque">
        <h3>WannaCry</h3>
        <p>Un ataque global de ransomware que se propagó rápidamente en 2017, afectando a miles de organizaciones en todo el mundo. Cifraba los datos de los usuarios y exigía un rescate para desbloquearlos.</p>
      </div>

      <div className="ataque">
        <h3>Petya</h3>
        <p>Petya es otro ransomware que afectó principalmente a grandes empresas. En lugar de cifrar archivos individuales, cifraba el disco duro completo, impidiendo que el sistema se iniciara.</p>
      </div>

      <div className="ataque">
        <h3>Equifax (ataque)</h3>
        <p>En 2017, Equifax sufrió una de las mayores brechas de seguridad, comprometiendo los datos personales de aproximadamente 147 millones de personas, incluyendo números de seguro social y direcciones.</p>
      </div>

      <div className="ataque">
        <h3>Cam4 (ataque)</h3>
        <p>Un ataque cibernético que expuso miles de terabytes de datos sensibles en la plataforma de webcam Cam4, afectando la privacidad de millones de usuarios.</p>
      </div>
    </div>
  );
};

export default Seccion1;
