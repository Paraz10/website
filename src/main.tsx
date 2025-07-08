import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import PBList from './speedrun-pbs/PBList.tsx';
import PBDetails from './speedrun-pbs/PBDetails.tsx';
import Layout from './layout/Layout.tsx';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />

                <Route path="speedrun-pbs">
                    <Route index element={<PBList />} />
                    <Route path=':game/:category' element={<PBDetails />} />

                </Route>

                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
)
