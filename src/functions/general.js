export function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// *********************************** Opens 'url' on in-app browser ***********************************

import {Linking} from 'react-native'
import InAppBrowser from 'react-native-inappbrowser-reborn';
import checkInternetConnection from 'TigerEats/src/components/flash-messages/check-connection'
import {colors} from 'TigerEats/src/styles'

export async function openLink(url) {
  let isInternetConnected = checkInternetConnection();
  console.log(checkInternetConnection())
  if (isInternetConnected) {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'done',
          preferredControlTintColor: colors.orange,
          // android Properties
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: true,
        });
      } else {
        Linking.canOpenURL(url)
          .then(() => Linking.openURL(url))
          .catch(error => console.error('An error occurred while opening this URL: ', error))
      }
    }
    catch (error) {
      console.log(error)
    }
  }
}