---
layout: recipe
title: Installing NuSMV
---

**Windows, Mac and Linux:**

1. [Download](https://nusmv.fbk.eu/bin/bin_download2-v2.cgi) NuSMV.

   * We recommend downloading the 64-bit version.

2. Unzip the archive to a folder of your choice.

3. You can run NuSMV in console mode using the respective binary in the `bin` folder (`NuSMV.exe` or `NuSMV`). Add the
   `*.smv` file you want to load as an argument:

```
cd /path/to/nusmv
./NuSMV /path/to/file.smv
```

4. If you want to have the `NuSMV` command generally available within the command line without the need of navigating
   to the program folder first, add the `bin` folder to the `PATH` environment variable. You can find resources online
   on how to do that for your respective operating system. For instance, consult [this GitHub Gist](https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7).
