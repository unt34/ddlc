'use client'

import { useSearchParams } from 'next/navigation'
import Timer from '../components/timer'

export default function Page() {
    const searchParams = useSearchParams()

    const label = searchParams.get('label')
    const date = searchParams.get('date')

    return (
        <main>
            <Timer
                date={`${date ? date : '2024-01-01T00:00:00.000-05:00'}`}
                label={` - ${label ? label : 'Default'}`}
            >
            </Timer>
        </main>
    )
}