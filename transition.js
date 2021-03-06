var one = [995, 888, 516, 484, 185, 159];//2016 FY 2016 Agency Spending
//total revenues, total spending, total surplus/deficit, GDP
var two = [935, 859, 512, 442, 176, 145];//2015
// Dept of Health and Human Services
// Social Security Administration
// Dept of Defense
// Dept of the Treasury
// Other
// Dept of Veterans Affairs

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(one);
var barEnter = barUpdate.enter().append("div");

barEnter.transition().duration(1500).style("width", function(d) {
    return d / 1.3 + "px"; });
barEnter.text(function(d) { return d; });

var button = document.getElementById("other");
var chart_DOM = document.getElementById("chart_DOM");
var heading = document.getElementById("heading");
var year = -1; //-1 for 2016 and 1 for 2015

var new_chart = function(){
    var bind = one;
    if (year > 0){//2015
        bind = two;
    }
    
    bar = chart.selectAll("div");
    barUpdate = bar.data(bind);
    barUpdate.transition().duration(1000).style("width", function(d) {
        return d / 1.3 + "px"; });
    barUpdate.text(function(d) { return d; });
}

var other = function(){
    year *= -1;
    if (year < 0){
        heading.innerHTML = "Spending by Department by Billions in 2016";
    }
    else{
        heading.innerHTML = "Spending by Department by Billions in 2015";
    }
    new_chart();
}
button.addEventListener("click", other);