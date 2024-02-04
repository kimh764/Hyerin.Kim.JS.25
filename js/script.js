
var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace: 50,
    labelInterpolationFnc: function (value) {
      return value + "%";
    },
  },
  width: "100%",
  height: "400px",
};

new Chartist.Bar(".bar-chart", barData, barOptions);

