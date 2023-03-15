import { HEROES_PER_PAGE } from "../heroes"

interface IPagination {
  totalCount: number
  offset: number
  onChangePage: (offset: number) => void
}

const Pagination = ({ totalCount, offset, onChangePage }: IPagination) => {
  const onPreviousClick = () => {
    onChangePage(offset - HEROES_PER_PAGE)
  }
  const onNextClick = () => {
    onChangePage(offset + HEROES_PER_PAGE)
  }

  return (
    <nav
      aria-label="Page navigation example"
      className="flex justify-center p-8"
    >
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            disabled={offset === 0}
            onClick={onPreviousClick}
            className="px-3 py-2 ml-0 leading-tight text-gray-700 border border-gray-300 rounded-l-lg enabled:hover:bg-gray-100 enabled:hover:text-gray-900 disabled:text-gray-400"
          >
            Précédent
          </button>
        </li>
        <li>
          <button
            disabled={offset + HEROES_PER_PAGE > totalCount}
            onClick={onNextClick}
            className="px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded-r-lg enabled:hover:bg-gray-100 enabled:hover:text-gray-900  disabled:text-gray-400"
          >
            Suivant
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination
