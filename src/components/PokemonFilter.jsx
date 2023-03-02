import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'

const SearchInput = styled.input`
  width: 95%;
  font-size: x-large;
  padding: 0.2rem 0.4rem;
  margin: 1rem 0;
`

const PokenonFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  return (
    <SearchInput
      className='search'
      value={filter}
      onChange={event => dispatch({ type: 'SET_FILTER', payload: event.target.value })}
    />
  )
}

export default PokenonFilter
