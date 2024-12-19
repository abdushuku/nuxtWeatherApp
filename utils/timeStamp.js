export function timeStamp(dt, type, index){
    const milliseconds = dt * 1000
    const data = new Date(milliseconds)
    const shortOrLong = index > 1 ? "short" : "long"
    let result = 
    type == "weekday" ? data.toLocaleString("ru-RU", {weekday: shortOrLong}):
    type == "month" ? data.toLocaleString("ru-RU", {month:'short'}):
    type == "day" ? data.toLocaleString("ru-RU", {day:'numeric'}): ''
    return result
}