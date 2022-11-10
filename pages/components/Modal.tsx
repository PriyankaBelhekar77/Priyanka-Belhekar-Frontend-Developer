
interface ModalProps {
  onClose: () => void;
  content: React.ReactElement;
}

const Modal = ({ onClose, content }: ModalProps) => {
  return (
    // modal overlay
    <div className="fixed top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,0.6)] flex justify-center items-center" onClick={onClose}>
      {/** Modal container */}
      <div className="w-40 h-40 bg-white inline-block rounded">
         {/** Modal Header */}
        <div>
        </div>
        {/** Modal Content */}
          {content}
        <div>
        </div>
      </div>
    </div>
  )
}

export default Modal;