# <picture><source media="(prefers-color-scheme: light)" srcset="lepitaxa.png"><source media="(prefers-color-scheme: dark)" srcset="lepitaxa2.png"><img src="lepitaxa.png" height="32"></picture> LEPITAXA – Lepidopteran Classification Project
#### Website: [lepitaxa.github.io](https://lepitaxa.github.io/)

## Overview
- [Introduction](#introduction)
- [Basic structure](#basic-structure)
- [Workspace setup](#workspace-setup)
- [Data types](#data-types)
- [Guidelines](#guidelines)
- [Project details](#project-details)

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
https://github.com/lepitaxa/lepitaxa.github.io.git
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

## Data types
### Basic data syntax
All data points within the Lepitaxa dataset share the following simple syntax made of four elements: **_`class`_ `TAB` _`data`_ `BR`**. These elements are:
1.  ***`class`*** – The data point class, which is a short and easy to remember set of 1-2 characters. Each class is linked to a data type and defines how the data string is handled and displayed.
2. **`TAB`** – A single tab (U+0009 TAB character, \t). Do NOT use spaces instead, no matter how many!
3. ***`data`*** – The actual data string, its specific fine structure for each data point class is explained further below.
4. **`BR`** – A single line break (U+000A NEWLINE character, \n). Unneeded carriage return characters (U+000D CR character, \r) should be removed automatically by Git.

Example of some data points:
```
g	Papilio
i	Papilio
a	machaon
e	Swallowtail
e	Old World Swallowtail
e	Common Yellow Swallowtail
d	Schwalbenschwanz
s	hippocrates
u	hippocrates
```

These datapoints form a very long, but simple list, resulting in a strictly linear dataset. The only thing that really matters is the correct order of the data points relative to each other. There is no true hierarchy or nesting present in the raw data! The taxon hierarchy visible on the Lepitaxa webpage is generated on page load by adding formatting and structure using CSS and JavaScript.

### Overview of supported data point classes and data types
Note: This overview is also included as a HTML comment within the first lines of the Lepitaxa index.html source code, as a quickly accessible cheatsheet while editing.

|Data point class|Data type|Data string fine structure|Short description|
|---|---|---|---|
|`x9`|ORD|[NAME]|Order name|
|`x8`|SUBORD|[NAME]|Suborder name|
|`x7`|INFRAORD|[NAME]|Infraorder name|
|`x6`|PARVORD|[NAME]|Parvorder name|
|`x5`|MICROORD|[NAME]|Microorder name|
|`x4`|SECT|[NAME]|Section name|
|`x3`|SUBSECT|[NAME]|Subsection name|
|`x2`|INFRASECT|[NAME]|Infrasection name|
|`x`|SUPERFAM|[NAME]|Superfamily name|
|`xs`|SERIES|[NAME]|Series name|
|`xp`|PARAPHYLUM|[NAME]|Paraphylum name|
|`f`|FAM|[NAME]|Family name|
|`y`|SUBFAM|[NAME]|Subfamily name|
|`t`|TRI|[NAME]|Tribe name|
|`j`|SUBTRI|[NAME]|Subtribe name|
|`h`|INFRATRI|[NAME]|Infratribe name|
|`g`|GEN|[GEN]|Genus name|
|`i`|SUBGEN|[NAME]|Subgenus name|
|`o`|SPGR|[NAME]|Species group name|
|`a`|SP|{GEN} [SP]|Epithet of extant species|
|`ae`|SP_EXT|{GEN} [SP] {"†"}|Epithet of extinct species|
|`c`|AGG|{GEN} [SP] {"agg."}|Aggregate name<br>(species complex/superspecies epithet)|
|`m`|SEG|{GEN} [SP]|Segregate name<br>(microspecies epithet)|
|`u`|SSP|{GEN} {SP} [SSP]|Epithet of extant subspecies|
|`ue`|SSP_EXT|{GEN} {SP} [SSP] {"†"}|Epithet of extinct subspecies|
|`e`|NAME_EN|[NAME]|English common name of a<br>species or species complex|
|`e2`|NAME_EN|[NAME]|English common name of a<br>family/tribe-level taxon|
|`d`|NAME_DE|[NAME]|German common name of a<br>species or species complex|
|`d2`|NAME_DE|[NAME]|German common name of a<br>family/tribe-level taxon|
|`s`|SYN|{GEN} [SP] (SSP)|Species synonym with different<br>species (+ optional subspecies) epithet|
|`s2`|SYN|[GEN] (SP) {SP/SSP}|(Sub)species synonym with different<br>genus (+optional species) name
|`s3`|SYN|{GEN} [SP] {SSP}|Species synonym of former subspecies<br>of the given species epithet|
|`s4`|SYN|[GEN] [SP] (SSP)|(Sub)species synonym with completely<br>different genus and species name
|`r`|REF|[AUT1]{" et al., 20"}['YY]|Scientific reference first author+year<br>when >2 authors|
|`r2`|REF|[AUT1]{" & "}(,AUT2){", 20"}['YY]|Scientific reference author(s)+year<br>when ≤2 authors|
|`l`|REF_TITLE|[TITLE]|Title of scientific reference|
|`p`|REF_ID|{", doi:"}[DOI]|ID of scientific reference via DOI|
|`p2`|REF_ID|{", ISSN-L "}[ISSN-L,] [VOL]\(ISSUE\)|ID of scientific reference via<br>ISSN-L and Volume+Issue designation|

{#} Auto-generated data substring – added on page load via JavaScript<br>
[#] Required data (sub)string – must always be present<br>
(#) Optional data substring – can be added in addition to a required substring

## Guidelines
Here you can find guidelines and details for the individual data types, which should be followed when modifying the dataset. They are important to ensure that all data points are displayed in their correct position and format on the Lepitaxa webpage. Only data points fulfilling these guidelines will be accepted and merged into the main branch. Running a lepitest before opening a pull request can help knock out many common mistakes when it comes to the data fine structure and sorting.

---
### 1 - ORD, SUBORD, INFRAORD, PARVORD, MICROORD (`x9, x8, x7, x6, x5`)
The highest-level taxa, forming the backbone of the order Lepidoptera. These are not supposed to be changed, unless there is solid and undisputable phylogenetic proof to do so.

:point_right: **Guidelines:**
- 1.1. Order-level taxa should be sorted roughly as they would appear in a cladogram, with crown group taxa closer to the top and more basal taxa further below.
- 1.2. The allowed character set is basic latin (A-Z).
- 1.3. The taxon name must start with an upper-case letter, followed by lower-case letters only.
- 1.4. The taxon name must end with the suffix _-a_.
- 1.5. The naming and arrangement are only to be changed if there's undisputable phylogenetic proof to do so.
  
---
### 2 - SECT, SUBSECT, INFRASECT (`x4, x3, x2`)
The section-level taxa are used to further subdivide very diverse microorders in zoology. Note that this is different from botany, where sections are used to further subdivide large subgenera!

:point_right: **Guidelines:**
- 2.1. Section-level taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 2.2. The naming of section-level taxa follows Guidelines 1.2., 1.3. and 1.4.

---
### 3 - SUPERFAM (`x`)
Superfamily taxa are used to group closely related families together. Note that in Lepidopterology, every family is traditionally assigned to a superfamily, even isolated families that wouldn't even need to be placed in a superfamily!

:point_right: **Guidelines:**
- 3.1. Superfamily taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 3.2. Isolated families must be included in their own superfamily, as per tradition.
- 3.3. The taxon name must be taken from the nominate family, but end with the suffix _-oidea_ instead.
  
---
### 4 - SERIES (`xs`)
The series-level taxa are traditionally used to further subdivide diverse superfamilies in Lepidopterology. Note that this is different from botany, where series are used to further subdivide large sections within subgenera!

:point_right: **Guidelines:**
- 4.1. Series-level taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 4.2. The series containing the nominate family of its respective superfamily must be listed first.
- 4.3. The taxon name must be taken from its most important or most typical family, but end with the suffix _-iformes_ instead.
  
---
### 5 - PARAPHYLUM (`xp`)
Paraphylum data points are used to group subsequent data into a major, but nowadays obsolete taxon. These traditionally and historically very important backbone taxa turned out to be paraphyletic in more modern phylogenetic studies and therefore are no longer valid. They still find, to some degree, practical use in Lepidopterology though.

:point_right: **Guidelines:**
- 5.1. Paraphyla should only be used for major, obsolete and proven-to-be paraphyletic taxa. These include all invalid order-level and section-level taxa. Anything below will be ignored due to sheer numbers and to keep the dataset clean and easy to navigate.
- 5.2. The naming of paraphyla follows Guidelines 1.2., 1.3. and 1.4.

---
### 6 - FAM (`f`)
Families are a major and important taxonomic rank, used to group species with fundamental commonalities together. New families should only be added or existing ones only be modified if there is solid and undisputable phylogenetic proof to do so.

:point_right: **Guidelines:**
- 6.1. Family taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 6.2. The nominate family should always be listed first within a series or superfamily.
- 6.3. The naming of families follows Guidelines 1.2. and 1.3.
- 6.4. The taxon name must be taken from its nominate genus, but be suffixed with _-idae_.
- 6.5. The naming and set of existing families are only to be changed if there's undisputable phylogenetic proof to do so.

---
### 7 - SUBFAM (`y`)
Subfamilies are major subdivisions of families, representing their most prominent lines of evolution.

:point_right: **Guidelines:**
- 7.1. Subfamily taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 7.2. The nominate subfamily should always be listed first within a family.
- 7.3. The naming of subfamilies follows Guidelines 1.2. and 1.3.
- 7.4. The taxon name must be taken from its nominate genus, but be suffixed with _-inae_.
- 7.5. The number of subfamilies should be kept as small as possible and only encompass the most prominent branches within the cladogram of a family. Oversplitting families into more than a dozen subfamilies is questionable and will not be accepted, unless there's solid phylogenetic proof to do so.

---
### 8 - TRI (`t`)
Tribe taxa are used to further subdivide subfamilies in case they contain different, prominent lines of evolution.

:point_right: **Guidelines:**
- 8.1. Tribe taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 8.2. The nominate tribe should always be listed first within a subfamily.
- 8.3. The naming of tribes follows Guidelines 1.2. and 1.3.
- 8.4. The taxon name must be taken from its nominate genus, but be suffixed with _-ini_.
- 8.5. The number of tribes should be kept low and only encompass the most prominent branches within the cladogram of a subfamily. Oversplitting subfamilies into dozens of tribes is questionable and will not be accepted, lower-level taxa should be used instead to further fine-structure subfamilies.

---
### 9 - SUBTRI (`j`)
Subtribe taxa are used to further subdivide very diverse tribes.

:point_right: **Guidelines:**
- 9.1. Subtribe taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 9.2. The nominate subtribe should always be listed first within a tribe.
- 9.3. The naming of subtribes follows Guidelines 1.2. and 1.3.
- 9.4. The taxon name must be taken from its nominate genus, but be suffixed with _-ina_.

---
### 10 - INFRATRI (`h`)
Infratribe taxa are occasionally used to further subdivide very diverse subtribes.

:point_right: **Guidelines:**
- 10.1. Infratribe taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 10.2. The nominate infratribe should always be listed first within a subtribe.
- 10.3. The naming of infratribes follows Guidelines 1.2. and 1.3.
- 10.4. The taxon name must be taken from its nominate genus, but be suffixed with _-iti_.

---
### 11 - GEN (`g`)
A genus is a fundamental base taxon grouping closely related species together.

:point_right: **Guidelines:**
- 11.1. Genus taxa must be sorted strictly alphabetical within any higher-level taxon.
- 11.2. The naming of genera follows Guidelines 1.2. and 1.3.

---
### 12 - SUBGEN (`i`)
Subgenus taxa are often used to further subdivide genera into prominent evolutional branches.

:point_right: **Guidelines:**
- 12.1. Subgenus taxa should be sorted roughly as they would appear in a cladogram, meaning closely related ones should be neighbors.
- 12.2. The nominate subgenus should always be listed first within a genus and contain the type species of the genus.
- 12.3. The name of the nominate subgenus must be identical to its parent genus.
- 12.4. The naming of subgenera otherwise follows Guidelines 1.2. and 1.3.
- 12.5. The number of subgenera should be kept low and only encompass the most prominent branches within the cladogram of a genus. Oversplitting genera into more than a dozen subgenera is questionable and will not be accepted, species groups should be used instead to further fine-structure genera.

---
### 13 - SPGR (`o`)
Species groups are occasionally used to further subdivide very large subgenera.

:point_right: **Guidelines:**
- 13.1. Species groups must be sorted strictly alphabetical within a subgenus.
- 13.3. The name of a species group should be identical to the species epithet of its most important species, but start with an upper-case letter. 

---
### 14 - SP, SP_EXT (`a, ae`)
The epithet of an extant (`a`) or extinct (`ae`) species. The genus name is prepended automatically via JavaScript to form the full binomial name of the species. Extinct species have, in addition, the "†" sign appended automatically after the epithet.

:point_right: **Guidelines:**
- 14.1. Species must be sorted strictly alphabetical within any higher-level taxon.
- 14.2. The allowed character set is basic latin (A-Z), with the addition of at most one hyphen (U+002D HYPHEN-MINUS character) within the epithet.
- 14.3. Epithets are made of lower-case letters only.
- 14.4. Extinct species should only be listed if their phylogenetic posiition is known with some certainty, raw guesses are not accepted. 

---
### 15 - AGG (`c`)
A species aggregate (species complex, superspecies epithet). This kind of taxon is occasionally used to group superficially indistinguishable "microspecies" together. Apart from having the "agg." designation appended automatically after the epithet via JavaScript and containing microspecies instead of subspecies, species aggregates are treated like a real species in Lepitaxa. This principle of grouping microspecies into an aggregate/complex and treating them as "one big species" is a good practical compromise between professionals and hobbyists, with latter ones usually neither having the expertise nor the equipment to reliably separate the individual microspecies.

:point_right: **Guidelines:**
- 15.1. The sorting of species aggregates follows Guideline 14.1., due to them being treated like species internally.
- 15.2. The aggregate's epithet is identical to its oldest (= first described) microspecies.
- 15.3. Species aggregates must be strictly monophyletic, even when there's other superficially indistinguishable, but more distantly related species within the same genus, which could be tempting to be included in the aggregate.
- 15.4. Species aggregates cannot contain subspecies, which would barely make sense anyway due to the encompassed microspecies often not being clearly separated themselves.

---
### 16 - SEG (`m`)
A species segregate (microspecies epithet). The species-like subdivisions of an aggregate/species complex. These microspecies are either "good" species or genetically/morphologically not fully separated "cryptic" species, which can only be distinguished via microscopic details or minor differences in DNA.

:point_right: **Guidelines:**
- 16.1. Species segregates must be sorted strictly alphabetical relative to each other within a species aggregate.
- 16.2. Species segregates must be grouped and sorted AFTER all references, common names and synonyms within a species aggregate.
- 16.3. The naming of species segregates follows Guidelines 14.2. and 14.3.
- 16.4. Species segregates cannot contain subspecies, due to them often not being clearly separated themselves and them being treated similar to subspecies internally.

---
### 17 - SSP, SSP_EXT (`u, ue`)
The epithet of an extant (`u`) or extinct (`ue`) subspecies. The genus name and species epithet is prepended automatically via JavaScript to form the full trinomial name of the subspecies. Extinct subspecies have, in addition, the "†" sign appended automatically after the epithet.

:point_right: **Guidelines:**
- 17.1. Subspecies must be sorted strictly alphabetical relative to each other within a species.
- 17.2. Subspecies must be grouped and sorted AFTER all references, common names and synonyms within a species.
- 17.3. The naming of subspecies follows Guidelines 14.2. and 14.3.
- 17.4. Only prominent/important subspecies should be listed, it's also not wrong to list non at all when they're practically indistinguishable. Listing the nominate subspecies is not necessary either, but can be done if important.

---
### 18 - NAME_EN, NAME_DE (`e, e2, d, d2`)
The English (`e, e2`) and German (`d, d2`) common/trivial names of a species, species complex or certain higher-level taxa like families and tribes.

:point_right: **Guidelines:**
- 18.1. The addition of type 1 common names (`e, d`) is supported for species and species aggregates. These names must be written in SINGULAR.
- 18.2. The addition of type 2 common names (`e2, d2`) is supported for all family- and tribe-level taxa (`x, f, y, t, j, h`), paraphyla (`xp`) and orders (`x9`). These names must be written in PLURAL.
- 18.3. Common names are supported for the English (`e, e2`) and German language (`d, d2`) only, with the English ones being listed first.
- 18.4. Common names must be grouped and sorted AFTER all references, but BEFORE all synonyms, microspecies or subspecies.
- 18.5. The common names of each language should be sorted relative to each other according to their importance/prominence in everyday use or according to their preference when a newer name is supposed to phase-out the use of an older one. More important/preferred names should be listed closer to the top.
- 18.6. The allowed character sets are basic latin (A-Z), extended latin (äáéöüß etc.), apostrophes (U+0027), hyphens (U+002D) and spaces (U+0020).
- 18.7. The words of a common name must always start with an upper-case letter, with the exception of conjunctions like "and", "of", "du", "und", "von", which should be lower-case only.
- 18.8. Common names must follow English and German grammar and spelling rules respectively.
- 18.9. Common names including obscene, vulgar, offensive or insulting terms are not accepted.
- 18.10. Adding common names can sometimes lead to duplicates, which should be avoided. In such a case, one of the names should be changed or removed.
- 18.11. Moth-like butterflies should be called "Moth Butterflies" (German "Trugfalter") instead of the older term "Butterfly Moths".
- 18.12. The German term "Falter" should be avoided for Microlepidopterans if possible, as it can cause confusion of names and is more often used to refer to Macrolepidopterans. Instead, the term "Motten" is preferred for Microlepidopterans.
- 18.13. The obsolescent German term "Gemein" is to be replaced with the more modern and easier to understand term "Gewöhnlich".
- 18.14. Abbreviations like "&" for "and/und", "St." for "Saint/Sankt" or "Mt." for "Mount" should be avoided, common names should always contain full words.

---
### 19 - SYN (`s, s2, s3, s4`)
A binomial or trinomial synonym of a species, subspecies or microspecies. These synonyms can be listed within species and species aggregates to make obsolete scientific names available via the search function. Depending on which part of the species' or species aggregate's binomial name is retained in the synonym, different data point classes (`s, s2, s3, s4`) can be chosen to automatically generate the retained part via JavaScript.

:point_right: **Guidelines:**
- 19.1. Type 1 synonyms (`s`) should be used for synonyms with the same genus name, but a different species (+optional subspecies) epithet. The parent genus name is prepended automatically via JavaScript.
- 19.2. Type 2 synonyms (`s2`) should be used for synonyms with the last epithet matching the parent, but the genus name (+optional first epithet) being different. The parent epithet is appended automatically via JavaScript.
- 19.3. Type 3 synonyms (`s3`) should be used for synonyms with the genus name and last epithet matching the parent, but the first epithet being different (former subspecies of given species epithet). The parent genus name is prepended and the parent epithet appended automatically via JavaScript.
- 19.4. Type 4 synonyms (`s4`) should be used if neither the genus name nor the species epithet of the parent matches. A different genus name and species epithet must be given (+an optional subspecies epithet).
- 19.5. Synonyms must be grouped and sorted AFTER all references and common names, but BEFORE all microspecies or subspecies.
- 19.6. The synonyms should be sorted strictly alphabetical relative to each other, with ALL auto-generated parts taken into account (prepended genus names and appended epithets included in sorting!).
- 19.7. The naming of epithets follows Guidelines 14.2. and 14.3., the naming of genera follows Guidelines 1.2. and 1.3., with single spaces (U+0020) separating them.
- 19.8. Only important and somewhat commonly encountered or recent synonyms should be listed to keep the dataset from getting too bloated with obsolete names. There're excessive numbers of synonyms available for some taxa of which most can be safely ignored.

---
### 20 - REF (`r, r2`)
A reference to a scientific publication/dataset the phylogenetic data is based on. This data type forms the first element of REF data triplets including REF, REF_TITLE and REF_ID.

:point_right: **Guidelines:**
- 20.1. Type 1 references (`r`) should be used for publications with more than two authors. Only the first author is to be mentioned, which has the string " et al." appended automatically via JavaScript.
- 20.2. Type 2 references (`r2`) should be used for publications with only one or two authors. If there's two, both authors need to be mentioned, separated with a single comma (U+002C) and NO spaces. The comma is, if present, replaced with " & " automatically via JavaScript.
- 20.3. References are supported for all species-level taxa (`a, ae, c`), genera, subgenera and species groups (`g, i, o`), family- and tribe-level taxa (`x, f, y, t, j, h`), paraphyla (`xp`) and orders (`x9`).
- 20.4. References must always be the first element of a REF data triplet, therefore be followed by a REF_TITLE and REF_ID. These three data points belong together and should not be separated!
- 20.5. References must be grouped and sorted BEFORE common names, synonyms, microspecies or subspecies.
- 20.6. REF data triplets should be sorted relative to each other by the year of publication (ascending) and within the same year by the author (alphabetical).
- 20.7. The order and prioritization of author names should be the same as in the publication (first author listed in publication = first author shown on Lepitaxa).
- 20.7. The author names must be their last name only and follow Guideline 18.6.
- 20.8. The publication year only supports 21<sup>st</sup> century values in _YY_ format. This restriction should limit references to the ones providing "modern phylogeny". Even though phylogenetic research from the 1980s and 1990s must be considered important pioneer work, the resulting data simply doesn't hold up to modern standards.
- 20.9. The publication year _YY_ value must be separated by a single apostrophe (U+0027) from the author(s). The apostrophe is replaced with ", 20" automatically via JavaScript.
- 20.10. Only references to publications containing phylogenetic data are accepted, preferably based on as-precise-as-possible molecular data, ideally phylogenomics. Referencing research based solely on morphology is only acceptable if there's nothing else available for a specific taxon. 
- 20.11. Referenced publications should preferentially be available in English, but are also accepted in German. If they're written in any other language, at least the abstract and data should be available in English.
- 20.12. Referenced publications must be unambiguously identifiable, preferentially via DOI. If there's no DOI available, a combination of Title + ISSN-L + Volume should be sufficient for identification, otherwise it will not be accepted.

---
### 21 - REF_TITLE (`l`)
The title of a referenced scientific publication. This data type forms the second element of REF data triplets including REF, REF_TITLE and REF_ID.

:point_right: **Guidelines:**
- 21.1. The title should be taken straight from the publication, unmodified. If there's two or more titles in different languages available, English has priority 1 and should be used instead (if present), German has priority 2.
- 21.2. Titles must always be the second element of a REF data triplet, therefore be prepended by a REF and appended by a REF_ID. These three data points belong together and should not be separated!
- 21.3. The sorting follows Guideline 20.5.

---
### 22 - REF_ID (`p, p2`)
The ID of a referenced scientific publication. This data type forms the last element of REF data triplets including REF, REF_TITLE and REF_ID.

:point_right: **Guidelines:**
- 22.1. Type 1 IDs (`p`) are used if there is a DOI available for a publication. This always has priority!
- 22.2. Type 2 IDs (`p2`) are used if there is no DOI available for a publication. Instead, the ISSN-L and Volume+Issue designation is specified.
- 22.3. The DOI (Digital Object Identifier) must be taken straight from the publication source, unmodified. Do NOT add any _doi:_-prefix (will be added automatically via JavaScript), the raw ID should be used. The DOI will be turned into a link to the publication source on the Lepitaxa webpage, appended to REF_TITLE. Please make sure this link actually works!
- 22.4. The ISSN-L (Linking International Standard Serial Number) must be taken straight from the publication source, unmodified, using the _NNNN-NNNC_ syntax. Do NOT add the _ISSN-L_-prefix (will be added automatically via JavaScript), the raw ID should be used. The ISSN-L will be turned into a link to the ISSN portal on the Lepitaxa webpage, offering more details on the publication source. Please make sure this link actually works!
- 22.5. Any ISSN-L must be followed by a Volume (+optional Issue) designation. The volume number is added directly after the ISSN-L, separated by a single comma (U+002C) and NO spaces. The issue number, in case one exists, is added within parentheses directly after the volume number, with NO spaces separating them.
- 22.6. IDs must always be the last element of a REF data triplet, therefore be prepended by a REF and REF_TITLE. These three data points belong together and should not be separated!
- 22.7. The sorting follows Guideline 20.5.

---

## Project details

**LEPITAXA – Lepidopteran Classification Project**
- Author: [Georg Hammerschmid](https://github.com/lepitaxa)
- Creation date: 05.12.2020
- Webhost Lepitaxa site: [pages.github.com](https://pages.github.com/) since 17.09.2023
- GitHub repository: [lepitaxa / lepitaxa.github.io](https://github.com/lepitaxa/lepitaxa.github.io)
- Licencing lepitaxa designs: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
- Licencing raw data: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)