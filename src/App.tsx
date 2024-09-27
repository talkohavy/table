import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import { routes } from './routes';

const SimpleTableExamplePage = routes[0].Component;

export default function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route key={-1} path='/' element={<SimpleTableExamplePage />} />

          {routes.map(({ to: path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
