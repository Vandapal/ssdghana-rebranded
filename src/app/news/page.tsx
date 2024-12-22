import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NewsPage() {
  return (
    <main className='h-[80dvh] flex flex-col items-center justify-center' >
        <h1 className='text-4xl font-bold'>We&apos;ll be bringing all our latest news to you very soon!</h1>
        <Button className='mt-5 bg-orange-500 hover:bg-orange-400' asChild>
            <Link href='/'>Back Home</Link>
        </Button>
    </main >
  )
}

