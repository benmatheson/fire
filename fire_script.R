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



fires <- download.file("https://fire.ak.blm.gov/content/aicc/sitreport/sit%20query.xlsx", "query.xlsx")
fires <- read_xlsx("query.xlsx")
fires <- as.data.frame(fires)
firesSP <- as.data.frame(fires)
coordinates(firesSP) <- ~ LONGITUDE + LATITUDE
writeOGR(firesSP, 'fires.geojson',layer="fires", driver='GeoJSON')

####Parse the fire Dataframe#####

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
 

#removes the fires that don't have both cost and size
sizeCost <- filter(fires, ESTIMATEDTOTALCOST != 0 & ESTIMATEDTOTALACRES != 0)

costArray <-sizeCost$ESTIMATEDTOTALCOST
costArray <- toJSON(costArray)

sizeArray <- sizeCost$ESTIMATEDTOTALACRES
sizeArray <-toJSON(sizeArray)
sizeArray
sizeArray <- gsub('"',"",sizeArray)
sizeArray

sizeArray
nameArray <- as.character(sizeCost$NAME)
nameArray <- toJSON(nameArray)
nameArray

discoverArray <- sizeCost$DISCOVERYDATETIME
discoverArray <- toJSON(discoverArray)

#Bring summary data into dataframe, export to JSON

#, sizeArray, nameArray, discoverArray, totalFiresc)
row <- c(sysTime, lightningFiresNumber, humanFiresNumber, totalAcerage, totalCost, mostExpensiveNumber, largestFireNumber, mostExpensiveName, largestfireName, currentCount, costArray, sizeArray, nameArray, discoverArray, totalFires)
export <- data.frame(row, stringsAsFactors=FALSE)
names(export) <- c("systemTime", "lightningFiresNumber", "humanFiresNumber", "totalAcerage", "totalCost", "mostExpensiveNumber", "largestFireNumber", "mostExpensiveName", "largestfireName", "currentCount", "costArray", "sizeArray", "nameArray", "discoverArray", "totalFires")
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





