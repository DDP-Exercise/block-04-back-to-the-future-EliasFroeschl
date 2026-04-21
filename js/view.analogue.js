"use strict";

export let analogueView = {
    hourPointer: null,
    minutePointer: null,
    secondPointer: null,

    init: function() {
        this.hourPointer = document.getElementById("hour-pointer");
        this.minutePointer = document.getElementById("minute-pointer");
        this.secondPointer = document.getElementById("second-pointer");
    },


    update: function(hours, minutes, seconds) {
        let hourDegree = 0;
        let minuteDegree = 0;
        let secondDegree = 0;

        //Ich hab mir hier KI zur hilfe genommen  --> wie weit sich jeder Zeiger drehen muss für die Logik der Uhr
        //12 Stunden → 360 / 12 = 30
        // 60 Minuten → 360 / 60 = 6
        // 60 Sekunden → 360 / 60 = 6

        hourDegree = hours * 30;
        minuteDegree = minutes * 6;
        secondDegree = seconds * 6;

        //Hier habe ich recherchiert: beim Zeiger drehen
        this.hourPointer.style.transform = "translateX(-50%) rotate(" + hourDegree + "deg)";
        this.minutePointer.style.transform = "translateX(-50%) rotate(" + minuteDegree + "deg)";
        this.secondPointer.style.transform = "translateX(-50%) rotate(" + secondDegree + "deg)";
    }

};

analogueView.init();