import { useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';

interface ModalProps {
  onClose: () => void;
  content: React.ReactElement;
  header: React.ReactElement;
}

const Modal = ({ onClose, content, header }: ModalProps) => {
  useEffect(() => {
    const stopScroll = () => window.scrollTo(0, 0)
    window.addEventListener('scroll', stopScroll);
    return () => window.removeEventListener('scroll', stopScroll);
  }, [])
  return (
    <>
    {/** modal overlay */}
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.6)]" onClick={onClose}>
      </div>
      {/** Modal container */}
      <div className="w-screen h-screen fixed top-0 md:w-80 md:h-max z-20 bg-white inline-block rounded">
        <div className="absolute right-2 top-1 cursor-pointer hover:opacity-50">
          <button onClick={onClose}><IoIosClose size={'2em'} /></button>
        </div>
         {/** Modal Header */}
        <div className="py-1 px-2">
          {header}
        </div>
        {/** Modal Content */}
        <div className="px-4 py-4">
          {content}
        </div>
      </div>
    </>
  )
}

export default Modal;