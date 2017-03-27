---
layout: recipe
title: Running and extending a sample app
---

## Contents

1. [Running the Example Application with Docker](#run)
1. [Importing the Example Application into Eclipse](#import)

## <a id="run" name="run"></a>Running the Example Application
In case you ask yourself, what benefit exists from installing and configuring Docker, the main reason is the simple deployment of applications through Docker containers.
To see the example Java EE application of a library application in action requires only two steps:

1. Make sure **Docker** is properly **installed** and configured ([tutorial](010_setting_up_environment_with_docker.html)).
1. Open your Docker command line and run
```
docker run -it -p 8080:8080 wwupi/library-application
```


## <a id="import" name="import"></a>Importing the Example Application into Eclipse
This tutorial will show how to import a Java EE application using the example of a library application. It allows you to quickly get started with Eclipse, Java EE and JBoss Tools. The next section, [Creating an Enterprise Application from scratch](#create), will show how you can create your own Java EE projects.

1. Make sure **Docker** and **Eclipse with JBoss Tools Plug-in** are properly **installed** and configured ([tutorial](010_setting_up_environment_with_docker.html)).
1. **Start Eclipse** and make sure the **Java EE perspective** is opened.
1. **Download** the [library application source files](https://github.com/wwu-pi/library-application/archive/master.zip) or **clone** the [library application project](https://github.com/wwu-pi/library-application/) to a temporary folder.
1. **Select** *File* > *Import...* from the Eclipse menu bar.
1. Choose *General* > *Existing Projects into Workspace* and click next.
1. Choose **"Select archive file"** and browse to the archive from step 1.
1. **Four projects** called Library, Library-EJB, Library-Persistence and Library-Web should appear under "Projects". Make sure all four are selected and **"Finish"**.
1. The project explorer should now contain the four projects. Eclipse will automatically validate and build the projects.

    ![](images/library_projects.png)

1. <a id="import-deploy" name="import-deploy" />In the "Servers" tab, **right-click** on your **WildFly 10 server** and select **"Add and Remove..."**.

    ![](images/library_add.png)

1. Select the **library application** and click *Add >*, then "Finish. <small>Should Eclipse fail to display any applications, ensure that all EAR projects in the workspace contain an ``EarContent`` directory. In case the project was imported from VCS (e.g. git), an empty ``.gitkeep`` file within ``EarContent`` will ensure the directory is always present.</small>
1. You don't have to start the server from within Eclipse, as it is managed by Docker. In the "Servers" tab, **right-click** on the WildFly server and **click on "Publish"**. This will create the package in the deployment directory specified in [Step 11 of the installation](010_setting_up_environment_with_docker.html).
1. Check the current IP of docker using ``docker-machine ip``. On your local machine, this might output something like ``192.168.99.100``.
1. In your Docker command line, fire up the docker container for the Wildfly server and pass this directory to the virtual filesystem using
```
docker run -it -p 8080:8080 -v /dockerShared/deployments:/opt/jboss/wildfly/standalone/deployments/:rw wwupi/wildfly-acse-2017
```
<small>For Windows users: Watch the conversion of backslashes to forward slashes.</small>
1. Wait until the application has been deployed. The Library web application is then accessible under [http://dockerIP:8080/Library-Web/](http://dockerIP:8080/Library-Web/) using the IP from Step 10.

---
