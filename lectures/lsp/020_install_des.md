---
layout: recipe
title: Installing Datalog Educational System
---

**Windows and Mac:**

1. [Download](http://www.fdi.ucm.es/profesor/fernan/des/html/download.html) Datalog Educational System (DES).

   * We recommend using versions with GUI built with SWI-Prolog, e.g. [Win 32-bit](http://sourceforge.net/projects/des/files/des/des3.8/DES3.8ACIDE0.16Windows32SWI.zip/download?use_mirror=netcologne&download=), [Win 64-bit](http://sourceforge.net/projects/des/files/des/des3.8/DES3.8ACIDE0.16Windows64SWI.zip/download?use_mirror=heanet&download=) or [Mac 64-bit](http://sourceforge.net/projects/des/files/des/des3.8/DES3.8ACIDE0.16MacOSX64SWI.zip/download?use_mirror=heanet&download=)
   
2. Unzip the archive to a folder of your choice.

3. You can run DES in console mode (`des.exe` or `des`) or in GUI mode (`des_acide.jar`).

   * Mac: File `des` needs execute permission:  
    `cd /path/to/des`  
    `chmod +x des`

**Linux (Ubuntu):**

Note that there is only a 32-bit version for Ubuntu. Therefore we could not test the installation routine.

1. [Download](http://prdownloads.sourceforge.net/des/DES3.11ACIDE0.16Linux32SICStus.zip?download) Datalog Educational System (DES).

2. Unzip the archive to a folder of your choice.

3. You can run DES in console mode (`./des`) or in GUI mode (`java -jar des_acide.jar`).

   * File `des` needs execute permission:  
    `cd /path/to/des`  
    `chmod +x des`

   * Note that DES might need the packages `unixodbc-dev`, `unixodbc-bin` and `unixodbc`. Install with:  
   `sudo apt-get install unixodbc-dev unixodbc-bin unixodbc`

**First steps:**

1. Start DES as described in the last steps above.
 
    * In subfolder `doc` you can find a manual: `manualDES.pdf`
 
    * In subfolder `examples` you can find many examples. The following examples are particularly interesting: 
      `bom.dl`, `family.dl`, and `flight.dl`

2. After starting DES: 
    * `/help` gives you an overview of all the available commands. Particularly important are:
    * `/r file`         loads a (e.g.) datalog program
    * `/datalog goal`   solves a goal based on the loaded program

    * example:  
      `/r examples/family.dl`  
      `/datalog ancestor(X,Y).`   (or just: `ancestor(X,Y).`)

    * In contrast, `/prolog ancestor(X,Y).` executes the goal as a Prolog program on a tuple by tuple basis
    
    * `/q`              quits DES 

