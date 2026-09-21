const { getPokemonSummary } = require("./pokemon-utils");

describe("getPokemonSummary", () => {
  test("retorna o nome corretamente", () => {
    const mockPikachu = {
      name: "pikachu",
      height: 4,
      types: [{ type: { name: "electric" } }],
    };

    const result = getPokemonSummary(mockPikachu);
    expect(result.name).toBe("pikachu");
  });

  test("identifica corretamente o tipo primário", () => {
    const mockGengar = {
      name: "gengar",
      height: 15,
      types: [{ type: { name: "ghost" } }, { type: { name: "poison" } }],
    };

    const result = getPokemonSummary(mockGengar);
    expect(result.primaryType).toBe("ghost");
  });

  test("identifica corretamente quando o Pokémon é dual-type", () => {
    const mockGengar = {
      name: "gengar",
      height: 15,
      types: [{ type: { name: "ghost" } }, { type: { name: "poison" } }],
    };

    const result = getPokemonSummary(mockGengar);
    expect(result.isDualType).toBe(true);
  });

  test("converte altura de decímetros para metros corretamente", () => {
    const mockPikachu = {
      name: "pikachu",
      height: 4,
      types: [{ type: { name: "electric" } }],
    };

    const result = getPokemonSummary(mockPikachu);
    expect(result.heightInMeters).toBe(0.4);
  });

  test("lança um erro quando os dados do Pokémon são inválidos", () => {
    expect(() => getPokemonSummary(null)).toThrow("Dados do Pokémon inválidos");
  });
});
