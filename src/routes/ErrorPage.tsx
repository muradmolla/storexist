import { useRouteError } from 'react-router-dom'

interface RouteError {
  data: string
  error: {
    columnNumber: number
    fileName: string
    lineNumber: number
    message: string
    stack: string
  }
  internal: boolean
  status: number
  statusText: string
}
export default function ErrorPage() {
  const error = useRouteError() as RouteError
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{error.status}</h1>
      <p className="text-gray-500">{error.statusText}</p>
    </div>
  )
}
