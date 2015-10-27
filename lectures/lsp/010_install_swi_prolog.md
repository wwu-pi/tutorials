---
layout: recipe
title: Installing SWI-Prolog
---

**Windows and Mac:**

1. [Download](http://www.swi-prolog.org/download/stable) SWI-Prolog.

   * Windows: We recommend downloading the 64-bit edition!
   
2. Install SWI-Prolog by following the installer instructions.

**Linux (Ubuntu):**

1. Add the ppa **ppa:swi-prolog/stable** to your system's software sources:

   * Open a terminal (Ctrl+Alt+T) and type:  
   `sudo add-apt-repository ppa:swi-prolog/stable`
   
   * Afterwards, update the package information:  
   `sudo apt-get update`
   
2. Install SWI-Prolog through the package manager:

   * Open a terminal (Ctrl+Alt+T) and type:  
   `sudo apt-get install swi-prolog`

**Quick start (Linux):**

1. Write a prolog program as a text file with a **.pl** ending. For example, `program.pl`.
2. Open a terminal (Ctrl+Alt+T) and navigate to the directory where you stored your program.
3. Open SWI-Prolog by invoking `swipl`.
4. In SWI-Prolog, type `[program]` to load the program, i.e. the file name in brackets, but without the ending.
5. In order to query the loaded program, type goals and watch the output.
6. Alternatively, you can also load the program by passing its name as a parameter to SWI-Prolog: `swipl -s program.pl`.

For more **Getting started** advice, please refer to the [SWI-Prolog Tutorials](http://www.swi-prolog.org/pldoc/man?section=quickstart).
