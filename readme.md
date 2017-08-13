An experimental fire data analysis and visualization using R, javascript, Leaftlet, and Plotly. 

The fire_script.R file scrapes fire websites every hour (you must configure with a local cron job) and pareses the Excel and CSV data (fire_history.csv, query.xlsx) to output several data in a "exportJSON.JSON" file.

Scripts within index.html format the JSON into the final output form. 

ESRI ArcGIS image services from the Alaska Fire Service are utilized in custom Leaflet maps. 

The script cleans up a bit of what I belive are human fat finger errors in data entry. 

```
#fixed the bad thign???***here 
fireHistory <- filter(fireHistory, Month >5)
fireHistory$SitReportDate <- gsub("2107-06-12","2017-06-12", fireHistory$SitReportDate)

```