import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DetalhesEvento.css";

function DetalhesEvento() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    fetch("/eventos.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((e) => e.id === parseInt(id));
        setEvento(encontrado);
      })
      .catch(() => console.error("Erro ao carregar eventos.json"));
  }, [id]);

  if (!evento) {
    return (
      <main className="pagina-detalhes-evento" data-testid="detalhes-evento">
        <h2>Evento não encontrado!</h2>
        <Link to="/eventos" className="botao-voltar">
          Voltar para Eventos
        </Link>
      </main>
    );
  }

  return (
    <main className="pagina-detalhes-evento" data-testid="detalhes-evento">
      <img
        src={evento.imagem}
        alt={evento.titulo}
        className="imagem-detalhe-evento"
      />
      <h1>{evento.titulo}</h1>
      <p className="data-evento">{evento.data}</p>
      <p className="descricao-evento">{evento.descricao}</p>

      <Link to="/eventos" className="botao-voltar">
        Voltar para Eventos
      </Link>
    </main>
  );
}

export default DetalhesEvento;
