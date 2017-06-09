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

#wd <- "fire"
#setwd("fire")

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
outFires <- filter(fires, burning==FALSE)

humanFires <- filter(fires, GENERALCAUSE=="Human")
humanFiresNumber <- count(humanFires)

lightningFires <- filter(fires, GENERALCAUSE=="Lightning")
lightningFiresNumber <- count(lightningFires)

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
sysTime 

#Bring summary data into dataframe, export to JSON

row <- c(sysTime, lightningFiresNumber, humanFiresNumber, totalAcerage, totalCost, mostExpensiveNumber, largestFireNumber, mostExpensiveName, largestfireName)
export <- data.frame(row, stringsAsFactors=FALSE)
names(export) <- c("systemTime", "lightningFiresNumber", "humanFiresNumber", "totalAcerage", "totalCost", "mostExpensiveNumber", "largestFireNumber", "mostExpensiveName", "largestfireName")

export

exportJSON <- toJSON(export, pretty=TRUE)
write(exportJSON, "exportJSON.JSON")


push_git <- paste0("git add --all && git commit -m '", 
                   as.character(Sys.time()), 
                   "' && git push origin master")

system(push_git)




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





