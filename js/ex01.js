var data = ['a', 'b', 'c'];

var width = 400,
    height = 40;

/*d3.select('#chart').selectAll('div.data-item')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .append('p')
    .html(function (d) {
        return d;
    });*/

var div = d3.select('body')
    .append('div')
    .attr('class', 'chart-example')
    .attr('id', 'chart');

var divItems = d3.select('#chart').selectAll('div.data-item')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'data-item')
    .call(initDiv);

// initDiv(divItems)

function initDiv(selection) {
    selection.each(function(data) {
        d3.select(this)
            .append('p')
            .html(data);
    });
}
