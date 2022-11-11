import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import useDropdown from "./hooks/useDropdown";

const Search = ({ capsules, setState }: any) => {
  const [status, setStatus] = useState('');
  const [launchDate, setLaunchDate] = useState<string | number>('');
  const [type, setType] = useState('');

  const { types, status: statuses, date} = useDropdown({ capsules });

  const onChange = (e: any) => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => capsule.capsule_serial.includes(e.target.value));
      return newState;
    })
  }

  useEffect(() => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => {
        if (status === '') return true;
        return capsule.status === status;
      });
      return newState;
    });
  }, [status])

  useEffect(() => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => {
        if (type === '') return true;
        return capsule.type === type;
      });
      return newState;
    });
  }, [type])

  useEffect(() => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => {
        if (launchDate === '') return true;
        const year = new Date(capsule.original_launch).getFullYear().toString();
        return year === launchDate;
      });
      return newState;
    });
  }, [launchDate])

  const onClearFilter = () => {
    setStatus('');
    setLaunchDate('');
    setType('');
  }

  return (
    <div className="w-full flex flex-wrap justify-between gap-4 px-4">
      <input className="border border-gray-300 rounded" placeholder="enter name" onChange={onChange} />
      <Dropdown label="Status" value={status} onSelect={setStatus} options={statuses} />
      <Dropdown label="Launch Date" value={launchDate} onSelect={setLaunchDate} options={date} />
      <Dropdown label="Type" value={type} onSelect={setType} options={types} />
      <button className="grow py-2 px-3 cursor-pointer leading-tight text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700" onClick={onClearFilter}>Clear filters</button>
    </div>
  )
}

export default Search;