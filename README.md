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
