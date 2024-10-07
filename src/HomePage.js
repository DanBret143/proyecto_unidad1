import React from 'react';
import './Home.css';
import cyberSecurityImg from './assets/CyberSecurity.jpg';

function HomePage() {
  return (
    <div className="container">
      <h1>Seguridad de la Información: Protege lo que más importa</h1>
      <img src={cyberSecurityImg} alt="Ciberseguridad" className="img-responsive" />
      <p>
        La seguridad de la información es fundamental en el mundo digital actual. 
        Consiste en proteger tus datos de accesos no autorizados, alteraciones y pérdidas.
      </p>
      
      <h2>¿Por qué es importante?</h2>
      <ul>
        <li><strong>Prevención de pérdidas financieras:</strong> Un ciberataque puede causar pérdidas económicas significativas.</li>
        <li><strong>Protección de la reputación:</strong> Las brechas de seguridad pueden dañar la imagen de una empresa o persona.</li>
        <li><strong>Cumplimiento normativo:</strong> Muchas industrias tienen regulaciones sobre protección de datos.</li>
        <li><strong>Seguridad nacional:</strong> La protección de información gubernamental es esencial.</li>
      </ul>
      
      <h2>Los pilares de la seguridad de la información</h2>
      <ul>
        <li><strong>Confidencialidad:</strong> Solo las personas autorizadas acceden a la información.</li>
        <li><strong>Integridad:</strong> La información es precisa y completa.</li>
        <li><strong>Disponibilidad:</strong> La información está disponible cuando se necesita.</li>
      </ul>
      
      <h2>Amenazas comunes</h2>
      <ul>
        <li><strong>Ataques cibernéticos:</strong> Hackers, malware, phishing.</li>
        <li><strong>Errores humanos:</strong> Pérdida de dispositivos, revelación accidental de datos.</li>
        <li><strong>Desastres naturales:</strong> Incendios, inundaciones.</li>
      </ul>
      
      <h2>Medidas de seguridad</h2>
      <ul>
        <li><strong>Contraseñas fuertes:</strong> Únicas y complejas.</li>
        <li><strong>Cifrado:</strong> Codificación de datos.</li>
        <li><strong>Cortafuegos:</strong> Protección de redes.</li>
        <li><strong>Actualizaciones de software:</strong> Corrección de vulnerabilidades.</li>
        <li><strong>Respaldos:</strong> Copias de seguridad periódicas.</li>
        <li><strong>Concientización:</strong> Educar a los usuarios.</li>
      </ul>
    </div>
  );
}

export default HomePage;
