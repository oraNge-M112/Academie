var RoboDog = /** @class */ (function () {
    function RoboDog(name) {
        this.name = name;
        this.isStarted = true;
    }
    RoboDog.prototype.speak = function () {
        console.log("Ham Ham Ham");
    };
    RoboDog.prototype.play = function () {
        console.log("Prind eu batul ala!");
    };
    RoboDog.prototype.start = function () {
        console.log("Am pornit");
    };
    RoboDog.prototype.stop = function () {
        console.log("M-am oprit");
    };
    return RoboDog;
}());
var maya = new RoboDog("Maya");
maya.speak;
maya.play;
maya.stop;
