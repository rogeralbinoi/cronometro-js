class Cronometro {
    static getHoursFromSeconds(seconds) {
        const secondsPerHours = 3600
        return parseInt(seconds/secondsPerHours)
    }
    static getMinutesFromSeconds(seconds) {
        const secondsPerMinutes = 60
        return parseInt(seconds/secondsPerMinutes)
    }
    static getFormatedHours(seconds) {
        const secondsPerMinutes = 60
        const secondsPerHours = 3600
        var hours,minutes,seconds
        hours = Cronometro.getHoursFromSeconds(seconds)
        seconds -= hours*secondsPerHours;
        minutes = Cronometro.getMinutesFromSeconds(seconds)
        seconds -= minutes*secondsPerMinutes;
        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }
    constructor (obj) {
        this.$el = obj.el ? obj.el : undefined
        this.$input = obj.input ? obj.input : false
        this.running = false;
        this.seconds = 0
        this.render()
    }
    play() {
        if (this.running !== true) {
            this.interval = setInterval(()=> {
                this.nextSec()
                this.render()
                this.running = true
            },1000)
        }
    }
    stop() {
        this.pause()
        this.seconds = 0
        this.render()
    }
    pause() {
        if (this.running === true) {
            clearInterval(this.interval)
            this.running = false
        }
    }
    nextSec() {
        this.seconds += 1
        return;
    }
    static getFormatedTime(time) {
        return String(time).length > 1 ? time : '0'+time
    }
    render() {
        var formatedHours = Cronometro.getFormatedHours(this.seconds)
        var hours = Cronometro.getFormatedTime(formatedHours.hours)
        var minutes = Cronometro.getFormatedTime(formatedHours.minutes)
        var seconds = Cronometro.getFormatedTime(formatedHours.seconds)
        if (this.$el) {
            this.$el.html(`${hours}:${minutes}:${seconds}`)
        }
        if (this.$input) {
            this.$input.val(`${hours}:${minutes}:${seconds}`)
        }
    }
}
window.Cronometro = Cronometro
exports default Cronometro