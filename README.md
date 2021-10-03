# Mobile developer challenge

Mobile application for iOS and Android built in React Native for managing your documents. 

## Features

### Required

* Display documents as a list view or as a grid view.
* Sort documents by name, version, created or updated date, in ascending or descending direction.
* Create and upload new documents.
* Receive and review real time notifications about newly created documents.

### Optional

* Pull to refresh the documents list.
* Display the notifications date in relative formatting.

## Installation

1. Download or fork this project
2. Go to your projects' directory
3. Run `yarn`
4. For iOS devices or simulators, run the following: `cd ios && pod install && cd ..`

## Local execution

### iOS

`yarn ios`

### Android

`yarn android`

## Development

### Tests

`yarn test`

### Linting

`yarn lint`

## Notes

My development environment is a Macbook Pro with xCode 13.0 with development target for iOS 15. I had to comment line 24 of the file `ios/Podfile` to be able to run the application on iOS simulators or devices. If you have any problem to run my application, I don't think that you will, uncomment that line and do `cd ios && pod install && cd ..` all over again.

For Android, you will not have any issues.

## Follow up

### General design and ideas

I based my applications' architecture on another production application scheleton that is optimized for readability and, most important, scalability. The basic scheleton is:

* __src/components__ for every visual component of the application, separated by folder. Each component has its' own style file.
* __src/helpers__ for every helper that aims to make an easier reutilisation accross the application of a third party library (f.e. axios) or any other thing.
* __src/redux__ for all of the things related to Redux (Reducers, Actions, Selectors, Sagas, Store, etc.)
* __src/screens__ for every screen of the application, each one with its' own style file.
* __src/services__ for every service of the application. I consider a service any module that aims to communicate to an external API or any module that you need to reutilise accross the application.
* __src/themes__ for every style that is shared accross the entire application.
* __src/utils__ for every module that handles utilities functions that are used accross the application.

My thought and work process was:

1. Start from a bare React Native Cli application and reorganize the files to achieve the intended architecture.
2. Mock documents data in the application root screen.
3. Implement the visual components.
4. Add services for communication with the APIs.
5. Add redux, design and test the state.
6. Add behaviour to the visual components, based on the requirements and the data received from the APIs.
7. Add testing suite and fix any errors that may have appeared.
8. Final functional testing on iOS and Android before delivering.

### Which parts are you most proud of? And why?

I'm very proud on how I was able to deliver a clean solution with a good architecture with reutilisation of specific components. I'm also very proud on how I was able to develop a clean and quick service for obtaining and uploading the documents that can be used in the entire application. I'm sure that with these things my application is not only prepared for production but also scalable.

On the other hand, I'm proud of overall my solution because I was able to understand, without any previous knowledge about it, how websockets connections work on React Native and use them correctly.

### If you had more time, what further improvements or new features would you add?

I would have worked more on the testing suite, as I only had the time to write thee unit testing of the visual components. I was not able to write the testing suite for the screens and I also would like to have worked on the testing of the services, utils and redux.

I also would have improved the UI, as some details, colors, and fonts sizes are not correct. Also, my application does not look well on bigger screens, so I would have worked on improving the UI for them as well.

### What libraries did you add to the frontend? What are they used for?

I just added these libraries:

- axios: is a promise based HTTP client for communication. I used it to do the GET and POST calls to the Documents API of the development server provided. I installed it because I think this is one of the cleaniests ways to handle communications with an API, also it is one of the most common used libraries for HTTP communication today.
- moment: is a library for easily manipulating dates in Javascript. I used it to obtain the dates in a relative formatting when you open a notification. Although this library is no longer maintained, it is still very usefull and easy to use. Of course, you can do yourself all of the things moment does, but, for the limited time I had, I preferred to use it.
- react-native-vector-icons: library used to display vector icons in React Native.
- react-redux, redux, redux-saga, reduxsauce, seamless-immutable: these are all libraries for the redux and redux-saga integration of the APP, which I used for doing the calls to the development server and mantaining the state of the entire application, for example, the documents list. I consider Redux the best to cleanly maintain an applications' state and Redux-Sagas one of the most structured and organized ways to handle the Redux events and communicate with APIs.
- websocket: is a library for handling websockets connections. I used it to open a connection and receive messages from the Notifications API of the providedd development server.
