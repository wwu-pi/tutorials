---
layout: recipe
title: Installing NuSMV
---

**Windows, Mac and Linux:**

1. [Download](https://nusmv.fbk.eu/downloads.html) NuSMV.

   * We recommend downloading the 64-bit version.

2. Unzip the archive to a folder of your choice.

3. You can run NuSMV in console mode using the respective binary in the `bin` folder (`NuSMV.exe` or `NuSMV`). Supply the
   path to the `.smv` file you want to load as an argument:

   ```
   cd /path/to/nusmv/bin
   ./NuSMV /path/to/file.smv
   ```

4. If you want to have the `NuSMV` command generally available within the command line without the need of navigating
   to the program folder first, add the `bin` folder to the `PATH` environment variable. You can find resources online
   on how to do that for your respective operating system. For instance, consult [this GitHub Gist](https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7).

5. An introduction to using NuSMV can be found in the [NuSMV tutorial](https://nusmv.fbk.eu/tutorials.html).
   Further details can be found in the [user manual](https://nusmv.fbk.eu/user-manual.html).
