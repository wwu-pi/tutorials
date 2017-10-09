---
layout: recipe
title: Installing Datalog Educational System
---
**Mac:**

1. `brew install homebrew/science/des`
   
   Or `brew tap homebrew/science` and then `brew install des`.

**Windows and Mac:**

1. [Download](http://www.fdi.ucm.es/profesor/fernan/des/html/download.html) Datalog Educational System (DES).

   * We recommend using versions with GUI built with SWI-Prolog, e.g. [Win 32-bit](https://sourceforge.net/projects/des/files/des/des5.0.1/DES5.0.1ACIDE0.17Windows32SWI.zip/download), [Win 64-bit](https://sourceforge.net/projects/des/files/des/des5.0.1/DES5.0.1ACIDE0.17Windows64SWI.zip/download) or [Mac 64-bit](https://sourceforge.net/projects/des/files/des/des5.0.1/DES5.0.1ACIDE0.17MacOSX64SWI.zip/download)
   
   
2. Unzip the archive to a folder of your choice.

3. You can run DES in console mode (`des.exe` or `des`) or in GUI mode (`des_acide.jar`).

   * Mac: File `des` needs execute permission:  
    `cd /path/to/des`  
    `chmod +x des`

**Linux (Ubuntu):**

Note that there is only a 32-bit version for Ubuntu. Therefore we could not test the installation routine.

1. [Download](https://sourceforge.net/projects/des/files/des/des5.0.1/DES5.0.1ACIDE0.17Linux32SICStus.zip/download) Datalog Educational System (DES).

2. Unzip the archive to a folder of your choice.

3. You can run DES in console mode (`./des`) or in GUI mode (`java -jar des_acide.jar`).

   * File `des` needs execute permission:  
    `cd /path/to/des`  
    `chmod +x des`

   * Note that DES might need the packages `unixodbc-dev`, `unixodbc-bin` and `unixodbc`. Install with:  
   `sudo apt-get install unixodbc-dev unixodbc-bin unixodbc`
   
**Linux (build own executable with SWI-Prolog):**

This requires an installation of SWI-Prolog 7.x.

1. [Download](https://sourceforge.net/projects/des/files/des/des5.0.1/DES5.0.1ACIDE0.17UnixesSWI.zip/download) the source code of Datalog Educational System (DES).

2. Unzip the archive to a folder of your choice (e.g. `/home/name/des`).

3. Edit des.pl, find the next line, and place a preceding '%' (single-line remark symbol). So:

      `:- initialization(call_cleanup(start,process_out)).`
  
   becomes:
  
      `% :- initialization(call_cleanup(start,process_out)).`

4. Execute SWI-Prolog. Typically, you should open a terminal and type 'swipl', as follows, where '$' is assumed to be the command prompt (you may have other prompts as well):

   `$ swipl`
   
5. Change current working directory to the folder where the file des.pl is located, i.e., /home/name/des in this guide:
   
   `?- working_directory(_,'/home/name/des').`
   
6. Consult des.pl:

   `?- [des].`

7. Edit des.pl and place a preceding '%' in the following line as shown:

    `% :- include('des_ini.pl').`

8. Consult again des.pl:  

   `?- [des].`

9. Build a command shell application with:

   `?- qsave_program(des,[goal=start]).`

1. Exit Prolog with:
   `?- halt.`

1. If everything worked correctly, you can run DES with `./des` or `java -jar des_acide.jar`.

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

