import React from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import httpClient from 'httpClient';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';

import Navigation from 'navigators';
import configureStore from 'store/configureStore';

const { store, persistor } = configureStore({});
Icon.loadFont();
// Icon.loadFont();
applyDefaultInterceptors(store, httpClient);
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);

export default App;
