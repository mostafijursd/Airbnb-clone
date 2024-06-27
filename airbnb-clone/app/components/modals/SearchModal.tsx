'use client';
import useSearchModal from '@/app/hooks/useSearchModal';
import Modals from './Modals';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Range } from 'react-date-range';
import dynamic from 'next/dynamic';
import { CountrySelectValue } from '../inputs/CountrySelect';
 
enum STEPS{
  LOCATION=0,
  DATE=1,
  INFO=2
}

const SearchModal = () => {
    const searchModal=useSearchModal();
  const router=useRouter();
  const params= useSearchParams();
const [location,setLocation]=useState<CountrySelectValue>();
  const [step,setStep]=useState(STEPS.LOCATION);
const [guestCount,setGuestCount]=useState(1);
const [roomCount,setRoomCount]=useState(1);
const [bathroomCount,setBathroomCount]=useState(1);
const [dateRange,setDateRange]=useState<Range>({
  startDate:new Date(),
  endDate: new Date(),
  key:'selection'
});

const Map=useMemo(()=>dynamic(()=>import('../Map'),{
 ssr:false
}),[location])

  return (
    <Modals
     isOpen={searchModal.isOpen}
     onClose={searchModal.onClose}
     onSubmit={searchModal.onOpen}
     title='Filter'
     actionLabel='Search'
    /> 
  )
}

export default SearchModal;