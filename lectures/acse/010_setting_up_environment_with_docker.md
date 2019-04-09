---
layout: recipe
title: Setting up the development environment
---
Docker is a containerization system that simplifies the development and deployment of software. In ACSE, it is used to avoid overly complex manual configuration steps of the development environment.

## Contents

1. [Installing Docker](#install)
1. [Installing the latest Java 8 JDK](#jdk)
1. [Installing Eclipse](#eclipse)
1. [Extending Eclipse](#plugins)
<!-- 1. [Installing JBoss Tools](#jbosstools) -->

## <a id="install" name="install"></a>Installing Docker

Which tool to install depends on your operating system:
<div class="accordion vertical">
   <section id="windows">
       <h5><a href="#windows">Windows 10 Professional 64-bit</a></h5><div>
       Install the current <a href="https://www.docker.com/docker-windows">Docker for Windows</a> application.
       In case this does not work (there are some hardware requirements such as a processor with Hyper-V support and virtualization enabled in the BIOS settings) you can fall back to the <a href="#legacy">solution for other Windows versions</a>.
       <br /><br />
       After successfully installing Docker, open the Docker settings (right click on the Docker icon in the Windows toolbar), select "Shared drives" and make sure your drive that contains the ACSE files (see "Installing Eclipse" section below; "C:" in this tutorial) is checked.
       <br />
       <img src="images/docker_shared_drives.png" />
   </div></section>
   <section id="linux">
       <h5><a href="#linux">Linux</a></h5><div>
       Install the current <a href="https://docs.docker.com/engine/installation/linux/">Docker for Linux</a> application that is available for multiple distros.
   </div></section>
   <section id="mac">
       <h5><a href="#mac">Mac (2010+) with macOS 10.10.3 Yosemite or newer</a></h5><div>
       Install the current <a href="https://www.docker.com/docker-mac">Docker for Mac</a> application.
   </div></section>
   <section id="legacy">
          <h5><a href="#legacy">Other Windows or Mac versions</a></h5><div>
          Older Versions of Windows or Mac that are not supported by the current tool can use the <a href="https://www.docker.com/products/docker-toolbox">Docker Toolbox</a> application.
          Internally, Docker is installed within a virtual machine so that you can use it.
          However, this makes the environment setup a bit more complicated as will be highlighted in the following sections.
          <br/><br/>

          For Windows users with Docker Toolbox, you additionally need to establish a file system connection to the Docker machine. Therefore:
        <ol>
          <li> In your file system, create a folder, e.g. <code class="highlighter-rouge">C:\ACSE</code>.</li>
          <li> Open VirtualBox, select the "default" machine, click on <b>Change</b>.</li>
          <li> In the "Shared directory" tab, add a new entry that points to the local folder you just created and give it the name <code class="highlighter-rouge">c/ACSE</code>. Also, <b>activate</b> the checkboxes for automatic mounting and persistent creation.</li>
          <li> Close all dialogues with <b>OK</b>.</li>
          <li> Restart the machine by executing <b>docker-machine restart</b>.</li>
        </ol>
		  </div></section>
</div>

1. To verify your installation, start a Docker command line and run ``docker run hello-world`` which should output some information for getting started with Docker.
<br><small>For windows users: An annoying message "Unable to use system certificate pool: crypto/x509: system root pool is not available on Windows" might appear frequently. Nothing to worry, it's a [known issue](https://github.com/docker/docker/issues/30450) and fixed as of version 17.04; anyway it should have no impact on running Docker.</small>
1. You can continue with the Docker tutorial starting from [Step 2](https://docs.docker.com/get-started/part2/) to get some insights in how to handle Docker and learn about containers, images, Docker Hub and so on. However, necessary commands will also be provided on the exercise sheets.

[Docker Compose](https://docs.docker.com/compose/overview/) is an additional tool, which allows to manage multiple containers at once.
Windows 10, Linux and Mac users have to [install Docker Compose](https://docs.docker.com/compose/install/) separately; Docker Toolbox already bundles a version.

## <a id="jdk" name="jdk"></a>Installing the latest Java 8 JDK

1. Make sure that the latest version of the **Java 8 Development Kit** (JDK 8 Update 201 or later) is installed on your computer. If the JDK is properly installed on your computer, you can jump to step 4 of this section, otherwise continue with the next step.
<br><small>Java 9 has introduced a new module structure which leads to errors or additional adaptations in combination with other software used in the lecture. We therefore do not recommend using Java 9+ for the ACSE exercises.</small>
1. Go to [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and follow the instructions on Oracle's website to **download** the latest version of the **Java 8 Development Kit** (**Java SE 8 Update 201** or later) for the operating system of your computer.
1. **Install** the **JDK** to a directory on your computer, e.g. ``C:\Java\jdk1.8.0_201`` on Windows.
1. **Create** an **[environment variable](#envvar)** called **``JAVA_HOME``** that points to the JDK installation directory, for example ``C:\Java\jdk1.8.0_201``.
1. You can check your installation by typing ``javac -version`` on your command line which should output the java version you just installed. If this is not the case you might also add the ``/bin`` directory of your Java installation to your ``PATH`` environment variable (keep in mind you have to open a new command line in order to see changes to the environment variables).

## <a id="eclipse" name="eclipse"></a>Installing Eclipse

1. **Download** the **Eclipse IDE for Enterprise Java Developers** for your operating system (e.g. *Eclipse IDE 2019-03*) from [https://www.eclipse.org/downloads/packages/release/2019-03/r/eclipse-ide-enterprise-java-developers](https://www.eclipse.org/downloads/packages/release/2019-03/r/eclipse-ide-enterprise-java-developers).
1. **Extract** the downloaded **archive** to a directory on your computer, e.g. ``C:\ACSE``. This will create a sub directory, like ``C:\ACSE\eclipse``.
1. **Start Eclipse**. The executable (``eclipse.exe`` or ``eclipse``) is located in the installation directory. Wait for the "Workspace Launcher" window to pop up and **select a workspace directory**, for example ``C:\ACSE\projects``. This path must **not contain any spaces** either. The workspace directory is where all your projects will be stored. You may check the "Use this as the default and do not ask again" box to avoid this dialog from appearing on the next start. Click **"OK"** to close the dialog and get to the workbench window.

## <a id="plugins" name="plugins"></a>Extending Eclipse
1. Select **Help** > **Install new Software...**
1. From the dropdown menu, select **All Available Sites** to work with (the screenshots show another example).
![](images/install_software.png)
1. Wait for the list of software to load (this can take some time) and select all of the following items:

    * _General Purpose Tools_
      * **Xtext Complete SDK** (at least version 2.13!)
        _for domain-specific language development_
    * _Programming Languages_
      * **Xtend IDE** (at least version 2.13!)
        _for model-to-text transformations_

1. Click **Next** two times, check **Accept**, click **Finish** and wait for the packages to be installed.
1. Click **Yes** when prompted to restart.

Congratulations, you have successfully set-up your development environment!
Continue with [running the sample application](018_tutorial_sample_app.html) or [setup your first Java EE project](020_tutorial_jboss_project.html).

## <a id="envvar" name="envvar" />How To Set Environment Variables

* **Windows 7 / 8 / 10**: Control Panel (*Systemsteuerung*) - System - choose Advanced System Settings (*Erweiterte Systemeinstellungen*) on the left - Advanced tab (*Erweitert*) - Environment Variables button (*Umgebungsvariablen*)
* **Linux / macOS**: Open a terminal window and type `export JAVA_HOME=/usr/lib/jvm/java-8-oracle` (using your installation path, of course). If Java is still not found you might need to add it to the path environment variable using `export PATH=$PATH:$JAVA_HOME/bin`.
