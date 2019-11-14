import React, { useState, useEffect } from 'react'

const ExampleComponent = () => {
  const [count, setCount] = useState(0)
  const [resultado, setResultado] = useState(0)

  useEffect(() => {
    setResultado(count * 2)
  }, [count])

  return (
    <div>
      <p>A expressao: {count} * 2 = {resultado}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default ExampleComponent