---
layout: recipe
title: Manually setting up the Development Environment
---

**Please note:** Starting with the lecture in summer 2017, we will provide Docker images for your convenience. This page describes the old, manual installation process. Please visit the [current instructions of setting up the development environment based on Docker](010_setting_up_environment_with_docker.html).

For this tutorial the installation of a suitable JDK and Eclipse version with addition plugins is required as described [here](010_setting_up_environment_with_docker.html).

## Contents

1. [Installing WildFly](#wildfly)
1. [Installing JBoss Tools](#jbosstools)

## <a id="wildfly" name="wildfly" />Installing WildFly

1. **Get** the latest stable version of the **WildFly Application Server** (**12.0.0.Final**) from [http://wildfly.org/downloads/](http://wildfly.org/downloads/) (``wildfly-12.0.0.Final.zip``).
1. **Extract** the **zip** archive to a directory on your computer, e.g. ``C:\ACSE``. The path must **not contain any spaces**. A new directory, e.g. ``C:\ACSE\wildfly-12.0.0.Final``, containing the WildFly files will be created.
1. Use the script ``<WildFly directory>\bin\standalone.bat`` (Windows) or ``<WildFly directory>\bin\standalone.sh`` (Linux) to start the WildFly server and check the installation. After startup, you should be able to access the web server at [http://localhost:8080](http://localhost:8080).
1. Open the link [**Administration Console**](http://localhost:8080/console) and follow the instructions to add a new **management user** (if asked, the user needs not to be added to a group and won't be used to connect to another AS process).
1. After creating a user, restart WildFly and revisit the [**Administration Console**](http://localhost:8080/console).
1. Go to [**Deployments**](http://localhost:9990/console/App.html#standalone-deployments) and click **Add** to upload [hsqldb.jar](hsqldb.jar). Click **Next** to upload a new deployment, select the hsqldb.jar, and click **Next**. Make sure that the deployed file is **enabled** and click **Finish**.
1. Go to **Configuration** > **Subsystems** > **Datasources** > **Non-XA** and click **Add**. Choose the **Custom** data source and use the following information to create a datasource:

   * Name: **DefaultDS**
   * JNDI Name: **java:/DefaultDS**
   * JDBC Driver: Click **Detected Driver** and choose **hsqldb.jar**
   * Connection URL: **jdbc:hsqldb:${jboss.server.data.dir}${/}hypersonic${/}localDB;shutdown=true**
   * username: **sa**
   * password can be left blank

1. Reload the server when requested to do so.
1. Add a second datasource, i.e. repeat the previous steps using the following information (replacing the occurences of X with your group number):

    * Name: **BirdsongX**
    * JNDI Name: **java:/BirdsongX**
    * JDBC Driver: Click **Detected Driver** and choose **hsqldb.jar**
    * Connection URL: **jdbc:hsqldb:${jboss.server.data.dir}${/}hypersonic${/}BirdsongX;shutdown=true**
    * username: **sa**
    * password can be left blank

1. Ensure that the datasources are **enabled** (Configuration > Subsystems > Datasources > Non-XA > YourDatabase > View).
1. In order to stop the server, press CTRL-C in the console window that was opened during step 3.

<div class="footnote" markdown="1">
Alternatively to steps 4-8, you can use the JBoss-CLI to deploy the HSQLDB driver and add the data source: ``./jboss-cli.sh -c "deploy ~/Downloads/hsqldb.jar,data-source add --driver-name=hsqldb.jar --use-ccm=false --jta=false --user-name=sa --name=DefaultDS --jndi-name=java:/DefaultDS --connection-url=jdbc:hsqldb:\$\{jboss.server.data.dir\}\$\{/\}hypersonic\$\{/\}localDB;shutdown=true"``
</div>

## <a id="jbosstools" name="jbosstools" />Installing JBoss Tools for Eclipse

1. Select **Help** > **Eclipse Marketplace...** from the Eclipse menu bar. Choose "Eclipse Marketplace" if prompted for a marketplace catalog.
1. Search for "JBoss Tools" and **install JBoss Tools**, version 4.4.3.Final.
1. Wait until "Calculating requirements..." has finished and make sure that all features are checked, then **confirm**.
1. **Accept the license agreements** and click **"Finish"**.
1. When the download is complete, a security warning regarding "Unsigned content" will appear. **Accept with "OK"** to begin with the installation.
1. When prompted to do so, **"Restart Now"**.
1. After **closing** the **"Welcome" window** you will see the "Java EE" perspective. The selected perspective is indicated in the upper right corner as shown in the following figure:

    ![](images/eclipse_jee_perspective.png)

   If the Java EE button is not visible you can change to the Java EE perspective via *Window* > *Perspective* > *Open Perspective* > *Other...* . In the "Open Perspective" dialog double click the Java EE entry.
1. **Activate** the **"Servers" view** tab in the lower right of the window. **Right-click** the empty area and **select "New-&gt;Server"** as shown in this screenshot:
    ![](images/eclipse_server_view.png)
1. In the "New Server" window select **"WildFly 12.0"** (from the JBoss Community category) **as server type**, set the server host name to "localhost" and click **"Next"** two times.
    ![](images/eclipse_new_server.png)

   **Set** the **"Home Directory"** entry to the installation directory of the WildFly AS, e.g. ``C:\ACSE\wildfly-12.0.0.Final``, and **click "Finish"**.
1. In the "Servers" view **select the newly created server** and click the green **start button**.
    ![](images/eclipse_server_start.png)

   A new "Console" view will open showing the startup logs of the WildFly AS.

Congratulations, you have successfully set-up your development environment!
Continue with the [setup of your first Java EE project](020_tutorial_jboss_project.html).
