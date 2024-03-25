'use client';

interface ModalsProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
  }
const  Modals: React.FC<ModalsProps> = (
{
    isOpen, 
  onClose, 
  onSubmit, 
  title, 
  body, 
  actionLabel, 
  footer, 
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  return (
    <div>


    </div>
  )
}

export default Modals
