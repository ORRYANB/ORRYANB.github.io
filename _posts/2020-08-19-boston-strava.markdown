---
layout: post
title:  "Creating a Heat Map from Our Running Routes in Boston, MA"
date:   2020-08-19 10:31:05 -0400
categories: maps
---
I've found that exploring a new city on foot is one of best ways to get to know it. I learn the street connections, landmarks, views, rhythms and the quirks of a city by just walking around it. It usually takes time to orient myself to a new place, so if I know I'm going out for a long exploratory walk, I'll usually track my route using Strava on my phone. That way if I stumble across something noteworthy, I can explore the route from my computer when I get back.

My husband spent our first few months in Boston training for the Boston Marathon. I thought it would be fun to create a heatmap from our compiled walk/ run data from Strava. Boston has reputation as a walkable city ([WalkScore of 97 out of 100][walkscore]). You can see from the final map, we definitely found our favorite routes-- including a loop along the Charles River, anywhere in The Common/ The Garden, and along Riverwalk in the Seaport. The map visualizes 172 routes (including 2 canoe trips along the Charles), totaling approximately 678 miles.

I used the Strava app on an **iPhone 7** to collect the routes. I used **ESRI ArcGIS Pro 2.4.3** to convert, compile and clean the data. And I used **Mapbox GL JS** to visualize the final heatmap. Check out how I did it below.

[![Boston Heatmap](https://raw.githubusercontent.com/ORRYANB/ORRYANB.github.io/master/_posts/assets/boston_strava_heatmap.PNG)](https://orryanb.github.io/maps/bostonruns.html)

###### Heatmap of our running/ walking routes around Boston. Collected fall 2019. Click the image for an interactive map.


<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<script src="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
<script>
	mapboxgl.accessToken = 'pk.eyJ1Ijoib3JyeWFuYmIiLCJhIjoiY2tlMWJ4Y2lwMmNpMDJxa2plcW12azFuMSJ9.3zlZzlycsMf1SMGDAjTQVA';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/orryanbb/cke1c10ge0a1419nzh5q7zmmu', // style URL
center: [-71.08266, 42.34674], // starting position [lng, lat]
zoom: 13.01 // starting zoom
});
</script>


**_Step 1: Download all Strava routes as .gpx files_**

To do this, I exported all of my routes as .gpx files using Strava's bulk export feature (I started using Strava in 2014, so this turned out to be hundreds of individual routes). [Exporting your Data and Bulk Export][strava-export]

**_Step 2: Convert .gpx to features in ArcGIS_**

I converted each of the .gpx files using the 'GPX to Features' and 'Points to Line' tools in ArcGIS.

**_Step 3: Import the tracks a layer in Mapbox and style_**

To achieve the heatmap effect in Mapbox, I duplicated the *tracks* layer three times and adjusted the opacity and line width for each layer.

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

[walkscore]: https://www.walkscore.com/score/boston-ma
[strava-export]: https://support.strava.com/hc/en-us/articles/216918437-Exporting-your-Data-and-Bulk-Export
