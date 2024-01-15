// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Cart from './components/Cart'; 

function App() {
  return (
    <Provider store={store}>
      <div>
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
