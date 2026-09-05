import "./Home.css";
function Home() {
  return (
    <main className="pagina-inicial">
      <section className="banner-principal">
        <img src="/festaa.png" alt="Pessoas felizes em evento comunitário" />
      </section>

      <section className="secao-sobre">
        <h2>Um pouco mais sobre a nossa comunidade</h2>
        <p>
          O EventUp nasceu com o propósito de aproximar pessoas e fortalecer os
          laços dentro das comunidades locais. Acreditamos que cada evento é uma
          oportunidade única de compartilhar experiências, aprender algo novo e
          criar memórias que ficam para sempre. Nossa plataforma foi pensada
          para ser simples, acessível e acolhedora, permitindo que qualquer
          pessoa descubra eventos perto de si e participe ativamente da vida
          comunitária. Mais do que um espaço de divulgação, o EventUp se tornou
          um ponto de encontro para diferentes culturas, gerações e ideias,
          oferecendo desde feiras de arte e apresentações culturais até
          workshops, encontros esportivos e ações voluntárias.
        </p>
      </section>
    </main>
  );
}

export default Home;
