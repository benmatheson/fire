An experimental fire data analysis and visualization using R, javascript, Leaftlet, and Plotly. 


![fire1](http://benmatheson.github.io/images/fire_4.png)

![fire2](http://benmatheson.github.io/images/fire_1.png)


The fire_script.R file scrapes fire websites every hour (you must configure with a local cron job) and pareses the Excel and CSV data (fire_history.csv, query.xlsx) to output several data in a "exportJSON.JSON" file.

Scripts within index.html format the JSON into the DOM and render Plot.ly charts.

ESRI ArcGIS image services (only updated during the fire season) from the Alaska Fire Service are utilized in custom Leaflet maps. 

The script also cleans up a bit of what I belive are human fat finger errors in the fire crews' data entry. 

```
#fixed the bad thign???***here 
fireHistory <- filter(fireHistory, Month >5)
fireHistory$SitReportDate <- gsub("2107-06-12","2017-06-12", fireHistory$SitReportDate)

```
