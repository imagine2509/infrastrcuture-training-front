import {useQuery} from '@tanstack/react-query'
import type {ApiResponse, PingResponse} from './types'

const BASE_URL = import.meta.env.VITE_API_URL

const fetchApi = async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    return response.json()
}

export const appApi = {
    ping: {
        queryKey: ['app', 'ping'] as const,
        queryFn: () => fetchApi<ApiResponse<PingResponse>>('/ping'),
    },
}

export const usePing = () => {
    return useQuery({
        ...appApi.ping,
        enabled: false,
    })
}