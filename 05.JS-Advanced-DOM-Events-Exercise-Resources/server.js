class Circle {
    construcor(r) {
        this.r = r;
    }

    get r() {
        return this._r;
    }

    set r(value) {
        if (typeof value != 'number') {
            throw new TypeError('Expected number');
        }
        this.r = value
    }
}