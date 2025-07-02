import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import PBList from './speedrun-pbs/PBList.tsx';
import PBGame from './speedrun-pbs/PBGame.tsx';
import PBDetails from './speedrun-pbs/PBDetails.tsx';


createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="speedrun-pbs">
                    <Route index element={<PBList />} />
                    <Route path=':game'>
                        <Route index element={<PBGame />} />
                        <Route path=':category' element={<PBDetails />} />
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)
