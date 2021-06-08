import AppRouting from './app-routing'
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <AppRouting></AppRouting>
    </Provider>
  );
}

export default App;
