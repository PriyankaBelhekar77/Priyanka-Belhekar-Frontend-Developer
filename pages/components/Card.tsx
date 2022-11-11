import { useState } from "react";
import type { Capsule, Capsules } from "..";
import Modal from "./Modal";

const STATUS = {
  destroyed: 'text-orange-600	',
  retired: 'text-blue-600',
  unknown: 'text-red-600',
  active: 'text-green-600'
}

const Card = (props: Capsule) => {
  const date = new Date(props.original_launch)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="flex flex-col grow h-48 justify-center relative p-8 shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl cursor-pointer text-center rounded" onClick={() => setIsOpen(true)}>
      <h1 className="text-2xl">Capsule - {props.capsule_serial}</h1>
      <div>Status <span className={`font-bold ${STATUS[props.status]}`}>{props.status}</span></div>
      <div className="absolute top-0 left-0 w-full h-full z-10 invisible hover:visible">Click to know more</div>
    </div>
    {isOpen && <Modal
      onClose={() => setIsOpen(false)}
      header={<h3 className="text-xl">Additional Details</h3>} 
      content={<div className="px-2">
        <div>Type <span className="font-semibold">{props.type}</span></div>
        <div>Launch Date <span className="font-semibold">{date.toDateString()}</span></div>
        <div>Details <span className="font-semibold">{props.details ?? 'not available'}</span></div>
        <div>Landings <span className="font-semibold">{props.landings}</span></div>
        <div>Launch Unix <span className="font-semibold">{props.original_launch_unix ?? 'not available'}</span></div>
        <div>Reuse Count <span className="font-semibold">{props.reuse_count}</span></div>
        <div>Mission Details {props.missions.length ? props.missions.map((mission, index) => <div className="pl-4" key={mission.flight}>
          <div>- Name <span className="font-semibold">{mission.name}</span></div>
          <div className="pl-3">Flight <span className="font-semibold">{mission.flight}</span></div>
        </div>) : <span className="font-semibold">not available</span>}
        </div>
      </div>}
      />}
    </>
  )
}

const Cards = ({ currentData }: { currentData: Capsules }) => {
  return (
    <div className="relative flex flex-wrap gap-10 justify-center md:min-h-[500px] px-4 md:px-0">
        {currentData && currentData.map(capsule => <Card key={capsule.capsule_serial} {...capsule} />)}
    </div>
  )
}

export default Cards;