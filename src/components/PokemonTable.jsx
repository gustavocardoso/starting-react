import { useSelector, useDispatch } from 'react-redux'
import PokemonRow from './PokemonRow'

const PokemonTable = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)
  const filter = useSelector(state => state.filter)

  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemons
          .filter(pokemon => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, 20)
          .map(pokemon => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={pokemon =>
                dispatch({
                  type: 'SET_SELECTED_POKEMON',
                  payload: pokemon
                })
              }
            />
          ))}
      </tbody>
    </table>
  )
}

export default PokemonTable
