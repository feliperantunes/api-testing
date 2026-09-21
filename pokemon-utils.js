function getPokemonSummary(pokemonData) {
  if (!pokemonData || !pokemonData.name) {
    throw new Error("Dados do Pokémon inválidos");
  }

  const types = pokemonData.types.map((t) => t.type.name);

  return {
    name: pokemonData.name,
    primaryType: types[0],
    isDualType: types.length > 1,
    heightInMeters: pokemonData.height / 10,
  };
}

module.exports = { getPokemonSummary };
