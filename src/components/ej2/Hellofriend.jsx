const Hellofriend = ({ mensaje }) => {
    return (
        <section className="text-center p-3 border rounded shadow-sm mb-5">
            <h2 className="display-5 text-success m-0">{mensaje}</h2>
            <p className="lead mt-2 mb-0">
                🤝 Componente con <strong>props</strong> (datos que vienen de afuera)
            </p>
        </section>
    );
};

export default Hellofriend;
