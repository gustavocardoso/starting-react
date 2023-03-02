import { useEffect, useReducer } from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

import styled from '@emotion/styled'

import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'

const pokemonReducer = (
  state = {
    pokemons: [],
    filter: '',
    selectedPokemon: null
  },
  action
) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload
      }
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedPokemon: action.payload
      }
    default:
      return state
  }
}

const store = createStore(pokemonReducer)

const Container = styled.div`
  width: 800px;
  padding-top: 1rem;
  margin: auto;
`

const Title = styled.h1`
  text-align: center;
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`

function App() {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemons.json')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_POKEMONS', payload: data }))
  }, [dispatch])

  if (!pokemons) {
    return <div>Loading data!</div>
  }

  return (
    <Container>
      <Title className='title'>Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>

        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  )
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
