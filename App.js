import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Main />
            </NavigationContainer> 
        </Provider>   
    )
};

