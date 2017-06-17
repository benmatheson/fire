unlink(".RData") 


library(dplyr)
library(readxl)
library(sp)
library(rgdal)
library(geojsonio)
library(rjson)
library(jsonlite)
library(lubridate)

#https://github.com/OpenGov/Leaflet.bubble
#how to make geojson
#https://recology.info/2015/04/geojson-io/
#crontab via this https://ole.michelsen.dk/blog/schedule-jobs-with-crontab-on-mac-osx.html
getwd()
#setwd("fire")


fires <- download.file("https://fire.ak.blm.gov/content/aicc/sitreport/sit%20query.xlsx", "query.xlsx")
fires <- read_xlsx("query.xlsx")
fires <- as.data.frame(fires)
#firesSP <- as.data.frame(fires)
#coordinates(firesSP) <- ~ LONGITUDE + LATITUDE
#writeOGR(firesSP, 'fires.geojson',layer="fires", driver='GeoJSON')
#load the CSV for history

fireHistory <- download.file("https://fire.ak.blm.gov/content/aicc/Statistics%20Directory/Alaska%20Daily%20Stats%20-%202004%20to%20Present.csv", "fire_history.csv")
fireHistory <- read.csv("fire_history.csv")
fireHistory <- as.data.frame(fireHistory)
head(fireHistory)
#make the fire history a date in YYYY-MM-DD format

fireHistory$SitReportDate <- as.character(fireHistory$SitReportDate)
slice1 <- substr(fireHistory$SitReportDate, 1,4)
slice2 <- substr(fireHistory$SitReportDate, 5,6)
slice3 <- substr(fireHistory$SitReportDate, 7,8)
fireHistory$SitReportDate<- paste(slice1, slice2, slice3, sep="-") 

#fixed the bad thign???***here 
fireHistory <- filter(fireHistory, Month >5)
fireHistory$SitReportDate <- gsub("2107-06-12","2017-06-12", fireHistory$SitReportDate)

#create julien date
fireHistory$jd <- yday(fireHistory$SitReportDate)

fireHistory2017 <- filter(fireHistory, FireSeason ==2017) %>% arrange(desc(SitReportDate))

fireHistoryHumanAcres <- toJSON(fireHistory2017$HumanAcres)
fireHistoryLightningAcres <- toJSON(fireHistory2017$LightningAcres)
fireHistoryHumanFires<- toJSON(fireHistory2017$HumanFires)
fireHistoryLightningFires <- toJSON(fireHistory2017$LightningFires)

fireHistoryDates <- filter(fireHistory, jd >150 & jd<200 &FireSeason ==2016) %>% arrange((jd))
fireHistoryDates <- toJSON(fireHistoryDates$SitReportDate)

View(fireHistory)

#think this returns just the vector

fireHistory2017Acres <- toJSON(filter(fireHistory, FireSeason == 2017, jd >150) %>% arrange((jd))%>% .$TotalAcres)
fireHistory2016Acres <- toJSON(filter(fireHistory, FireSeason == 2016, jd >150) %>% arrange((jd))%>% .$TotalAcres)
fireHistory2015Acres <- toJSON(filter(fireHistory, FireSeason == 2015, jd >150) %>% arrange((jd))%>% .$TotalAcres)
fireHistory2014Acres <- toJSON(filter(fireHistory, FireSeason == 2014, jd >150) %>% arrange((jd))%>% .$TotalAcres)
fireHistory2013Acres <- toJSON(filter(fireHistory, FireSeason == 2013, jd >150) %>% arrange((jd))%>% .$TotalAcres)
fireHistory2012Acres <- toJSON(filter(fireHistory, FireSeason == 2012, jd >150) %>% arrange((jd))%>% .$TotalAcres)
fireHistory2011Acres <- toJSON(filter(fireHistory, FireSeason == 2011, jd >150) %>% arrange((jd))%>% .$TotalAcres)

fireHistory2017Acres

fireHistory2013Acres
####Parse the fire Dataframe#####

#remove the problematic "{}" in the 

fires$ESTIMATEDTOTALACRES <- gsub("}","",fires$ESTIMATEDTOTALACRES)
fires$ESTIMATEDTOTALACRES <-  gsub("\\{","",fires$ESTIMATEDTOTALACRES)
fires$ESTIMATEDTOTALACRES <- as.numeric(fires$ESTIMATEDTOTALACRES)



#as.numeric (as.character(fires$ESTIMATEDTOTACRES, stringsAsFactors = FALSE )) 
typeof(fires$ESTIMATEDTOTALACRES)

#this checks to see if there is an OUTDATE on the fire
fires$burning <- is.na(fires$OUTDATE)
currentFires <- filter(fires, burning==TRUE)
currentCount <- nrow(currentFires)


outFires <- filter(fires, burning==FALSE)

humanFires <- filter(fires, GENERALCAUSE=="Human")
humanFiresNumber <- count(humanFires)

lightningFires <- filter(fires, GENERALCAUSE=="Lightning")
lightningFiresNumber <- count(lightningFires)

totalFires <- as.numeric(lightningFiresNumber + humanFiresNumber)


#Most expensive current fires
  
mostExpensive <- arrange(fires, desc(ESTIMATEDTOTALCOST))
mostExpensive <- mostExpensive[1:10,]
mostExpensiveNumber <- mostExpensive[1,18]
mostExpensiveName <- mostExpensive[1,2]


largestFires <- arrange(fires, desc(ESTIMATEDTOTALACRES))
largestFires <- largestFires[1:10,]
largestFireNumber <- largestFires[1,11]
largestfireName <- largestFires[1,2]

totalAcerage <- sum(fires$ESTIMATEDTOTALACRES, na.rm=TRUE)
totalCost <- sum(fires$ESTIMATEDTOTALCOST, na.rm=TRUE)

sysTime <- paste0(Sys.time()) 
sysDate <- paste0(Sys.Date())
 
#removes the fires that don't have both cost and size
sizeCost <- filter(fires, ESTIMATEDTOTALCOST != 0 & ESTIMATEDTOTALACRES != 0)

costArray <-fires$ESTIMATEDTOTALCOST
typeof(costArray)
str(costArray)
costArray <- toJSON(costArray)

sizeArray <- fires$ESTIMATEDTOTALACRES
sizeArray <-toJSON(sizeArray)
sizeArray <- gsub('"',"",sizeArray)

nameArray <- as.character(fires$NAME)
nameArray <- toJSON(nameArray)

discoverArray <- fires$DISCOVERYDATETIME
typeof(discoverArray)
discoverArray <- toJSON(discoverArray)

#Bring summary data into dataframe, export to JSON

#, sizeArray, nameArray, discoverArray, totalFiresc)
row <- c(sysTime, lightningFiresNumber, humanFiresNumber, totalAcerage, totalCost, mostExpensiveNumber, largestFireNumber, mostExpensiveName, largestfireName, currentCount, costArray, sizeArray, nameArray, discoverArray, totalFires, fireHistoryDates, fireHistoryHumanAcres, fireHistoryHumanFires, fireHistoryLightningAcres, fireHistoryLightningFires, fireHistory2017Acres, fireHistory2013Acres)
export <- data.frame(row, stringsAsFactors=FALSE)
names(export) <- c("systemTime", "lightningFiresNumber", "humanFiresNumber", "totalAcerage", "totalCost", "mostExpensiveNumber", "largestFireNumber", "mostExpensiveName", "largestfireName", "currentCount", "costArray", "sizeArray", "nameArray", "discoverArray", "totalFires", "fireHistoryDates", "fireHistoryHumanAcres", "fireHistoryHumanFires", "fireHistoryLightningAcres", "fireHistoryLightningFires", "fireHistory2017Acres", "fireHistory2013Acres")
exportJSON <- toJSON(export, pretty=TRUE)
write(exportJSON, "exportJSON.JSON")

fireHistory2013Acres

push_git <- paste0("git add --all && git commit -m '", 
                   as.character(Sys.time()), 
                   "' && git push origin master")

system(push_git)

download.file("https://rawgit.com/benmatheson/fire/master/exportJSON.JSON", "local_download.json")







