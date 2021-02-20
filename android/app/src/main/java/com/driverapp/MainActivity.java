package com.driverapp;
import android.os.Bundle; // here 
import com.facebook.react.ReactActivity;
// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreen; // here 
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "DriverApp";
  }
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here 
        super.onCreate(savedInstanceState);
    }
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
            return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }
}
