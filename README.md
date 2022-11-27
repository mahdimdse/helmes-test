# Getting Started with Create React App and with Material-UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the Task
The main enjoying part for me was using `react-redux`. For the searching it saves the value in the cookie for faster response. I have made the Search record to store upto 10 records and them removing the older searches. The view changing also has redux and cookie set, so the view doesn't change even after page refreshing. 
Most of the components are dynamic and I developed them as micro as possible. The Searching works with any of the information of any users. For a small amount of `API` loading flavor, there is a `setTimeOut` in the Find button. The search records chips are clickable and they will populate the search input field. 

Extra Work: I implemented a filter for how many last search records the user wants to see. Initially it's the length of the search records and it's changable. 

Happy testing!

## Available Scripts

In the project directory, you can run:

**Note: Please install it with `node 16.0.0 (atleast)`**

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

I didn't put too much time on the unit testing. It has only one test done.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



