import { useState } from "react";
import type { Capsule } from "..";
import Modal from "./Modal";

const Card = (props: Capsule) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="relative w-40 h-40 bg-slate-400 cursor-pointer text-center rounded" onClick={() => setIsOpen(true)}>
      {props.capsule_serial}
    </div>
    {isOpen && <Modal 
      onClose={() => setIsOpen(false)} 
      content={<div className="px-2">
        <div><span>{props.capsule_serial}</span></div>
        <div><span>{props.details}</span></div>
        <div><span>{props.landings}</span></div>
      </div>}
      />}
    </>
  )
}

export default Card;