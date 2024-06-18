export default function Paginate({
  maxPage,
  currentPage,
  pageCall
}: {
  maxPage: number
  currentPage: number
  pageCall: (page: number) => void
}) {
  const pages = []
  for (
    let i = Math.max(currentPage - 2, 1);
    i <= Math.min(currentPage + 2, maxPage);
    i++
  ) {
    pages.push(i)
  }
  const pageLink = (page: number) => {
    return (
      <a
        key={page}
        onClick={() => pageCall(page)}
        className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
      >
        {page}
      </a>
    )
  }

  return (
    <div className="flex justify-center space-x-2">
      {currentPage > 3 ? pageLink(1) : ''}
      {pages.map((page) => pageLink(page))}
      {currentPage < maxPage - 2 ? pageLink(maxPage) : ''}
    </div>
  )
}
