import React from 'react';
import '../Home.css';
import SeguridadImg from '../assets/seguridad_informatica.jpeg';

const Seccion2 = () => {
  return (
    <div className="container">
      <h2>Confidencialidad de la Información</h2>
      <img src={SeguridadImg} alt="Ciberseguridad" className="img-responsive" />
      <p>La confidencialidad de la información se refiere a la protección de los datos frente a accesos no autorizados, asegurando que solo las personas autorizadas puedan acceder a la información sensible. A continuación, se describen leyes y conceptos clave relacionados con la protección de datos:</p>

      <div className="tema">
        <h3>Ley General de Protección de Datos Personales de México</h3>
        <p>Esta ley regula la recolección, uso y protección de datos personales en manos de entidades públicas y garantiza el derecho a la privacidad de los individuos en México.</p>
      </div>

      <div className="tema">
        <h3>Ley de Propiedad Industrial</h3>
        <p>Protege los derechos sobre invenciones, patentes, marcas y diseños industriales, promoviendo la innovación y garantizando los derechos de los inventores y creadores.</p>
      </div>

      <div className="tema">
        <h3>Ley Federal de Derechos de Autor</h3>
        <p>Esta ley protege las obras artísticas, literarias y científicas, asegurando que los autores mantengan los derechos sobre su trabajo y su distribución.</p>
      </div>

      <div className="tema">
        <h3>Ley Federal de Datos Personales en Posesión de Particulares</h3>
        <p>Establece los derechos y responsabilidades de las entidades privadas respecto al tratamiento y protección de datos personales, fomentando el uso adecuado y seguro de la información.</p>
      </div>

      <div className="tema">
        <h3>Código Penal Federal</h3>
        <p>El Código Penal Federal incluye disposiciones relacionadas con delitos cibernéticos, la invasión de la privacidad, y el uso indebido de la información confidencial, tipificando y sancionando estos actos.</p>
      </div>

      <div className="tema">
        <h3>Ley General de Transparencia y Acceso a la Información</h3>
        <p>Regula el acceso a la información pública en México, estableciendo que las instituciones gubernamentales deben ser transparentes con sus datos, garantizando el acceso de los ciudadanos a la información pública.</p>
      </div>

      <div className="tema">
        <h3>Criptografía Simétrica</h3>
        <p>La criptografía simétrica utiliza una única clave para cifrar y descifrar los datos. Esta clave debe mantenerse en secreto y es compartida entre las partes que desean intercambiar información de forma segura.</p>
      </div>

      <div className="tema">
        <h3>Criptografía Asimétrica</h3>
        <p>En la criptografía asimétrica, se usan dos claves diferentes: una clave pública para cifrar y una clave privada para descifrar. Esto garantiza una comunicación segura sin necesidad de compartir la clave privada.</p>
      </div>

      <div className="tema">
        <h3>Cifrado por Bloques</h3>
        <p>El cifrado por bloques transforma bloques de datos de tamaño fijo en texto cifrado, utilizando una clave. Es comúnmente utilizado en métodos de cifrado simétrico.</p>
      </div>

      <div className="tema">
        <h3>Cifrado por Flujo</h3>
        <p>El cifrado por flujo cifra los datos de forma continua, bit por bit o byte por byte, en lugar de hacerlo en bloques, proporcionando un flujo constante de datos cifrados.</p>
      </div>

      <div className="tema">
        <h3>Criptoanálisis</h3>
        <p>El criptoanálisis es el estudio de los métodos utilizados para romper o debilitar los sistemas criptográficos, con el objetivo de descubrir vulnerabilidades en los cifrados y mejorar la seguridad.</p>
      </div>
    </div>
  );
};

export default Seccion2;
