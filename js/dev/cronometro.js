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
        if(obj.autoplay) {
            this.play()
        }else {
            this.render()
        }
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
    reset_and_play() {
        this.stop()
        this.play()
    }
    nextSec() {
        this.seconds += 1
        return;
    }
    static getFormatedTime(time) {
        return String(time).length > 1 ? time : '0'+time
    }
    render() {
        var that = this,
            formatedHours = Cronometro.getFormatedHours(this.seconds),
            hours = Cronometro.getFormatedTime(formatedHours.hours),
            minutes = Cronometro.getFormatedTime(formatedHours.minutes),
            seconds = Cronometro.getFormatedTime(formatedHours.seconds)

        function if_input_then(element, callback) {
            if(element === 'INPUT') {
                callback.yes()
            }else {
                callback.no()
            }
        }

        if (this.$el) {
            for ( let element of this.$el) {
                element.innerHTML = `${hours}:${minutes}:${seconds}`
            }
        }

        if (this.$input) {
            let test_node_collection = () => {
                for (let element of this.$input) {
                    if_input_then(element.tagName, {
                        yes: ()=> {
                            element.value = `${hours}:${minutes}:${seconds}`
                        }
                    })
                }
            }
            if_input_then(this.$input.tagName, {
                yes: ()=> {
                    this.$input.value = `${hours}:${minutes}:${seconds}`
                },
                no: ()=> {
                    test_node_collection()
                }
            })
        }

    }
}
window.Cronometro = Cronometro
export default Cronometro