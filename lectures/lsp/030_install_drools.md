---
layout: recipe
title: Installing Drools
---

**Windows, Mac and Linux (Ubuntu):**

1. [Download](https://www.eclipse.org/downloads/) and install Eclipse IDE.

2. Install the GEF Plugin for Eclipse:

   * Run Eclipse IDE.

   * Select **Help** > **Install New Software...**.
   
   * In the **Work with:** combo box type: http://download.eclipse.org/tools/gef/updates/releases/
   
   * Select "Graphical Editing Framework GEF".
   ![Select the GEF plugin](images/gef_plugin.png)
   
3. Install Drools:
   * Select **Help** > **Install New Software...**.
   
   * In the **Work with:** combo box type: http://download.jboss.org/drools/release/6.1.0.Final/org.drools.updatesite/
   
   * Select all.
   ![Select all](images/drools_plugin.png)
   
   * Make sure the checkbox "Contact all update sites during install to find required software" is checked.

4. Create Drools Runtime:
   * In Eclipse switch to the Drools view (upper right corner).
   
   * Select **File** > **New** > **Drools project**.
   
   * Choose a name and click "Next".
   ![Choose name](images/newproject.png)
   
   * Click "Next".
   ![Add sample](images/addsample.png)
   
   * Click "Configure Workspace Settings...".
   ![Config workspace settings](images/chooseruntime.png)
   
   * Click "Add...".
   ![Add runtime](images/add.png)
   
   * Click "Create a new Drools 6 Runtime..." and choose a directory to create the Drools Runtime.
   ![Create runtime](images/createnewruntime.png)
   
   * Select the created Drools Runtime and clock "OK".
   ![Select runtime](images/addedruntime.png)
   
   * Click "Finish" to create the project.
   ![Finish](images/finish.png)


