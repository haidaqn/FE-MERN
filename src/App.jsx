import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Public from './Pages/Public/Public';
import path from './Utils/path';
import { Home } from './Pages';
import { useDispatch } from 'react-redux';
import { getCategories } from './Store/App/asyncAction';
import { getNewProducts, getOldProducts } from './Store/Product/asyncActions';

//

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <div className="min-h-screen font-main w-full">
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.HOME} element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
