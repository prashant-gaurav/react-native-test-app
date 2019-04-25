/*---------------------------------------------------------------*
 *   @author: Prashant Gaurav                                    *
 *   @app   : TestApp                                            *
 *---------------------------------------------------------------*/

import {AppRegistry} from 'react-native'
import React from 'react'
import App from './source/Routes'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App);

