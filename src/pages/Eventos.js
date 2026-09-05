import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Eventos.css";

function Eventos() {
  const [clima, setClima] = useState(null);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("/eventos.json")
      .then((res) => res.json())
      .then((data) => setEventos(data))
      .catch(() => console.error("Erro ao carregar eventos.json"));

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-22.90&longitude=-43.20&current_weather=true"
    )
      .then((response) => response.json())
      .then((data) => {
        setClima(data.current_weather);
      })
      .catch((error) => console.error("Erro ao buscar o clima:", error));
  }, []);

  return (
    <main className="pagina-eventos">
      <header>
        <h1>Eventos</h1>
        <p>Saiba o que está rolando na EventUp…</p>

        {clima && (
          <div className="info-clima">Clima atual: {clima.temperature}°C</div>
        )}
      </header>

      <section className="grade-de-eventos" data-testid="eventos-grade">
        {eventos.map((evento) => (
          <Link
            to={`/eventos/${evento.id}`}
            className="cartao-de-evento"
            key={evento.id}
            data-testid="cartao-evento"
          >
            <img src={evento.imagem} alt={evento.titulo} loading="lazy" />
            <h2>{evento.titulo}</h2>
            <p>{evento.data}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Eventos;
