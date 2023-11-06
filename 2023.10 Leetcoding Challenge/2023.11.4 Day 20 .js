/**
 * @param {number} n
 */
var SeatManager = function (n) {
    this.seat = new Array(n).fill(false);
    this.seat.next = 0;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    while (this.seat[this.seat.next]) this.seat.next++;
    this.seat[this.seat.next] = true;
    this.seat.next++;
    return this.seat.next;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    this.seat[seatNumber - 1] = false;
    this.seat.next = Math.min(seatNumber - 1, this.seat.next);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */