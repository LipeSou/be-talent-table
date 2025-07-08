import DefaultLayout from '@/layout/DefaultLayout';
import Home from '@/pages/Home';
import { Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
