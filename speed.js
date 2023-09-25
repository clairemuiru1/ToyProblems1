const speedLimit = 70;
const demeritPoints = 0;
if (speed < speedLimit) {
    return  "ok"
} else{
   demeritPoints = math.floor((speed-speedLimit)/5)
   return  (`points: $(demeritPoints)`) // 1 point for every 5km above 70
   if (demeritPoints > 12){
    return "License suspended"
   }
} 
    

