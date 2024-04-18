
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



<a name="br2"></a> 

Navigate to public\_html Directory:

Go to student-academic-council:

Upload the Zip File:



<a name="br3"></a> 

Delete all existing folders in the student-academic-council directory & Extract the contents of the

uploaded zip file into the same directory.

move all files and folders from the build folder to the path: /student-academic-council/

Now, You may delete the build zip and build directory.

Open the index.html file. it will look like the following:



<a name="br4"></a> 

Adjust the paths in icon links, manifest links, scripts, and CSS links by adding

"/student-academic-council" at the beginning of each path.

Save Changes:

Check the Website:

Visit the website at the following URL to ensure that it's working correctly:

<https://students.iitgn.ac.in/student-academic-council/>

By following these steps, you should have successfully deployed the React application to the

specified location on the server.
