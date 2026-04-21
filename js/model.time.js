"use strict";

export let timeModel = {
    currentTime: null,

    updateTime: function() {
        this.currentTime = new Date(); //new Date --> aktuelle zeit vom Browser
    },
    getHours: function() {
        return this.currentTime.getHours();
    },

    getMinutes: function() {
        return this.currentTime.getMinutes();
    },

    getSeconds: function() {
        return this.currentTime.getSeconds();
    }
};
