# Rift Challenge

This repository
implements [the challenge](https://s3.amazonaws.com/attachments.angel.co/track/applicant_tracker/files/702/232063d7ab7090b5a0169c54ae2e2373/Frontend_Engineer_Coding_Challenge.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20210916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210916T172014Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=bb9922811e144d284b04596da99a27833363b59b6cbd245e11078dc116aa33d9)
from rift finance during the interview proces. The responsiblility is to create a react app which does the following


- [x] Displays the user’s current USDC balance (initialized to some default amount).

- [x] Displays interest rates for 3 primary networks (Compound at 5%, Aave at 3%, and Curve
  at 2.5%)

- [x] Allows a user to deposit custom amounts of USDC from each network.

- [x] Upon withdrawal, the “Amount deposited” and “Accrued Interest” fields should be reset
  to 0 with both of their values being added to the aggregate USDC Balance component.

- [x] Displays how much USDC a user has deposited into each network alongside a
  continuously accruing interest field showing the user how much interest they have
  earned since depositing.

- [x] To simulate the passage of time, the page should include a component that allows you to
  enter a number of days to progress which should be reflected in the interest accrued.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
