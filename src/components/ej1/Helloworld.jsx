// =====================
// Componente HelloWorld
// =====================

// Este componente muestra en pantalla el texto "Hello world!"
// Es un ejemplo básico para entender cómo funciona React
const Helloworld = () => {
  return (
    <section className="text-center p-3 border rounded shadow-sm mb-5">
      <h2 className="display-4 text-primary m-0">Hello world!</h2>
      <p className="lead mt-2 mb-0">🌎 Mi primer componente en React</p>
    </section>
  );
};

export default Helloworld;
