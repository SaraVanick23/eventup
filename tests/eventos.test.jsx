import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Eventos from "../Eventos";

describe("Página de Eventos", () => {
  test("renderiza a grade de eventos", () => {
    render(
      <MemoryRouter>
        <Eventos />
      </MemoryRouter>
    );

    const grade = screen.getByTestId("eventos-grade");
    expect(grade).toBeInTheDocument();
  });

  test("renderiza os cards de eventos", async () => {
    render(
      <MemoryRouter>
        <Eventos />
      </MemoryRouter>
    );

    const cards = await screen.findAllByTestId("cartao-evento");
    expect(cards.length).toBeGreaterThan(0);
  });
});
