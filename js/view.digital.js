"use strict";

export let digitalView = {
    output: null,

    init: function() {
        this.output = document.getElementById("digital-clock");
    },

    update: function (hours, minutes, seconds) { // Damit die Uhrdarstellung schöner aussieht
        let hourText = "";
        let minuteText = "";
        let secondText = "";

        if (hours < 10) {
            hourText = "0" + hours;
        } else {
            hourText = hours;
        }

        if (minutes < 10) {
            minuteText = "0" + minutes;
        } else {
            minuteText = minutes;
        }

        if (seconds < 10) {
            secondText = "0" + seconds;
        } else {
            secondText = seconds;
        }

        this.output.textContent = hourText + ":" + minuteText + ":" + secondText;

    }
};

digitalView.init();