export interface AuthorInfo {
  authorShortText: string
  authorsWithCommas: string
}

export function extractAuthorInfo(authors: string[] | undefined): AuthorInfo {
  let authorShortText = 'Unknown Author'
  let authorsWithCommas = 'Unknown Author'
  if (authors) {
    authorShortText = authors.length > 1 ? `${authors[0]} et al.` : authors[0]
    authorsWithCommas = authors.join(', ')
  }
  return { authorShortText, authorsWithCommas }
}
