import { Routes, Route } from 'react-router-dom';

import ViewIndex from '../views/index';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<ViewIndex />} />
        </Routes>
    )
}