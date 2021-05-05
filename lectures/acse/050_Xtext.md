---
layout: recipe
title: Creating a new DSL project with Xtext
---

This tutorial briefly explains the steps needed to create a new DSL project with [Xtext](http://www.eclipse.org/Xtext/index.html).

1. Select *File* > *New* > *Project...*, choose *Xtext* > *Xtext Project*.

You should be prompted with something similar to 
![](images/New%20Xtext%20Project.png)
2.Choose project name, e.g., `de.wwu.pi.acse.customerDsl`.
3. Choose name of language, e.g., `de.wwu.pi.acse.customerDsl.CustomerDsl`, and a file extension that model files in the language will use, e.g., `cdsl`.

Starting with Xtext 2.23 and later, Java 11 must be used. As such, leave the setting of "Execution environment" set to
JavaSE-11. A compatible Java version should have been automatically installed while you installed Eclipse. 
Make sure that if you click **Environments**...

![](images/Configuration%20of%20Java%2011.png)

...and select JavaSE-11...

![](images/Select%20compatible%20JRE.png) 

...you ticked an entry in the "Compatible JREs" section.
Click "Apply and Close".

4. A click on *Finish* will create 5 projects, most importantly the main project (*de.wwu.pi.acse.customerDsl*). It contains the Xtext grammar (*CustomerDsl.xtext*) and a workflow file for generating the infrastructure from the language description (*GenerateCustomerDsl.mwe2*).
5. Implement your language in *CustomerDsl.xtext*.
6. Generate the language and infrastructure, for example by selecting the corresponding .mwe2 workflow file and choose ("Run As > MWE2 Workflow") from the dropdown menu next to the "Run" icon in the toolbar.

   **This has to be done every time after making changes to the grammar.**

7. To test your language and its editor, start a new Eclipse instance ("Launch Runtime Eclipse" from the Run dropdown menu).

    ![](images/LaunchRuntimeEclipse.png)

8. In the new instance, create a new general Java project.
   Therein, create a new file that has the extension specified in step 3 (e.g., *test.cdsl*).
   Click *Yes* when asked if you want to add the Xtext nature to the project.
9. Enter your model. If you have implemented a generator, it will be triggered every time you save the DSL model.

For further details, please refer to the [Xtext documentation](http://www.eclipse.org/Xtext/documentation/). If you have any questions, feel free to ask them in the Learnweb discussion forum.
