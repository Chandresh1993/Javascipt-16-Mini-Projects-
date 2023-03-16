const endDate = "1 March 2023 10:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputes = document.querySelectorAll("input")


function clock() {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now) / 1000;
   
   if ( diff < 0 )return;

   

    // Convert into days;
    inputes[0].value = Math.floor(diff / 3600 / 24)
    // convert into hours.
    inputes[1].value = (Math.floor(diff / 3600) % 24)
    // Convert into Minutes.
    inputes[2].value = (Math.floor(diff / 60) % 60)
    // Convert into Secound.
    inputes[3].value = (Math.floor(diff) % 60)


}



setInterval(() => {
    clock()
}, 1000)