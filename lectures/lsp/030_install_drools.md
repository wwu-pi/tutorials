---
layout: recipe
title: Installing Drools
---

<div class="tip" markdown="1">
   <b>The Drools Eclipse Integration mentioned below is no longer maintained.</b> We recommend building your Drools project using [Maven](../acse/020_build_automation.html) instead. Use the sample project provided on the Learnweb course page as a starting point. You can use your favourite editor for development.
</div>

**Windows, Mac and Linux (Ubuntu):**

1. [Download](https://www.eclipse.org/downloads/packages/release/2023-09/r/eclipse-ide-java-developers) and install Eclipse IDE for Java Developers (2023-09). You might want to create a new workspace for your LSP projects.

2. [Download](https://download.jboss.org/drools/release/7.74.1.Final/droolsjbpm-integration-distribution-7.74.1.Final.zip) Drools 7.74.1 and extract the zip archive to any folder.

3. Install JBoss Tools 4.25.0:

   * Run Eclipse IDE.

   * Select **Help** > **Eclipse Marketplace...**.
   
   * Install **JBoss Tools 4.25.0.Final**

   * We will only need **JBoss Tools Java Standard Tools**. The other tools are optional.
   
4. Install the Drools Eclipse Integration:

   * Select **Help** > **Install New Software...**.
   
   * In the **Work with:** combo box type: https://download.jboss.org/drools/release/7.48.0.Final/org.drools.updatesite/
   
   * Click **Select all**.

   * Make sure the checkbox "Contact all update sites during install to find required software" is checked.

5. Create Drools Runtime:
   
   * Select **Preferences** > **Drools** > **Installed Drools Runtime** > **Add...** .
   
   * Choose any name and select the folder `binaries` of the drools archive, you have installed in Step 2. The version is determined automatically.
   
   * Click **OK** > **Apply and Close** 

6. Create Test Project:

   * In Eclipse switch to the **Drools perspective** (**Window** > **Perspective** > **Open Perspective** > **Other** > **Drools**).
   
   * Choose **File** > **New** > **Drools Project**
	
   * Now you can choose to create a new project with example files and click **Next**.
	
   * Enter a project name, select the drools runtime created earlier, and select **Add a sample HelloWorld rule file to this project**. Click **Finish**.
	
   * Open the class that contains the main method. It is located in the package `com.sample`.
   
   * In order to execute the project, right-click the editor and select **Debug As** > **Drools Application**. Observe the output. 
    
   * You can ignore the SLF4J warnings or [download](https://www.slf4j.org/download.html) the latest version and add the `slf4j-simple-x.x.xx.jar` to the project's build path (right click the project > **Build Path** > **Add External Archives** > choose `slf4j-simple-x.x.xx.jar` > **OK**).


