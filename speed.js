const speedLimit = 70;
const demeritPoints = 0;
if (speed < speedLimit) {
    return  "ok"
} else{
   demeritPoints = math.floor((speed-speedLimit)/5)
   return  (`points: $(demeritPoints)`)
   if (demeritPoints > 12){
    return "License suspended"
   }
} 
    

