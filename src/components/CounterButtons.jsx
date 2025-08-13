
export default function CounterButtons({increment, decrement}) {
  return (
    <div className='flex space-x-4'>
        <button onClick={increment} className='px-2 py-1 bg-amber-600 rounded-lg'>+</button>
        <button onClick={decrement} className='px-2 py-1 bg-blue-200 rounded-lg'>-</button>
    </div>
  )
}
