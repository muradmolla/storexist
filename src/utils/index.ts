export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}
export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str
}
