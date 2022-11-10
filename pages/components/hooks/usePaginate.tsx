import { useMemo } from "react";

interface UsePaginateProps {
  totalCount: number;
  itemsOnEachPage: number;
}

const range = (start: number, end: number): Array<number> => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const isInt = (n: number) => n % 1 === 0;

const usePaginate = ({ totalCount, itemsOnEachPage }: UsePaginateProps): Array<number> => {
  const paginationRange = useMemo(() => {
    if (isInt(totalCount/itemsOnEachPage)) {
      return range(1, totalCount/itemsOnEachPage)
    } else {
      return range(1, Math.floor(totalCount/itemsOnEachPage + 1))
    }
  }, [totalCount, itemsOnEachPage])
  return paginationRange;
};

export default usePaginate;