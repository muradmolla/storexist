import { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full rounded border border-gray-300 p-2"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books"
      />
    </form>
  )
}
