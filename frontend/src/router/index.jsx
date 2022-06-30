import { Routes, Route } from 'react-router-dom';

import ViewIndex from '../views/index';
import ViewChoose from '../views/plan/choose';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<ViewIndex />} />
            <Route path='/plan/choose' element={<ViewChoose />} />
        </Routes>
    )
}