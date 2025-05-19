import { useState } from 'react'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default function Home() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const callApi = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/hello?firstName=${encodeURIComponent(name)}`)
      const data = await res.json()
      setMessage(data.message)
    } catch (err) {
      setMessage('API call failed')
    }
  }

  return (
    <main style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>RainPath -- Tauri + Next.js Demo</h1>
      <input
        type="text"
        placeholder="Enter first name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={callApi} style={{ padding: '8px 12px', fontSize: '16px' }}>
        Submit
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{message}</p>
    </main>
  )
}
