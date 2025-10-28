// =====================
// Componente principal App
// =====================

// Importamos nuestro componente HelloWorld
import Helloworld from "./components/ej1/Helloworld";

const App = () => {
  return (
    <>
      <header className="py-5 text-center">
        <h1 className="display-6">Ejercicio 1 - React ⚛️</h1>
      </header>

      <main className="container">
        {/* Renderizamos el componente HelloWorld */}
        <Helloworld />
      </main>
    </>
  );
};

export default App;
