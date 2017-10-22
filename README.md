# IEEE ATEITH Student Branch
## This is our new web page.

Our branch needs a new web page. We are using this opportunity to experiment
with new to us technologies such as React.Js and NodeJS.

type `npm install` to isntall all needed modules

then `npm start` or `yarn start` to deploy the page.

In case of 'can not find an open port on _this_ machine' try to set HOST environmental variable to nothing.
by typing `HOTST=''`

Feel free to give us any advise or even point out our mistakes. It's not rude, it helps us learn better.
Any contribution is helpful.


Page structure

The `<Page />` component is the main component. It contains everything else.

The `<Page />` state contains information about:
  - Pages will be shown to the navigation and what is their key
  - Wich page is open
  - What social media tags to show

This information is stored as objects.

The main <Page /> state.openPage is a number. this number is an index that shows
what page is now open. If that number is changed, the page will change to that number.

The navigation button are able to change that number.
The pageIndexes and a local function are passed as attributes to them.
