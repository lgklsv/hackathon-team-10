import { useEffect, useState } from 'react'

export default function RootPage() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    fetch('/api/test/654eb5a275673c260b8074d2')
      .then((res) => res.json())
      .then((res) => setGreeting(res.message))
  }, [])
  return <h1>{greeting}</h1>
}
