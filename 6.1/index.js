function Time(date_obj) {
    this._hour = date_obj.getHours();
    this._min = date_obj.getMinutes();
    this._sec = date_obj.getSeconds();
    this._zeroPadding = function(value, length) {
        let len = value.toString().length;
        if (len>=length) {
            return value.toString();
        }
        else
        {
            return ('0').repeat(length - len) + value.toString();
        }
    };
    this.toString = function() {
        return this._zeroPadding(this._hour, 2) + ':' +
               this._zeroPadding(this._min,  2) + ':' +
               this._zeroPadding(this._sec,  2);
    };
}

window.onload = function() {
    let clockstr = document.getElementById('clockstring');

    let timer = setInterval(function() {
        let time = new Time(new Date());
        clockstr.innerHTML = time.toString();
    }, 1000);
};