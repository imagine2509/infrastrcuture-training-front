import {QueryProvider} from './providers'
import {HomePage} from '@pages/home'

export const App = () => {
    return (
        <QueryProvider>
            <div id="app">
                <HomePage/>
            </div>
        </QueryProvider>
    )
}