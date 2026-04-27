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


        hourDegree = hours * 30;
        minuteDegree = minutes * 6;
        secondDegree = seconds * 6;


        this.hourPointer.style.transform = "translateX(-50%) rotate(" + hourDegree + "deg)";
        this.minutePointer.style.transform = "translateX(-50%) rotate(" + minuteDegree + "deg)";
        this.secondPointer.style.transform = "translateX(-50%) rotate(" + secondDegree + "deg)";
    }

};

analogueView.init();