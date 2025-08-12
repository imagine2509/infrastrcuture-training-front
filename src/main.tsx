import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from '@app/providers'
import {App} from '@app/app'
import './app/styles/index.css'

const root = createRoot(document.getElementById('root')!)
root.render(
    <StrictMode>
        <RouterProvider>
            <App/>
        </RouterProvider>
    </StrictMode>,
)