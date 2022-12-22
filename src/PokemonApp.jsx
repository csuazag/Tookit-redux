import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { pokemons, isLoading, currentPage } = useSelector(
    (state) => state.pokemons
  );

  console.log(pokemons, isLoading, currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <span>Page: {currentPage} </span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(currentPage));
        }}
      >
        Next Pokemons
      </button>
    </>
  );
};
