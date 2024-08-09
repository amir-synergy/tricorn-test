'use client';

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function AdminPage() {
    const router = useRouter()

    useEffect(() => {
        router.push('/admin/assessments')
    }, [router])

    return <div></div>
}

export default AdminPage;