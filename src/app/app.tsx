import {Route, Routes} from 'react-router-dom'
import {HomePage} from '@pages/home'
import {QueryProvider} from '@app/providers'

export function App() {
    return (
        <QueryProvider>
            <div id="app" className="min-h-screen bg-background text-foreground">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        </QueryProvider>
    )
}