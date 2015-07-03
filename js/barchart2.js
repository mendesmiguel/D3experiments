/**
 * Created by miguel on 03/07/15.
 */

//var data = [4, 8, 15, 16, 23, 42, 54];
// <svg class="chart"></svg>

/*d3.select("body")
    .append("svg")
    .attr("class", chart);*/


var width = 840,
    barHeight = 20;

var x = d3.scale.linear()
    .range([0, width]);

// svg area total
var chart = d3.select(".chart")
    .attr("width", width);

d3.tsv("http://localhost:63342/d3examples/data.tsv", type, function (error, data) {
    x.domain([0, d3.max(data, function (d) {
        return d.value;
    })]);

    chart.attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function (d, i) {
            return "translate(0," + i * barHeight + ")";
        });

    bar.append("rect")
        .attr("width", function(d) {return x(d.value)})
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) {return x(d.value) - 3})
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) {return d.value});

});

d3.tsv("http://localhost:63342/d3examples/data.tsv", function(data) {
    console.log(data[0].name);
});


function type(d) {
    d.value = +d.value;
    return d;
}
