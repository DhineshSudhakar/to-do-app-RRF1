import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider, useSelector } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from './firebaseConfig'
import { createFirestoreInstance } from 'redux-firestore'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth))
    return (
      <div className="text-center">
        <div
          className="spinner-grow text-primary"
          style={{ width: "7rem", height: "7rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  return children
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ReactReduxFirebaseProvider {...rrfProps} >
        <AuthIsLoaded >
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

