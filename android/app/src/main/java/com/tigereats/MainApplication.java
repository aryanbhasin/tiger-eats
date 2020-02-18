package com.tigereats;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.airbnb.android.react.maps.MapsPackage;
import cl.json.RNSharePackage;
import com.proyecto26.inappbrowser.RNInAppBrowserPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativecommunity.geolocation.GeolocationPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFetchBlobPackage(),
            new MapsPackage(),
            new RNSharePackage(),
            new RNInAppBrowserPackage(),
            new ReanimatedPackage(),
            new NetInfoPackage(),
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new GeolocationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
