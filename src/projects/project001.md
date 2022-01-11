---
title: UFO sightings and science fiction movies - an analysis
parent: Projects
description: Thinkful Data Analytics capstone project
date: 2021-07-12
tags: [ 'data analysis' ]
imageName:
hasImage: False
public: True
---

At the end of 2020, I signed up for an online data analytics course through [Thinkful](https://www.thinkful.com/). We covered a wide variety of topics, including using Excel for statistics, data visualization in Tableau, working with databases using PostgreSQL, and Python for data analysis. Our final capstone was a self-directed data analysis project using Python in Colab, with an acompanying slide deck and presentation. 

After finding a large dataset from the [National UFO Reporting Center (NUFORC) on Kaggle](https://www.kaggle.com/NUFORC/ufo-sightings), I decided to take a look at the potential for correlation between yearly UFO sightings and the number of science fiction movies released that year. I cleaned and narrowed the NUFORC data down to sightings in the US, and created a list science fiction films by scaping IMDB using Beautiful Soup. I then compared the two data sets using a variety of statistical analysis techniques. 

At the end of it all, I was able to determing that there was *not* a statistically relavent corelation between the prevalence of UFO sightings and the number of science fiction movies released in a year.

Presentation: 
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRoT-YjDhlv64AJ_tKHmcaxTuD7GJk_V4MyVhl0J3pLNA6HJo0Qmez78LLc4nV1sg/embed?start=false&loop=false&delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Colab notebook:
<script src="https://gist.github.com/l8te/a4bdfa7d021e246fd4f47cb7576987d3.js"></script>


<!-- <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_Z-OUnviHB4fd5XcIvVRWwCmihsZE22ZrWnmB7BlzC8AyjpoyKC7DhzpEBKnvhg/pubhtml?widget=true&amp;headers=false"></iframe> -->