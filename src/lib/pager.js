export default function pageNav (currentPage, totalPages) {
  let pageNumbers = []
  let interval = 3
  let gap = '...'
  let window = [currentPage - interval, currentPage + interval]

  if (window[0] > 1) {
    pageNumbers.push(1)
    if (window[0] > 2) {
      pageNumbers.push(2)
      if (window[0] > 4) {
        pageNumbers.push(gap)
      }
    }
  }
  for (var i = window[0]; i <= window[1]; i++) {
    if (i > 0 && i <= totalPages) {
      pageNumbers.push(i)
    }
  }
  if (window[1] <= totalPages - 4) {
    pageNumbers.push(gap)
    pageNumbers.push(totalPages - 1)
    pageNumbers.push(totalPages)
  } else if (window[1] >= totalPages - 3) {
    if (window[1] <= totalPages) {
      for (var j = window[1] + 1; j <= totalPages; j++) {
        pageNumbers.push(j)
      }
    }
  }
  return pageNumbers
}
