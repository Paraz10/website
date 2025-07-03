import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import PBList from './speedrun-pbs/PBList.tsx';
import PBDetails from './speedrun-pbs/PBDetails.tsx';


createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="speedrun-pbs">
                    <Route index element={<PBList />} />
                    <Route path=':game/:category' element={<PBDetails />} />

                </Route>

                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
