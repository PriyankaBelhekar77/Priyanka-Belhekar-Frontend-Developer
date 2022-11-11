import { useMemo } from "react";
import { Capsules } from "../..";

const useDropdown = ({ capsules = [] }: { capsules:Capsules }) => {
  const types = useMemo(() => {
    const uniqueTypes = new Set();
    capsules.forEach(capsule => uniqueTypes.add(capsule.type));
    return Array.from(uniqueTypes);
  }, [capsules]) as Array<string>

  const status = useMemo(() => {
    const uniqueTypes = new Set();
    capsules.forEach(capsule => uniqueTypes.add(capsule.status));
    return Array.from(uniqueTypes);
  }, [capsules]) as Array<string>

  const date = useMemo(() => {
    const uniqueTypes = new Set();
    capsules.forEach(capsule => {
      const date = new Date(capsule.original_launch);
      return uniqueTypes.add(date.getFullYear())
    });
    return Array.from(uniqueTypes);
  }, [capsules]) as Array<number>

  return [types, status, date];
}

export default useDropdown;