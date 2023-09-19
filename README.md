Note: This README is WORK IN PROGRESS

# <img src="lepitaxa.png" height="32"> LEPITAXA  – Lepidopteran Classification Project
#### Website: https://lepitaxa.github.io/lepitaxa/

## Overview
- [Introduction](#introduction)
- [Basic structure](#basic-structure)
- [Setup workspace](#setup-workspace)
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



## Setup workspace
To-do: How to get started

## Data types and guidelines
To-do: List all the different data types and data structure guidelines
