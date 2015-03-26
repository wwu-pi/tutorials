---
layout: recipe-merged-into-acse
title: Creating a new QVTO transformation
---

This tutorial explains the steps necessary to create a QVTO project.

1. Create a new Operational QVT Project with a custom name (everything else can remain as default).
1. On the third page of the wizard, you can check "Create artifacts" and select "Operational QVT Transformation".
1. Choose a name for the new transformation.
1. Implement the new transformation:

   1. In order to be able to transform files of custom DSLs, they have to be installed in Eclipse. To do so, right-click on the SDK project of your DSL (project name ends with .sdk), choose "Export ..." and "Deployable features". Click next. In tab "Destination", select the last option "Install into host. repository" and click "Finish". Confirm all ensuing dialogs and restart Eclipse. The plug-ins of the DSL are now installed for this workspace.
   1. At the top of the transformation file, define the model types (metamodels) to be used - the necessary namespace URI is, for example, "http://www.eclipse.org/uml2/4.0.0/UML" for UML. The namespace of DSLs created with Xtext is defined as part of the "generate statement" in the .xtext file.
   1. Add an input and an output parameter to the transformation statement.
   1. Don't forget to end each line with ";". Even though it is optional for the last line of a block, this will spare you a lot of hassle.

1. To start the transformation, select Run > Run Configurations... from the menu. Select "Operational QVT Interpreter" and press 'New'.
1. If it has not been selected automatically, select your newly created transformation file as the transformation module.
1. Choose an input file that corresponds to the metamodel defined as input for the transformation. Select a location for the output model.
1. Click "Run" to execute the transformation. (Subsequent runs can be initiated from the Run icon in the toolbar.)

If you have any further questions, please direct them to the Learnweb discussion forum.
