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
    {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default Card;