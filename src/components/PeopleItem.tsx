import { JSX } from 'react'
import { IPeople } from '../App'

interface PeopleItemProps {
    item: IPeople
}

const PeopleItem = ({item}: PeopleItemProps): JSX.Element => {
  return (
    <div className='w-50 bg-gray-800 rounded-3xl m-2 hover:bg-gray-600'>
      <div className='flex justify-center'>{item.name}</div>
      <div className='flex justify-center'>{item.birth_year}</div>
    </div>
  )
}

export default PeopleItem
