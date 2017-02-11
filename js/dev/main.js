class Cronometro {
    constructor ($el,$input) {
        this.$el = $el;
        this.min = 0;
        this.sec = 0;
        this.$input = $input;

        var duration = 1000,
            end = +new Date() + duration;
        var that = this;
        that.render();
        function step () {
            var current = +new Date();
            if ( (current - end) < 60) {
                
            }else {
                end = +new Date() + duration;
                that.nextSec();
                that.render();
            }

            setTimeout(step);
        }
        setTimeout(step);
    }
    nextSec() {
        if (this.sec >= 59) {
            this.min += 1;
            this.sec = 0;
            return;
        }
        this.sec += 1;
        return;
    }
    render() {
        var min = String(this.min).length > 1 ? this.min : '0'+this.min;
        var sec = String(this.sec).length > 1 ? this.sec : '0'+this.sec;
        this.$el.html(min+':'+sec);
        this.$input.val(min+':'+sec);
    }
}
window.Cronometro = Cronometro;