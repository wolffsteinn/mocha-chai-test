'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  return (
    <>
    <h2>Would you like to...</h2>
    <div>
      <button type="button" onClick={() => router.push("/addition")}>Add</button>
      <button type="button">Subtract</button>
      <button type="button">Multiply</button>
      <button type="button">Divide</button>
    </div>
    </>
  )
}

export default Page