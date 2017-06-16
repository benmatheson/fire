unlink(".RData") 


library(dplyr)
library(readxl)
library(sp)
library(rgdal)
library(geojsonio)
library(rjson)
library(jsonlite)

#https://github.com/OpenGov/Leaflet.bubble
#how to make geojson
#https://recology.info/2015/04/geojson-io/
#crontab via this https://ole.michelsen.dk/blog/schedule-jobs-with-crontab-on-mac-osx.html
getwd()
setwd("fire")


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



fireHistory2017 <- filter(fireHistory, FireSeason == 2017, Month >5)
fireHistory2017 <- arrange(fireHistory2017, desc(SitReportDate))
fireHistory2017[1,"SitReportDate"]="20170612"
fireHistory2017 <- arrange(fireHistory2017, desc(SitReportDate))

#fireHistory2017$SitReportDate <-(as.numeric(fireHistory2017$SitReportDate))
#typeof(fireHistory2017$SitReportDate)

fireHistoryDate <- as.character(fireHistory2017$SitReportDate)

slice1 <- substr(fireHistoryDate, 1,4)
slice2 <- substr(fireHistoryDate, 5,6)
slice3 <- substr(fireHistoryDate, 7,8)
  

fireHistoryDate <- paste(slice1, slice2, slice3, sep="-") 
fireHistoryDate <- toJSON(fireHistoryDate)
fireHistoryHumanAcres <- toJSON(fireHistory2017$HumanAcres)
fireHistoryLightningAcres <- toJSON(fireHistory2017$LightningAcres)
fireHistoryHumanFires<- toJSON(fireHistory2017$HumanFires)
fireHistoryLightningFires <- toJSON(fireHistory2017$LightningFires)


#fireHistoryDate <- as.numeric(fireHistoryDate)

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
fireHistoryDate


#Most expensive current fires
  
mostExpensive <- arrange(fires, desc(ESTIMATEDTOTALCOST))
mostExpensive <- mostExpensive[1:10,]
mostExpensiveNumber <- mostExpensive[1,18]
mostExpensiveName <- mostExpensive[1,2]

#View(mostExpensive)


largestFires <- arrange(fires, desc(ESTIMATEDTOTALACRES))
largestFires <- largestFires[1:10,]
largestFireNumber <- largestFires[1,11]
largestfireName <- largestFires[1,2]

fires$ESTIMATEDTOTALACRES

totalAcerage <- sum(fires$ESTIMATEDTOTALACRES, na.rm=TRUE)
totalCost <- sum(fires$ESTIMATEDTOTALCOST, na.rm=TRUE)

sysTime <- paste0(Sys.time()) 
sysDate <- paste0(Sys.Date())
 

#removes the fires that don't have both cost and size
sizeCost <- filter(fires, ESTIMATEDTOTALCOST != 0 & ESTIMATEDTOTALACRES != 0)

costArray <-fires$ESTIMATEDTOTALCOST
costArray <- toJSON(costArray)

sizeArray <- fires$ESTIMATEDTOTALACRES
sizeArray <-toJSON(sizeArray)
sizeArray <- gsub('"',"",sizeArray)

nameArray <- as.character(sizeCost$NAME)
nameArray <- toJSON(nameArray)

discoverArray <- sizeCost$DISCOVERYDATETIME
discoverArray <- toJSON(discoverArray)

#Bring summary data into dataframe, export to JSON

#, sizeArray, nameArray, discoverArray, totalFiresc)
row <- c(sysTime, lightningFiresNumber, humanFiresNumber, totalAcerage, totalCost, mostExpensiveNumber, largestFireNumber, mostExpensiveName, largestfireName, currentCount, costArray, sizeArray, nameArray, discoverArray, totalFires, fireHistoryDate, fireHistoryHumanAcres, fireHistoryHumanFires, fireHistoryLightningAcres, fireHistoryLightningFires)
export <- data.frame(row, stringsAsFactors=FALSE)
names(export) <- c("systemTime", "lightningFiresNumber", "humanFiresNumber", "totalAcerage", "totalCost", "mostExpensiveNumber", "largestFireNumber", "mostExpensiveName", "largestfireName", "currentCount", "costArray", "sizeArray", "nameArray", "discoverArray", "totalFires", "fireHistoryDate", "fireHistoryHumanAcres", "fireHistoryHumanFires", "fireHistoryLightningAcres", "fireHistoryLightningFires")
exportJSON <- toJSON(export, pretty=TRUE)
write(exportJSON, "exportJSON.JSON")



push_git <- paste0("git add --all && git commit -m '", 
                   as.character(Sys.time()), 
                   "' && git push origin master")

system(push_git)

download.file("https://rawgit.com/benmatheson/fire/master/exportJSON.JSON", "local_download.json")

# /usr/local/bin/Rscript
#run from command line Rscript fire_script.R


# push_git <- paste0("cd fire && git add --all && git commit -m '", 
#                    as.character(Sys.time()), 
#                    "' && git push origin master")

# 
# There are currently __ firest burning in Alaska. A total of __acres have burned, ___% from human caused fires, % from lightening caused fires. 
# 
# ___ are in Critical protection
# ___full
# ____limited
# ___modified





