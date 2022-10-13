import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
