
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
