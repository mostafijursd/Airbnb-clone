'use client';

import { IconType } from "react-icons";

interface CategoryInputProps{
    icon:IconType,
    label :string,
    setected?:boolean,
    onClick:(value:string)=>void,
}
const CategoryInput:React.FC<CategoryInputProps> = ({
    icon:Icon,
    label ,
    setected,
    onClick
}) => {
  return (
    <div>CategoryInput</div>
  )
}

export default CategoryInput;