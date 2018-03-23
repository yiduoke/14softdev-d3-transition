var one = [2.99, 3.54, -0.552, 16.5]//2016
//total revenues, total spending, total surplus/deficit, GDP
var two = [2.96, 3.36, -0.399, 16.2]//2015

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate1 = bar.data(one);
var barUpdate2 = bar.data(two);
var barEnter = barUpdate.enter().append("div");