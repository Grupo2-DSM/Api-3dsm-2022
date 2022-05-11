import { BrowserRouter} from 'react-router-dom';
import { PathRoutes } from './Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <PathRoutes />
    </BrowserRouter>
  );
}
