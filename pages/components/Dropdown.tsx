interface Dropdown {
  label: string;
  value: string | number;
  onSelect: Function;
  options: Array<string|number>;
}

const Dropdown = ({ label, value, onSelect, options }: Dropdown) => {
  return (
    <div className="flex grow items-center gap-4">
    <label>Fliter by {label}</label>
      <select className="border border-gray-300 rounded" name="pets" id="pet-select" value={value} onChange={(e) => onSelect(e.target.value)}>
          <option value="">--</option>
          {options && options.map(option => <option value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default Dropdown;