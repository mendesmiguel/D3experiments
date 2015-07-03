/**
 * Created by miguel on 03/07/15.
 */
var dataset = [4, 8, 15, 16, 23, 42];
/*

 var section = d3.selectAll("section").data(dataset).enter();
 var div = section.append("div");
 div.html("Hello, world!");
 */
// mapeia o intervalo de valores para uma escala
var x = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, 840]);
// seleciona a div de class .chart e insere elas com o tamanho
// retornado pela funcao x
d3.select(".chart").selectAll("div")
    .data(dataset)
    .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });
