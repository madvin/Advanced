class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.heigth = height;
        this.color = color;
    }
    calcArea() {
        return this.height * this.width;
    }
}