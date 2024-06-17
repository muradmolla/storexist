export default function AddToCart({ id }: { id: string }) {
  console.log('AddToCart', id)
  return <button className="rounded bg-green-400 px-2">Add to Cart</button>
}
