import Helloworld from "./components/ej1/Helloworld";
import Hellofriend from "./components/ej2/Hellofriend";
import Hellostate from "./components/ej3/Hellostate";

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

                 {/* EJERCICIO 3 */}
                <section className="my-4">
                    <h2 className="h4 alert alert-warning mb-3">
                        Ejercicio 3: "Hello my friend (from changed state)!"
                    </h2>
                    <Hellostate />
                </section>

            </main>
        </>
    );
};

export default App;
