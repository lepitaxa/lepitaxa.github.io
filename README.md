Note: This README is WORK IN PROGRESS

# <img src="lepitaxa.png" height="32"> LEPITAXA  – Lepidopteran Classification Project
#### Website: https://lepitaxa.github.io/lepitaxa/

## Overview
- [Introduction](#introduction)
- [Basic structure](#basic-structure)
- [Workspace setup](#workspace-setup)
- [Data types and guidelines](#data-types-and-guidelines)

## Introduction
This project aims to provide a modern, up-to-date phylogeny-based classification of the large insect order Lepidoptera (Butterflies & Moths) in a simple and lightweight format.

It consists of a single, somewhat minimalist and easy to navigate webpage including the entire lepidopteran taxonomy, with varying degrees of detail between the groups depending on their importance and available research data. Taxonomic data and classification changes are based on proper scientific data (in most cases referenced directly below the affected taxon), preferably precise phylogenetic studies.

The simplicity and public access of the data via GitHub allows anyone, hobbyists, enthusiasts and researchers alike, to add, correct, modify or use the taxonomic data. Contributions to the project are very welcome! More details on how to work with Lepitaxa data and about data structure guidelines can be found below.

This GitHub repository also provides a place to discuss data, propose changes and report issues. The preferred working language is English, with the backup language being German. For the time being, my personal role in this project is to maintain and moderate everything, review changes and additions and merge approved ones into the main branch. The Lepitaxa webpage is generated automatically from the main branch of this repository via [GitHub Pages](https://pages.github.com/).

-- _Georg Hammerschmid_

## Basic structure
Within Lepitaxa, the Lepidopterans are, for faster navigation, divided into four _"Macrolepidopteran"_ and four _"Microlepidopteran"_ groups, all with easily recognizable names and color coding. Keep in mind that these groups are NOT actual taxa or datapoints! An overview of the group structure can be found in the table below.

|Color|English name|German name|Included Taxa|
|---|---|---|---|
||_"Macrolepidopterans"_|_"Großschmetterlinge"_||
|${\color[RGB]{255,255,153}██\color[RGB]{255,192,1}█\color[RGB]{255,255,153}██}$<br>${\color[RGB]{255,255,153}██\color[RGB]{255,192,1}█\color[RGB]{255,255,153}██}$|**Butterflies**|**Tagfalter**|Section Obtectomera / Subsection Rhopalocera<br>(Superfamilies Papilionoidea + Thyridoidea)|
|${\color[RGB]{255,204,102}██\color{red}█\color[RGB]{255,204,102}██}$<br>${\color[RGB]{255,204,102}██\color{red}█\color[RGB]{255,204,102}██}$|**Owlet Moths**|**Eulen**|Section Obtectomera / Subsection Macroheterocera<br>Infrasection Noctuina (Superfamily Noctuoidea)|
|${\color[RGB]{204,255,204}██\color[RGB]{153,204,0}█\color[RGB]{204,255,204}██}$<br>${\color[RGB]{204,255,204}██\color[RGB]{153,204,0}█\color[RGB]{204,255,204}██}$|**Geometrid Moths**|**Spannerartige**|Section Obtectomera / Subsection Macroheterocera<br>Infrasection Geometrina (Superfamily Geometroidea)|
|${\color[RGB]{204,204,255}██\color[RGB]{92,1,255}█\color[RGB]{204,204,255}██}$<br>${\color[RGB]{204,204,255}██\color[RGB]{92,1,255}█\color[RGB]{204,204,255}██}$|**Silkmoths**|**Spinner**|Section Obtectomera / Subsection Macroheterocera<br>Infrasection Bombycina (Superfamilies Bombycoidea + Lasiocampoidea)|
||_"Microlepidopterans"_|_"Kleinschmetterlinge"_||
|${\color[RGB]{255,204,255}██\color[RGB]{187,0,255}█\color[RGB]{255,204,255}██}$<br>${\color[RGB]{255,204,255}██\color[RGB]{187,0,255}█\color[RGB]{255,204,255}██}$|**Higher Micromoths**|**Höhere Motten**|Remaining Obtectomeran taxa<br>(Superfamilies Drepanoidea, Pyraloidea, etc.)|
|${\color[RGB]{255,204,204}██\color[RGB]{238,0,153}█\color[RGB]{255,204,204}██}$<br>${\color[RGB]{255,204,204}██\color[RGB]{238,0,153}█\color[RGB]{255,204,204}██}$|**Cossid Micromoths**|**Bohrerartige**|Section Cossina<br>(Superfamilies Cossoidea, Zygaenoidea and relatives)|
|${\color[RGB]{187,255,255}██\color[RGB]{30,185,188}█\color[RGB]{187,255,255}██}$<br>${\color[RGB]{187,255,255}██\color[RGB]{30,185,188}█\color[RGB]{187,255,255}██}$|**Typical Micromoths**|**Klassische Motten**|Remaining basal Distrysian taxa<br>(Superfamilies Gelechioidea, Tortricoidea, Yponomeutoidea, Tineoidea, etc.)|
|${\color[RGB]{238,238,204}██\color[RGB]{170,136,85}█\color[RGB]{238,238,204}██}$<br>${\color[RGB]{238,238,204}██\color[RGB]{170,136,85}█\color[RGB]{238,238,204}██}$|**Archaic Micromoths**|**Primitive Motten**|Remaining basal Lepidoptera<br>(Non-Ditrysian, like Adeloidea, Exoporia, Zeugloptera, etc.)|

Note that within the _"Microlepidoptera"_, the group naming and color coding mostly does not represent actual monophyletic entities, but is purely for aesthetics and practical reasons. The _"Macrolepidopterans"_ are, on the other hand, divided into four strictly monophyletic groups here, that actually do make somewhat sense from a practical standpoint.

## Workspace setup
### Setting up Git
This project uses Git as a version control system and its repository is hosted here on GitHub, naturally you’ll need to setup a GitHub account (if you haven’t done so already) and install Git on your computer. There’s many good tutorials out there about how to get started with Git, so I won’t go too much into detail. If you absolutely can’t figure out where to start, here’s my recommendation on how to proceed:
- Go to https://github.com/ and login or register.
- Go to https://desktop.github.com/ and download GitHub Desktop. Simply install the application, it will automatically setup and configure Git and an easy-to-use GUI for you.
- Open GitHub Desktop. You’ll be prompted to link it to your GitHub account. Proceed accordingly.
- Within GitHub Desktop, select “Clone a repository”, move to the “URL” tab and enter the following repository URL:
https://github.com/lepitaxa/lepitaxa.git
- Below, choose the local directory you want to use as a workspace. Start cloning. Git now will download all files included in the repository to your local workspace directory.
- From here on, you should be good to go on the Git front. Git will from now on detect and list all changes to the workspace directory, keep all development branches up-to-date and allow you to create new branches, commit changes and additions and push them back into the online repository, as well as open pull requests for merging changes into the main branch.

### Editing the data
All Lepitaxa data is included within a single file, index.html. This file also contains all the HTML, CSS and JavaScript code needed for the Lepitaxa webpage. Theoretically, you can open and edit this file using any text editor (even Windows Notepad), although I highly recommend to use a more modern text editor with support for code highlighting, along with a proper monospace font like Courier or Consolas. A solid and popular choice would be Notepad++ (https://notepad-plus-plus.org/).

To get around faster within the large dataset, simply use your text editors search function to jump to whatever datapoint you’d like to modify.

### Checking data integrity
To check if your modifications show up correctly on the webpage, just open index.html in a web browser. Especially for larger modifications and additions, I recommend to additionally run an automated data integrity check. To do this, open index.html in a web browser, show all taxa using the search button on top of the page and type “lepitest” in the search bar. Running a search like this will trigger the lepitest script, which checks the data for common mistakes and when done, displays an error log listing all mistakes found. Try to fix them and repeat the lepitest for confirmation.

Note that running a successfull lepitest does NOT guarantee full data integrity, as this simple script  can by no means detect everything. Also keep in mind that sometimes a single mistake within the data can cause several error points in a lepitest log, don’t get confused by that. They will all resolve after fixing the mistake.

### Exporting raw data
If you want to use Lepitaxa data for your own research, you’re free to do so in any way you want at all times, no need to ask for permission. More details about the dataset, its licensing as well as a data export feature (supports txt, csv, tsv and xml formats) can be found by clicking the “Stats & Infos” button on the bottom of the Lepitaxa webpage.

## Data types and guidelines
To-do: List all the different data types and data structure guidelines
