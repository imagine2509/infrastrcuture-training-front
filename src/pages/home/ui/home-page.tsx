import {usePing} from '@entities/api'
import {Button} from '@shared/ui'

export const HomePage = () => {
    const {data: pingData, isLoading, error, refetch} = usePing()

    const handlePing = () => {
        refetch()
    }

    return (
        <div className="min-h-screen flex items-center justify-center"
             style={{background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)', padding: '2rem'}}>
            <div className="w-full text-center border" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(16px)',
                borderRadius: '1.5rem',
                padding: '3rem',
                maxWidth: '28rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
            }}>
                <h1 style={{
                    fontSize: '2.25rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '2rem',
                    lineHeight: '1.2'
                }}>
                    Infrastructure Training
                </h1>

                <div style={{marginBottom: '2rem'}}>
                    <Button
                        onClick={handlePing}
                        disabled={isLoading}
                        variant="gradient"
                        size="lg"
                        className="min-w-[180px]"
                        style={{fontSize: '1.125rem', fontWeight: '600', borderRadius: '0.75rem'}}
                    >
                        {isLoading ? 'Проверяем...' : 'Проверить API'}
                    </Button>
                </div>

                {error && (
                    <div className="border" style={{
                        background: 'rgba(239, 68, 68, 0.2)',
                        borderColor: 'rgba(248, 113, 113, 0.3)',
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        color: '#fecaca',
                        marginTop: '1rem',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <p style={{fontWeight: '600', marginBottom: '0.5rem'}}>
                            Ошибка подключения к API
                        </p>
                        <p style={{fontSize: '0.875rem', opacity: '0.8'}}>
                            {error.message}
                        </p>
                    </div>
                )}

                {pingData && (
                    <div className="border" style={{
                        background: 'rgba(34, 197, 94, 0.2)',
                        borderColor: 'rgba(74, 222, 128, 0.3)',
                        borderRadius: '0.75rem',
                        padding: '1rem',
                        color: '#bbf7d0',
                        marginTop: '1rem',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <p style={{fontWeight: '600', marginBottom: '0.5rem'}}>
                            ✅ API успешно подключен
                        </p>
                        <div style={{fontSize: '0.875rem', opacity: '0.8'}}>
                            <p style={{marginBottom: '0.25rem'}}>
                                <strong>Статус:</strong> {pingData.data.status}
                            </p>
                            <p>
                                <strong>Время:</strong> {new Date(pingData.data.timestamp).toLocaleString('ru-RU')}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}