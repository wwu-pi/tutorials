---
layout: recipe
title: Installing Drools
---

**Windows, Mac and Linux (Ubuntu):**

1. [Download](https://www.eclipse.org/downloads/) and install Eclipse IDE (we recommend to use Eclipse Oxygen 4.7). You might want to create a new workspace for your LSP projects.

2. [Download](https://download.jboss.org/drools/release/7.3.0.Final/drools-distribution-7.3.0.Final.zip) Drools and extract the zip archive to any folder.

3. Install JBoss Tools 4.5.0

   * Run Eclipse IDE.

   * Select **Help** > **Eclipse Marketplace...**.
   
   * Install **JBoss Tools 4.5.0.Final**
   
4. Install Drools:

   * Select **Help** > **Install New Software...**.
   
   * In the **Work with:** combo box type: http://download.jboss.org/drools/release/7.3.0.Final/org.drools.updatesite/
   
   * Click **Select all**.
   
   * Make sure the checkbox "Contact all update sites during install to find required software" is checked.

5. Create Drools Runtime:
   
   * Select **Window** > **Preferences** > **Drools** > **Installed Drools Runtime** > **Add...** .
   
   * Choose any name and select the folder `binaries` of the drools archive, you have installed in Step 2. The version is determined automatically.
   
   * Click **OK** > **Apply and Close** 

6. Create Test Project

   * In Eclipse switch to the **Drools perspective** (upper right corner).
   
   * Choose **File** > **New** > **Drools Project**
	
   * Now you can choose to create a new project with example files and click **Next**.
	
   * Enter a project name, select the drools runtime created earlier, and select **Add a sample HelloWorld rule file to this project**. Click **Finish**.
	
   * Open the class that contains the main method. It is located in the package `com.sample` and has the same name as the project.
   
   * In order to execute the project, right-click the editor and select **Debug As** > **Drools Application**. Observe the output. 
    
   * You can ignore the SLF4J warnings or [download](https://www.slf4j.org/download.html) the latest version, extract the archive, and add the `slf4j-simple-x.x.xx.jar` to the project's build path (right click the project > **Build Path** > **Add External Archives** > choose `slf4j-simple-x.x.xx.jar` > **OK**).


