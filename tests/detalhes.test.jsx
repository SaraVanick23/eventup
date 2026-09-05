import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetalhesEvento from "../DetalhesEvento";

describe("Página de Detalhes do Evento", () => {
  test("renderiza os detalhes de um evento existente", () => {
    render(
      <MemoryRouter initialEntries={["/eventos/1"]}>
        <Routes>
          <Route path="/eventos/:id" element={<DetalhesEvento />} />
        </Routes>
      </MemoryRouter>
    );

    const detalhes = screen.getByTestId("detalhes-evento");
    expect(detalhes).toBeInTheDocument();
  });
});
