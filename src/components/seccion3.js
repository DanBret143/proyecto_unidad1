import React from 'react';
import '../Home.css';
import PrincipiosImg from '../assets/principios_seguridad.png';

const Seccion3 = () => {
  return (
    <div className="container">
      <h2>Principios de Seguridad de la Información</h2>
      <img src={PrincipiosImg} alt="Principios Cibernéticos" className="img-responsive" />
      <p>La seguridad de la información se basa en varios principios fundamentales que ayudan a proteger los datos y sistemas de amenazas. A continuación, se detallan estos principios:</p>

      <div className="principio">
        <h3>Accesibilidad</h3>
        <p>Garantiza que los usuarios autorizados puedan acceder a la información y a los recursos necesarios cuando los requieran, sin restricciones innecesarias.</p>
      </div>

      <div className="principio">
        <h3>Confidencialidad</h3>
        <p>Asegura que la información solo sea accesible para personas autorizadas, evitando el acceso no autorizado o la divulgación indebida de datos sensibles.</p>
      </div>

      <div className="principio">
        <h3>Disponibilidad</h3>
        <p>Se refiere a la capacidad de los sistemas y los datos para estar disponibles y accesibles para los usuarios cuando los necesiten, incluso ante fallos o ataques.</p>
      </div>

      <div className="principio">
        <h3>Autenticación</h3>
        <p>El proceso de verificar la identidad de los usuarios, sistemas o entidades antes de permitirles el acceso a recursos o datos, garantizando que son quienes dicen ser.</p>
      </div>

      <div className="principio">
        <h3>Integridad</h3>
        <p>Este principio asegura que la información no sea alterada o manipulada sin autorización, garantizando que los datos se mantengan completos y exactos.</p>
      </div>

      <div className="principio">
        <h3>Control de Acceso</h3>
        <p>Define las políticas y mecanismos que regulan quién puede acceder a los sistemas, redes y datos, y bajo qué condiciones, limitando el acceso a usuarios no autorizados.</p>
      </div>
    </div>
  );
};

export default Seccion3;
