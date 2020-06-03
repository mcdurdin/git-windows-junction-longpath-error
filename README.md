# Background

This repository demonstrates git 2.27.0.windows.1 failing to deal with junctions in Windows when long path names are involved.

In order to generate the long path names, we use a small Node.js script to make the links, as Windows' mklink tool does not yet support long path names (as of Win 10 1909, anyway).

# Instructions

1. Ensure `git config core.longpaths true`
2. Clone the repository on a Windows 10 1909 or later machine in "Developer mode" https://www.howtogeek.com/292914/what-is-developer-mode-in-windows-10/
3. `git status` shows everything working fine:

```
$ git status
On branch master
nothing to commit, working tree clean
```

4. `node sl.js` to generate the junction
5. `git status` shows the error:

```
$ git status
warning: could not open directory 'module_2_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890/module_1_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890/': Function not implemented
On branch master
nothing to commit, working tree clean
```
