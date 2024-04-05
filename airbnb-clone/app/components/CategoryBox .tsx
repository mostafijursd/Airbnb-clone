'use client';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
interface CategoryBoxProps{
    icon: IconType,
    label: string;
    setected?:boolean
}
const CategoryBox:React.FC<CategoryBoxProps>  = ({
    icon:Icon,
    label ,
   setected
}) => {

  const router=useRouter();
  return (
    <div  className={`
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer
   ${setected?'border-b-neutral-800' : 'border-transparent'}
    ${setected? 'text-neutral-800' : 'text-neutral-500'}
  `} >
        <Icon size={26} />
        <div className="font-medium text-sm">
        {label}
      </div>
         </div>
  )
}

export default CategoryBox; 