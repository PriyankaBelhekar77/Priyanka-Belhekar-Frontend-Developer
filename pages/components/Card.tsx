import type { Capsule } from "..";

const Card = (props: Capsule) => {
  return (
    <div className="w-40 h-40 bg-slate-400">
      {props.capsule_serial}
    </div>
  )
}

export default Card;