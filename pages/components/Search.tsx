import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import useDropdown from "./hooks/useDropdown";

const Search = ({ capsules, setState }: any) => {
  const [types, statuses, date ] = useDropdown({ capsules });
  const [status, setStatus] = useState('select from list');
  const [launchDate, setLaunchDate] = useState<string | number>('select from list');
  const [type, setType] = useState('select from list');

  const onChange = (e: any) => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => capsule.capsule_serial.includes(e.target.value));
      return newState;
    })
  }

  useEffect(() => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => {
        if (status === 'select from list') return true;
        return capsule.status === status;
      });
      return newState;
    });
  }, [status, capsules, setState])

  useEffect(() => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => {
        if (type === 'select from list') return true;
        return capsule.type === type;
      });
      return newState;
    });
  }, [type, capsules, setState])

  useEffect(() => {
    setState(() => {
      const newState = capsules.filter((capsule: any) => {
        if (launchDate === 'select from list') return true;
        const year = new Date(capsule.original_launch).getFullYear().toString();
        return year === launchDate;
      });
      return newState;
    });
  }, [launchDate, capsules, setState])

  const onClearFilter = () => {
    setStatus('select from list');
    setLaunchDate('select from list');
    setType('select from list');
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