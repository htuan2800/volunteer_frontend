import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import AppRoutes from './routes';
import { store } from './store/store';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>
)
