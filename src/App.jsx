import Helloworld from "./components/ej1/Helloworld";
import Hellofriend from "./components/ej2/Hellofriend";

const App = () => {
    return (
        <>
            <header className="py-3 text-center">
                <h1 className="display-6">Ejercicio 1 - React ⚛️</h1>
            </header>

            <main className="container">

                {/* =======================
                   EJERCICIO 1
                ======================= */}
                <section className="mb-4">
                    <Helloworld />
                </section>

                {/* =======================
                   EJERCICIO 2
                ======================= */}
                <section className="mb-5">
                    <h2 className="h4 alert alert-success mb-3">
                        Ejercicio 2: "Hello my friend!"
                    </h2>

                    <Hellofriend mensaje="Hello my friend!" />
                </section>

            </main>
        </>
    );
};

export default App;
