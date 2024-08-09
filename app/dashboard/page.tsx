'use client';

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function DashboardPage() {
    const router = useRouter()

    useEffect(() => {
        router.push('/dashboard/home')
    }, [router])

    return <div></div>
}

export default DashboardPage;