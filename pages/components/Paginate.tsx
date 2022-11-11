import usePaginate from "./hooks/usePaginate";

interface PaginateProps {
  totalCount: number;
  currentPage: number;
  onPageChange: Function;
  itemsOnEachPage: number;
}

const Page = ({ pageNumber, active, onClick }: { pageNumber: number, active: boolean, onClick: Function }) => {
  const onPageChange = () => {
    onClick(pageNumber);
  }
  return (
    <li 
      className={`py-2 px-3 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${active && 'bg-gray-100 text-gray-700'}`}
      onClick={onPageChange}
    >
      {pageNumber}
    </li>
  )
}

const Paginate = ({ totalCount, itemsOnEachPage, currentPage, onPageChange }: PaginateProps) => {
  const paginateRange = usePaginate({
    totalCount,
    itemsOnEachPage
  });
  const lastPage = paginateRange[paginateRange.length - 1];
  const onNext = () => {
    if (currentPage !== lastPage) {
      onPageChange(currentPage + 1)
    }
  }
  const onPrevious = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1)
    }
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li 
          onClick={onPrevious}
        >
          <button className="py-2 px-3 ml-0 enabled:cursor-pointer leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 enabled:hover:bg-gray-100 enabled:hover:text-gray-700" disabled={currentPage === 1}>Previous</button>
        </li>
        {paginateRange.map(page => <Page key={page} pageNumber={page} active={page === currentPage} onClick={onPageChange} />)}
        <li 
          onClick={onNext}
        >
          <button className="py-2 px-3 enabled:cursor-pointer leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 enabled:hover:bg-gray-100 enabled:hover:text-gray-700" disabled={currentPage === lastPage}>Next</button>
        </li>
      </ul>
    </nav>
  )
}

export default Paginate;