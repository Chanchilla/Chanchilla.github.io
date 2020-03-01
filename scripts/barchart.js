
//import dependencies via cdn
var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src','//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js');
document.head.appendChild(jQueryScript);

var jQueryScript = document.createElement('stylesheet');
jQueryScript.setAttribute('src','//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css');
document.head.appendChild(jQueryScript);

var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
};

var options = {
    seriesBarDistance: 10
};

var responsiveOptions = [
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];

new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
