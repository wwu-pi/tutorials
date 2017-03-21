---
layout: recipe
title: Creating a new DSL project with Xtext
---

This tutorial briefly explains the steps needed to create a new DSL project with [Xtext](http://www.eclipse.org/Xtext/index.html).

1. Select *File* > *New* > *Project...*, choose *Xtext* > *Xtext Project*.
1. Choose project name, e.g., `de.wwu.pi.acse.customerDsl`.
1. Choose name of language, e.g., `de.wwu.pi.acse.customerDsl.CustomerDsl`, and a file extension that model files in the language will use, e.g., `cdsl`.
1. A click on *Finish* will create 4 projects, most importantly the main project (*de.wwu.pi.acse.customerDsl*). It contains the Xtext grammar (*CustomerDsl.xtext*) and a workflow file for generating the infrastructure from the language description (*GenerateCustomerDsl.mwe2*).
1. Implement your language in *CustomerDsl.xtext*.
1. Generate the language and infrastructure, for example by selecting the corresponding workflow file and choose ("Run As > MWE2 Workflow") from the dropdown menu next to the "Run" icon in the toolbar.

   **This has to be done every time after making changes to the grammar.**

1. When asked "Do you agree to download ...", type `y` in the console of Eclipse and hit enter.
1. To test your language and its editor, start a new Eclipse instance ("Launch Runtime Eclipse" from the Run dropdown menu).

    ![Launch Runtime Eclipse](images/LaunchRuntimeEclipse.png)
    "Launch Runtime Eclipse" from the Run dropdown menu

1. In the new instance, create a new general Java project.
   Therein, create a new file that has the extension specified in step 3 (e.g., *test.cdsl*).
   Click *Yes* when asked if you want to add the Xtext nature to the project.
1. Start typing ...

For further details, please refer to the [Xtext documentation](http://www.eclipse.org/Xtext/documentation/). If you have any questions, feel free to ask them in the Learnweb discussion forum.
