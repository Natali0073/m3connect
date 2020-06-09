# Test hosted web app for LG webOS
## What our app do:
Simple web app hotel preview for visitors in their rooms. 
Main screen greeting visitor, shows day of the week, time and current whether temperature. There are printer menu button to navigate through application.
Visitors can see info about restaurants and bars in the hotel, spa options, available attractions and reserve some. Info about reserved excursions are shown on the main screen under notification icon.

## What we use:
1. VueJs
2. Cloud Firestore for get user data and reserve attractions
3. Netlify to host our web app
4. Netlify cms for manage restaurants, spa and attractions data
5. webOSTV.js for get device data

## The difficulties we faced:
1. On different LG TVs were problems with the correct display of the site layout, so we focused on the proper operation of the application on our office TV.
2. Implement scrolling. The biggest problem was to get the Magic mouse wheel event to scroll the page and unfortunately, we failed with this. According to official documentation better approach is to use Enyo (for webOS v4.0 and lower) or Enact (webOS v5.0). Enyo wasn’t an option for us as we worked with webOS v5.0 and Enact is better to use with ReactJs, so we decided, that the best case in our situation is to fit all content on the view-screen without the need of scrolling.


## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Run on your TV:
webOs app is lokated here: https://github.com/Natali0073/webOS-hostedApp
You need to install it locally and run on your TV in Developer mode.

## Quick instructions:
1. Install webOS TV CLI (http://webostv.developer.lge.com/sdk/installation/)
2. Run CLI
3. Connect your PC with TV (http://webostv.developer.lge.com/develop/app-test/)
4. git clone https://github.com/Natali0073/webOS-hostedApp.git
5. cd webOS-hostedApp
6. ares-install --device YourDeviceName com.domain.app_0.0.1_all.ipk
7. ares-launch --device emulator com.domain.app
