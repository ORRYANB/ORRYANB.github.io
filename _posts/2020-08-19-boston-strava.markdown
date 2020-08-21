---
layout: post
title:  "Creating a Heat Map from Our Running Routes in Boston, MA"
date:   2020-08-19 10:31:05 -0400
categories: maps
---
I find that exploring a new city on foot is one of best ways to get to know it . I learn the street connections, landmarks, views, rhythms and the quirks of a city by just walking around it. It usually takes time to orient myself to a new place, so if I know I'm going out for a long exploratory walk, I'll usually track my route using Strava on my phone. That way if I stumble across something noteworthy, I can explore the route from my computer when I get back.

My husband spent our first few months in Boston training for the Boston Marathon. I thought it would be fun to create a heatmap from our compiled walk/ run data from Strava. Boston has reputation as a walkable city ([WalkScore of 97 out of 100][walkscore]). You can see from the final map, we definitely found our favorite routes-- including a loop along the Charles River, anywhere in The Common/ The Garden, and along Riverwalk in the Seaport. The map visualizes 172 routes (including 2 canoe trips along the Charles), totaling approximately 678 miles.

I used the Strava app on an **iPhone 7** to collect the routes. I used **ESRI ArcGIS Pro 2.4.3** to convert, compile and clean the data. And I used **Mapbox GL JS** to visualize the final heatmap. Check out how I did it below.


Step 1: Download all Strava routes as .gpx files.
  To do this, I exported of my routes as .gpx files using Strava's bulk export feature (I started using Strava in 2014, so this turned out to be hundreds of individual routes). [Exporting your Data and Bulk Export][strava-export]

Step 2: Convert .gpx to features in ArcGIS
  I converted each of the .gpx files to using the 'GPX to Features' and 'Points to Line' tools in ArcGIS.


Step 3: Import the tracks a layer in Mapbox and style.
  To achieve the heatmap effect in Mapbox, I duplicated the tracks layer three times and adjusted the opacity and line width for each layer.
  
  ```
{
    "id": "tracks-top",
    "type": "line",
    "layout": {},
    "paint": {"line-color": "hsl(310, 34%, 48%)", "line-width": 1,"line-opacity": 0.5}
},  
{
    "id": "tracks-middle",
    "type": "line",
    "layout": {},
    "paint": {"line-color": "hsl(144, 8%, 88%)", "line-width": 5,"line-opacity": 0.5}
},
{
  "id": "tracks-base",
  "type": "line",
  "layout": {},
  "paint": {"line-color": "hsl(171, 41%, 43%)","line-width": 13,"line-opacity": 0.5}
},

```

![Mapbox Storytelling Template](https://github.com/ORRYANB/ORRYANB.github.io/blob/master/_posts/assets/park_storytelling.gif?raw=true "Mapbox Storytelling")

[walkscore]: https://www.walkscore.com/score/boston-ma
[strava-export]: https://support.strava.com/hc/en-us/articles/216918437-Exporting-your-Data-and-Bulk-Export
