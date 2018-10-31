var data = [4, 8, 15, 16, 23, 42];
var barHeight = 20;

var bar = d3.select('.chart').selectAll('g').data(data).enter()
.append('g')
// .attr('transform', function(d, i){
//   return 'translate(0,' + i * barHeight + ')'
// })
.attr('transform', (d, i) => {
  return `translate(0, ${i * barHeight})`
})


bar.append("rect")
    .attr("width", d => d * 10)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return d * 10 - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });