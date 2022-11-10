import { ChangeEventHandler } from "react";

const Search = ({ capsules, setState }: any) => {
  const onChange = (e: any) => {
    console.log(e.target.value)
    setState(() => {
      const newState = capsules.filter((capsule: any) => capsule.capsule_serial.includes(e.target.value));
      console.log(newState)
      return newState;
    })
  }
  return (
    <input placeholder="enter name" onChange={onChange} />
  )
}

export default Search;