d3.select("#app-root").append("div").attr("class", "chart").selectAll("div").data([4, 8, 15, 16, 23, 42])
.enter().append("div").style('width', function(d){
  return d * 10 + 'px'
}).text(d => d)
