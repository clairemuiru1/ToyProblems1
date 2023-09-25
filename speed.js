function calculateSpeed(speed){
    let speedLimit = 70; 
    let demeritPoints = 0;
    if (speed < speedLimit) {
        console.log("ok")
    } else{
       demeritPoints = Math.floor((speed-speedLimit)/5)
       console.log(`Points: ${demeritPoints}`) // 1 point for every 5km above 70
       if (demeritPoints > 12){
        console.log("LicenseSuspended")
       }
    }}
    