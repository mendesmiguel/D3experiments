data = [{"x": 2, "y": 4},
        {"x": 3, "y": 9},
        {"x": 5, "y": 25}];

var svg = d3.select("body")
    .append("svg");

svg.selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr("cx", function (d) {
        return d.x;
    })
    .attr("cy", function (d) {
        return d.y;
    })
    .attr("r", 2.5);
