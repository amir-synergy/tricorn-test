'use client';

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function HomePage() {
    const router = useRouter()

    useEffect(() => {
        router.push('/dashboard')
    }, [router])

    return <div></div>
}

export default HomePage;