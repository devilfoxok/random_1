import { FC } from 'react'
import PeopleItem from './PeopleItem'
import { IPeople } from '../App'

interface PeopleListProps {
    people: IPeople[]
}

const PeopleList: FC<PeopleListProps> = ({people}) => {
  return (
    <div className='flex flex-col justify-center items-center m-3'>
        {
            people.length > 0            
            ? 
            people.map((item, index) => 
                <PeopleItem item={item} key={index}/>
            )
            :
            <div>NO DATA</div>

        }
    </div>
  )
}

export default PeopleList
