import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import { NativeModules } from 'react-native';

let packagerHostname = 'localhost';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  packagerHostname = scriptURL.split('://')[1].split(':')[0];
}

if (__DEV__) {
  Reactotron.configure({ name: 'HooksDemo', host: packagerHostname })
    .useReactNative()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hackly, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
