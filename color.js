function Interpolate(start, end, steps, count) {
    var s = start,
        e = end,
        final = s + (((e - s) / steps) * count);
    return Math.floor(final);
}

function Color(_r, _g, _b) {
    var r, g, b;
    var setColors = function(_r, _g, _b) {
        r = _r;
        g = _g;
        b = _b;
    };

    setColors(_r, _g, _b);
    this.getColors = function() {
        var colors = {
            r: r,
            g: g,
            b: b
        };
        return colors;
    };
}



            val = parseInt(value),
            red = new Color(232, 9, 26),
            white = new Color(255, 255, 255),
            green = new Color(6, 170, 60),
            start = green,
            end = white;



        if (val > 50) {
            start = white,
                end = red;
            val = val % 51;
        }
        var startColors = start.getColors(),
            endColors = end.getColors();
        var r = Interpolate(startColors.r, endColors.r, 50, val);
        var g = Interpolate(startColors.g, endColors.g, 50, val);
        var b = Interpolate(startColors.b, endColors.b, 50, val);

        span.css({
            backgroundColor: "rgb(" + r + "," + g + "," + b + ")"
        });
    }
}, "input[type='range']");​
