---
layout: recipe
title: Installing Datalog Educational System
---

**Installation:**

1. [Download](http://www.fdi.ucm.es/profesor/fernan/des/html/download.html) Datalog Educational System (DES).

   * We recommend using versions built with SWI-Prolog, e.g. [Windows](https://sourceforge.net/projects/des/files/des/des6.3/DES6.3ACIDE0.17Windows64SWI.zip/download) or [Unixes](https://sourceforge.net/projects/des/files/des/des6.3/DES6.3ACIDE0.17UnixesSWI.zip/download)
   
2. Unzip the archive to a folder of your choice.

3. You can run DES in console mode (`des.exe` or `des`).

   * Unixes: File `des` needs execute permission:  
    `cd /path/to/des`  
    `chmod +x des`

   * Linux (Ubuntu): Note that DES might need the packages `unixodbc-dev`, `unixodbc-bin` and `unixodbc`. Install with:  
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

**Build own executable with SWI-Prolog:**

We recommend using the pre-built packages as described above. However, you can also build your own executable for DES
with SWI-Prolog. This requires an installation of SWI-Prolog 7.x.

1. [Download](https://sourceforge.net/projects/des/files/des/des6.3/DES6.3SWI.zip/download) the source code of Datalog Educational System (DES).

2. Follow the instructions in the [Building Guide](https://sourceforge.net/projects/des/files/des/des6.3/Building_executables_SWI-Prolog.txt/download).
