# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Deployment steps on IITGN Cpanel

<a name="br1"></a> 

**Deployment:**

1\. Build the Project:

Open your terminal and run the following command to create a build folder:

*npm run build*

2\. Create a Zip File:

After the build process, create a zip file of the build folder.

3\. Log in to the institute cPanel.

Navigate to File Manager.



Click on public\_html directory:

![Alt text](Images/Screenshot%202024-02-29%20113601.png?raw=true "Title")

<a name="br2"></a> 

Navigate to public\_html Directory:

![Alt text](Images/Screenshot%202024-02-29%20113706.png?raw=true "Title")

Go to student-academic-council:

![Alt text](Images/Screenshot%202024-02-29%20113751.png?raw=true "Title")


Upload the Zip File:
![Alt text](Images/Screenshot%202024-02-29%20113859.png?raw=true "Title")


<a name="br3"></a> 

Delete all existing folders in the student-academic-council directory & Extract the contents of the

uploaded zip file into the same directory.

move all files and folders from the build folder to the path: /student-academic-council/

Now, You may delete the build zip and build directory.

Open the index.html file. it will look like the following:

![Alt text](Images/Screenshot%202024-02-29%20114439.png?raw=true "Title")



<a name="br4"></a> 

Adjust the paths in icon links, manifest links, scripts, and CSS links by adding

"/student-academic-council" at the beginning of each path.

Save Changes:

![Alt text](Images/Screenshot%202024-02-29%20114538.png?raw=true "Title")

Check the Website:

Visit the website at the following URL to ensure that it's working correctly:

<https://students.iitgn.ac.in/student-academic-council/>

By following these steps, you should have successfully deployed the React application to the

specified location on the server.


