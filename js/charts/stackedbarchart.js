// http://bl.ocks.org/mbostock/1134768


var w = 960,
    h = 500,
    p = [20, 50, 30, 20];

var x = d3.scale.ordinal()
    .rangeRoundBands([0, w - p[1] - p[3]]);

var y = d3.scale.linear()
    .range([0, h - p[0] - p[2]]);

var z = d3.scale.ordinal()
    .range(["lightpink", "darkgray", "lightblue"]);

var parse = d3.time.format("%m/%Y").parse;

var format = d3.time.format("%b");

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(" + p[3] + ", " + (h - p[2]) + ")");

d3.csv("crimea.csv", function (crimea) {

    var causes = d3.layout.stack()(
        ["wounds", "other", "disease"]
            .map(function (cause) {
                return crimea.map(function (d) {
                    return {x: parse(d.date), y: +d[cause]};
                });
            }));

    x.domain();
});
