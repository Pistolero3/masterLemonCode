import OrderInfo from './components/OrderInfo/OrderInfo';
import DetailList from './components/DetailList/DetailList';
import { MyContextProvider } from './ContextProvider';

import './App.css';

function App() {
    return (
        <MyContextProvider>
            <OrderInfo />
            <DetailList />
        </MyContextProvider>
    );
}

export default App;
