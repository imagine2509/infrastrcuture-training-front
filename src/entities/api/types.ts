export interface ApiResponse<T = unknown> {
    data: T
    success: boolean
    message?: string
}

export interface PingResponse {
    message: string
}