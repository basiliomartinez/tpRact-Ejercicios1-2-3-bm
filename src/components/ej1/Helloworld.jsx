// =====================
// Componente HelloWorld
// =====================

// Este componente muestra en pantalla el texto "Hello world!"
// Es un ejemplo básico para entender cómo funciona React

const HelloWorld = () => {
    return (
        <section className="text-center py-5">
            <h2 className="display-3 text-primary mt-5">Hello world!</h2>
            <p className="lead">🌎 Mi primer componente en React</p>
        </section>
    );
};

// Exportamos el componente para poder usarlo en App.jsx
export default HelloWorld;
