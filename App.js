import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';

// json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <NavigationContainer>
                    <Main />
                </NavigationContainer> 
            </PersistGate>
        </Provider>   
    )
};

