import {usePing} from '@entities/api'
import {Button} from '@shared/ui'

export const HomePage = () => {
    const {data: pingData, isLoading, error, refetch} = usePing()

    const handlePing = () => {
        refetch()
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-8">
            <div className="bg-white rounded-3xl p-12 max-w-md w-full shadow-2xl text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
                    Infrastructure Training
                </h1>

                <div className="mb-8">
                    <Button
                        onClick={handlePing}
                        disabled={isLoading}
                        className={`min-w-[180px] text-lg font-semibold py-4 px-8 rounded-xl text-white border-none transition-all duration-300 ease-in-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:transform-none ${
                            isLoading
                                ? 'bg-gradient-to-br from-gray-400 to-gray-500 shadow-none'
                                : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-400/40 shadow-md hover:shadow-indigo-400/60 hover:shadow-lg'
                        }`}
                    >
                        {isLoading ? 'Проверяем...' : 'Проверить API'}
                    </Button>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 mt-4">
                        <p className="font-semibold mb-2">
                            Ошибка подключения к API
                        </p>
                        <p className="text-sm opacity-80">
                            {error.message}
                        </p>
                    </div>
                )}

                {pingData && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800 mt-4">
                        <p className="font-semibold mb-2">
                            ✅ API успешно подключен
                        </p>
                        <div className="text-sm opacity-80 space-y-1">
                            <p>
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