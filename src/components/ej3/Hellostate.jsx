import { useState } from "react";

const Hellostate = () => {
    // -------------------------------
    // 1️⃣ Creamos el estado "mensajeExtra"
    // -------------------------------
const[mensajeExtra, setMensajeExtra]= useState("")
    // -------------------------------
    // 2️⃣ Función que cambia el estado
    // -------------------------------
    const cambiarMensaje = () => {
        setMensajeExtra(" (from changed state)");
    };

    // -------------------------------
    // 3️⃣ JSX que se renderiza
    // -------------------------------
    return (
        <section className="text-center p-3 border rounded shadow-sm">
            <h2 className="display-5 text-warning">
                Hello my friend{mensajeExtra}!
            </h2>

            <p className="lead mb-3">
                ⚡ Componente con <strong>state</strong> y evento <strong>onClick</strong>
            </p>

            <button className="btn btn-warning" onClick={cambiarMensaje}>
                Click me
            </button>
        </section>
    );
};

export default Hellostate;
