## Uniplaces Photography Mobile Application

Uniplaces Photography Mobile Application is an application based in the [Ionic Framework](http://ionicframework.com/). In order to run this application make sure that you have [Node.js](http://nodejs.org/) and Ionic installed in your local machine.

### Running the application locally
To run the application at the browser of your local machine, go to the directory `/mobile` directory and execute the command:

```sh
$  ionic serve
```

Ionic applications can be executed in Android emulators and iOS emulators. To run the application in a Android emulator execute the following commands:

```sh
$  ionic platform add android
$  ionic build android
$  ionic emulate android  
```
To run the application in the iOS emulator execute the commands above substituting the **android** field by **ios**.

### Running the application in a mobile device
You can install the application in a real device too. To execute the application in a Android device, enable the device Developer Mode and execute the following commands:

```sh
$  ionic platform add android
$  ionic build android
$  ionic run android  
```
To install the application in a iOS device you need to have an Apple Developer License. For further instructions check the documentation.
