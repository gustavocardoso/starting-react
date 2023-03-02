import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import PokemonType from '../PokemonType'

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <Button variant='contained' color='primary' onClick={() => onSelect(pokemon)}>
          Select!
        </Button>
      </td>
    </tr>
  )
}

PokemonRow.propTypes = {
  pokemon: PokemonType,
  onSelect: PropTypes.func
}

export default PokemonRow
