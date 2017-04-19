---
layout: recipe
title: Setting up the development environment
---
Docker is a containerization system that simplifies the development and deployment of software. In ACSE, it is used to avoid overly complex manual configuration steps of the development environment.

## Contents

1. [Installing Docker](#install)
1. [Installing the latest JDK](#jdk)
1. [Installing Eclipse](#eclipse)
1. [Extending Eclipse](#plugins)
1. [Installing JBoss Tools](#jbosstools)

## <a id="install" name="install"></a>Installing Docker

1. Which tool to install depends on your operating system:
   * Windows 10 Professional 64-bit: [Docker for Windows](https://www.docker.com/docker-windows)
   * Other Windows versions: [Docker Toolbox](https://www.docker.com/products/docker-toolbox)
   * Linux (various distros): [Docker for Linux](https://docs.docker.com/engine/installation/linux/)
   * Mac (2010+) with macOS 10.10.3 Yosemite or newer: [Docker for Mac](https://www.docker.com/docker-mac)
   * Older Mac versions: [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

1. For Windows users with Docker Toolbox, you additionally need to establish a file system connection to the docker machine. Therefore:
  1. In your file system, create a folder, e.g. `C:\ACSE\dockerShared`.
  1. Open VirtualBox, select the "default" machine, click on **Change**.
  1. In the "Shared directory" tab, add a new entry that points to the local folder you just created and give it the name `/dockerShared`. Also, **activate** the checkboxes for automatic mounting and persistent creation.
  1. Close all dialogues with **OK**.

1. To verify your installation, start a docker command line and run ``docker version`` which should output some information.
<br><small>For windows users: An annoying message "Unable to use system certificate pool: crypto/x509: system root pool is not available on Windows" might appear frequently. Nothing to worry, it's a [known issue](https://github.com/docker/docker/issues/30450) but not yet fixed and should have no impact on running docker.</small>
1. You can continue with the Docker tutorial starting from [Step 3](https://docs.docker.com/engine/getstarted/step_one/#step-3-verify-your-installation) to get some insights in how to handle Docker and learn about containers, Docker Hub and so on. However, necessary commands will also be provided on the exercise sheets.

## <a id="jdk" name="jdk"></a>Installing the latest JDK

1. Make sure that the latest version of the **Java Development Kit** (JDK 8 Update 121 or later) is installed on your computer. If the JDK is properly installed on your computer, you can jump to step 4 of this section, otherwise continue with the next step.
1. Go to [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and follow the instructions on Oracle's website to **download** the latest version of the **JDK** (**Java SE 8 Update 121** or later) for the operating system of your computer.
1. **Install** the **JDK** to a directory on your computer, e.g. ``C:\Java\jdk1.8.0_121`` on Windows.
1. **Create** an **[environment variable](#envvar)** called **``JAVA_HOME``** that points to the JDK installation directory, for example ``C:\Java\jdk1.8.0_121``.

## <a id="eclipse" name="eclipse"></a>Installing Eclipse

1. **Download** the **Eclipse IDE for Java EE Developers** for your operating system (version 4.6.3, *Neon.3*) from [http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/neon3](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/neon3).
1. **Extract** the downloaded **archive** to a directory on your computer, e.g. ``C:\ACSE``. This will create a sub directory, like ``C:\ACSE\eclipse``.
1. **Start Eclipse**. The ``eclipse.exe`` is located in the installation directory. Wait for the "Workspace Launcher" window to pop up and **select a workspace directory**, for example ``C:\ACSE\projects``. This path must **not contain any spaces** either. The workspace directory is where all your projects will be stored. You may check the "Use this as the default and do not ask again" box to avoid this dialog from appearing on the next start. Click **"OK"** to close the dialog and get to the workbench window.

## <a id="plugins" name="plugins"></a>Extending Eclipse
1. Select **Help** > **Install new Software...**
1. Click **Add...**, enter `http://download.eclipse.org/modeling/tmf/xtext/updates/composite/releases/` as new update site, and click **OK**.
1. From the dropdown menu, select **All Available Sites** to work with (the screenshots show another example).
![](images/install_software.png)
1. Wait for the list of software to load and select all of the following items:

  * _Modeling_
    * **QVT Operational SDK**
      _for model-to-model transformations_
  * _Xtext_
    * **Xtext Complete SDK** (at least version 2.11!)
      _for domain-specific language development_
    * **Xtend IDE** (at least version 2.11!)
      _for model-to-text transformations_

1. Click **Next** two times, check **Accept**, click **Finish** and wait for the packages to be installed.
1. Click **Yes** when prompted to restart.

## <a id="jbosstools" name="jbosstools"></a>Installing JBoss Tools for Eclipse

For some exercises, you are required to deploy an application to the Wildfly application server.
To spare the manual installation and configuration, you can use the provided docker container.
However, you need to configure Eclipse in order to automatically deploy your work from within your IDE.

1. Unfortunately, you still need a Wildfly installation locally on your machine for Eclipse to work properly (although it does not need to be configured). Therefore **get** the latest stable version of the **WildFly Application Server** (**10.1.0.Final**) from [http://wildfly.org/downloads/](http://wildfly.org/downloads/) (``wildfly-10.1.0.Final.zip``).
1. **Extract** the **zip** archive to a directory on your computer, e.g. ``C:\ACSE``. The path must **not contain any spaces**. A new directory, e.g. ``C:\ACSE\wildfly-10.1.0.Final``, containing the WildFly files will be created.
1. Open Eclipse, select **Help** > **Eclipse Marketplace...** from the Eclipse menu bar.
1. Search for "JBoss Tools" and **install JBoss Tools** (current version 4.4.3.Final).
1. Wait until "Calculating requirements..." has finished and make sure that all features are checked, then **confirm**.
1. When receiving "the installation cannot be completed as requested", choose the selected option to modify the items being installed and **Confirm**.
1. **Accept the license agreements** and click **Finish**.
1. When the download is complete, a security warning regarding "Unsigned content" will appear. **Accept with "OK"** to begin with the installation.
1. When prompted to do so, **Restart Now**.
1. After **closing** the **"Welcome" window**, switch to the "Java EE" perspective via *Window* > *Perspective* > *Open Perspective* > *Other...*. The selected perspective is indicated in the upper right corner as shown in the following figure:

    ![](images/eclipse_jee_perspective.png)

1. In your file system, create a folder, e.g. ``C:\ACSE\dockerShared\deployments`` (for Windows users with Docker Toolbox, it must be in the shared folder established while [installing Docker](#install)).
1. Check the current IP of docker using ``docker-machine ip``. On your local machine, this might output something like ``192.168.99.100``.
1. In your Docker command line, fire up the docker container for the Wildfly server and pass this directory to the virtual filesystem using
```
docker run -it -p 8080:8080 -v /dockerShared/deployments:/opt/jboss/wildfly/standalone/deployments/:rw wwupi/wildfly-acse-2017
```
<small>For Windows users: Watch the conversion of backslashes to forward slashes.</small>

1. In Eclipse, activate the **"Servers" view** tab in the lower part of the window via *Window* > *Show view* > *Others...* . **Right-click** the empty area and **select "New > Server"** as shown in this screenshot:

    ![](images/eclipse_server_view.png)
1. In the "New Server" window select **"WildFly 10.0"** (from the JBoss Community category) **as server type**, set the docker IP from step 12 as "Server's host name" and click **Next**.

    ![](images/eclipse_new_server.png)
1. On the next pages, **activate** "Server lifecycle is externally managed", and click **Next**.

    ![](images/eclipse_new_server_2.png)
1. **Set** the **"Home Directory"** entry to the installation directory of the WildFly AS, e.g. ``C:\ACSE\wildfly-10.1.0.Final``, and **click "Finish"**.
1. Right-click the new Wildfly entry and choose **"Open"**.
1. In the "Deployment Scanners" section, **unselect** both checkboxes.

    ![](images/eclipse_server_config.png)
1. In the Deployment tab (bottom of the window), switch to the "Deployment" tab, **select** "Use a custom deployment folder" and set both paths to your local folder created in Step 11.
1. **Click on the "Save" icon** in the menu bar.

Congratulations, you have successfully set-up your development environment!
Continue with the [setup of your first Java EE project](020_tutorial_jboss_project.html).

## <a id="envvar" name="envvar" />How To Set Environment Variables

* **Windows XP**: Open the Control Panel (*Systemsteuerung*) from the Start Menu, switch to Classic View (*Klassische Ansicht*) if necessary, open the System Control Panel applet (*System*), select the Advanced tab (*Erweitert*), and click on the Environment Variables button (*Umgebungsvariablen*).
* **Windows 7 / 8 / 10**: Control Panel (*Systemsteuerung*) - System - choose Advanced System Settings (*Erweiterte Systemeinstellungen*) on the left - Advanced tab (*Erweitert*) - Environment Variables button (*Umgebungsvariablen*)
