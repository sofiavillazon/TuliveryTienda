
// Doughnut chart
// ------------------------------
$(window).on("load", function(){

  //Get the context of the Chart canvas element we want to select
  var ctx = $("#simple-doughnut-chart");

  // Chart Options
  var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration:500,
  };

  // Chart Data
  var chartData = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
          label: "My First dataset",
          data: [65, 35, 24, 45, 85],
          backgroundColor: ['#172C49', '#1E8EBB', '#EA4C64','#B21C17', '#6B6F82'],
      }]
  };

  var config = {
      type: 'doughnut',

      // Chart Options
      options : chartOptions,

      data : chartData
  };

  // Create the chart
  var doughnutSimpleChart = new Chart(ctx, config);

});
// Bar chart
// ------------------------------
$(window).on("load", function(){

  //Get the context of the Chart canvas element we want to select
  var ctx = $("#bar-chart");

  // Chart Options
  var chartOptions = {
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide and green
      elements: {
          rectangle: {
              borderWidth: 2,
              borderColor: 'rgb(0, 255, 0)',
              borderSkipped: 'left'
          }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration:500,
      legend: {
          position: 'top',
      },
      scales: {
          xAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: true,
              }
          }],
          yAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: true,
              }
          }]
      },
      title: {
          display: false,
          text: 'Chart.js Horizontal Bar Chart'
      }
  };

  // Chart Data
  var chartData = {
      labels: ["January", "February", "March", "April"],
      datasets: [{
          label: "My First dataset",
          data: [65, 59, 80, 81],
          backgroundColor: "#162D4A",
          hoverBackgroundColor: "#162D4A",
          borderColor: "transparent"
      }, {
          label: "My Second dataset",
          data: [28, 48, 40, 19],
          backgroundColor: "#EA4C64",
          hoverBackgroundColor: "#DB3B5A",
          borderColor: "transparent"
      }]
  };

  var config = {
      type: 'horizontalBar',

      // Chart Options
      options : chartOptions,

      data : chartData
  };

  // Create the chart
  var lineChart = new Chart(ctx, config);
});
$(document).on('ready', function() {
    $('.slider-for').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       asNavFor: '.slider-nav'
     });
    
     $('.slider-nav').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       asNavFor: '.slider-for',
       dots: false,
       centerMode: true,
       focusOnSelect: true,
       prevArrow: '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="38.66px" style="margin: 0px 10px;" viewBox="0 0 14.769 38.66" enable-background="new 0 0 14.769 38.66" xml:space="preserve"><rect x="-54.982" y="136.746" fill="#9BCA64" width="107.188" height="107.188"/><path fill="#FFFFFF" d="M2.801,219.168c-3.288,0-5.963-2.674-5.963-5.963c0-3.287,2.675-5.961,5.963-5.961c3.286,0,5.959,2.674,5.959,5.961C8.76,216.495,6.087,219.168,2.801,219.168z M-23.357,219.168c-3.286,0-5.961-2.674-5.961-5.963c0-3.287,2.675-5.961,5.961-5.961c3.287,0,5.962,2.674,5.962,5.961C-17.395,216.495-20.07,219.168-23.357,219.168z M9.71,203.29h-38.467l-9.264-17.704h5.858l6.141,11.733l0.205,0.391l0.203,0.389h0.438h0.439H4.722h0.545h0.545l0.152-0.523l0.152-0.523l8.97-30.878h22.935v5.191H20.075H19.53h-0.544l-0.153,0.522l-0.151,0.523L9.71,203.29z M-20.498,190.98c-3.287,0-5.962-2.674-5.962-5.961c0-3.288,2.675-5.962,5.962-5.962c3.286,0,5.961,2.674,5.961,5.962C-14.537,188.306-17.211,190.98-20.498,190.98z M-0.652,190.405c-3.286,0-5.961-2.674-5.961-5.961c0-3.288,2.675-5.962,5.961-5.962c3.287,0,5.963,2.674,5.963,5.962C5.311,187.731,2.635,190.405-0.652,190.405z M-10.43,173.435c-3.288,0-5.962-2.674-5.962-5.961c0-3.287,2.674-5.961,5.962-5.961c3.287,0,5.96,2.674,5.96,5.961C-4.47,170.761-7.143,173.435-10.43,173.435z"/><polygon fill="#4C82AD" points="0,19.33 11.477,0 14.769,1.954 4.775,18.783 4.613,19.058 4.454,19.33 4.614,19.602 4.775,19.875 14.769,36.707 11.477,38.66 "/></svg>',
     });
     $('.lazy').slick({
       lazyLoad: 'ondemand', // ondemand progressive anticipated
       infinite: true,
       focusOnSelect: true,
       arrows: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       centerMode: true,
       dots: false,
       prevArrow: '<a style="display: block; position: relative; right: -15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-left"></i></a>',
       nextArrow: '<a style="display: block; position: relative; right: 15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-right"></i></a>',
       
     });
 
     $(".regular").slick({
       focusOnSelect: true,
       infinite: true,
       arrows: true,
       slidesToShow: 4,
       slidesToScroll: 4,
       centerMode: true,
       prevArrow: '<a style="display: block; position: relative; right: -15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-left"></i></a>',
       nextArrow: '<a style="display: block; position: relative; right: 15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-right"></i></a>',
       responsive: [
         {
           breakpoint: 1234,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: true,
           }
         },
         {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true
           }
         }
       ]
 
     });

     $(".promo-banner").slick({
      focusOnSelect: true,
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      prevArrow: '<a style="display: block; position: relative; right: -15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-left"></i></a>',
      nextArrow: '<a style="display: block; position: relative; right: 15px; z-index: 1; " class="btn-arrow"><i class="icon-arrow-right"></i></a>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]

    });
 });
 





 // Type List - Products
 $('.gridList').on('click', function(){
  $('.typeList').removeClass('col-md-4');
  $('.typeList').addClass('col-md-12');
});

$('.inlineList').on('click', function(){
  $('.typeList').removeClass('col-md-12');
  $('.typeList').addClass('col-md-4');
});

/*==================================================*/
/*3.-Palet Color....................................*/
/*==================================================*/

var pallete = document.querySelectorAll('.circle-palet');
for (var i = 0; i < pallete.length; i++) {
  var value = pallete[i].getAttribute('data-color'); // = 9
  pallete[i].style.backgroundColor = value;
}

/*==================================================*/
/*4.-Palet Color....................................*/
/*==================================================*/


/*==================================================*/
/*5.-Sidebar Mobile.................................*/
/*==================================================*/

$('.handlerSide2').on('click', function(){
    $('.bgSidebar').toggleClass('open');
});

$('.close-btn').on('click', function(){
  $('.bgSidebar').toggleClass('open');
});

/*==================================================*/
/*5.-Chart.................................*/
/*==================================================*/


// line chart

$(window).on("load", function () {
  // Revenue - CharJS Line
  Chart.defaults.derivedLine = Chart.defaults.line;
  var draw = Chart.controllers.line.prototype.draw;
  var custom = Chart.controllers.line.extend({
    draw: function () {
      draw.apply(this, arguments);
      var ctx = this.chart.chart.ctx;
      var _stroke = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = "#ffb6c0";
        ctx.shadowBlur = 30;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 20;
        _stroke.apply(this, arguments);
        ctx.restore();
      };
    }
  });

  Chart.controllers.derivedLine = custom;
  var ctx = document.querySelector("#thisYearRevenue").getContext("2d");
  var thisYearRevenueChart = new Chart(ctx, {
    type: "derivedLine",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
      datasets: [
        {
          data: [5000, 10000, 4000, 14500, 8000, 18500, 8000, 20000],
          borderWidth: 4,
          borderColor: "#EA4C64",
          pointBackgroundColor: "#FFF",
          pointBorderColor: "#EA4C64",
          pointHoverBackgroundColor: "#FFF",
          pointHoverBorderColor: "#EA4C64",
          pointRadius: 0,
          pointHoverRadius: 6,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      tooltips: {
        displayColors: false,
        callbacks: {
          label: function (e, d) {
            // return '${e.xLabel} : ${e.yLabel}'
          },
          title: function () {
            return;
          }
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              padding: 10,
              stepSize: 5000,
              max: 20000,
              min: 0
            },
            gridLines: {
              display: true,
              drawBorder: false,
              lineWidth: 1,
              color: "#e9ebf5"
            }
          }
        ]
      }
    }
  });

  var ctx2 = document.querySelector("#lastYearRevenue").getContext("2d");
  var lastYearRevenueChart = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
      datasets: [
        {
          data: [7000, 15000, 6000, 10500, 3000, 11500, 4000, 10000],
          borderWidth: 4,
          borderDash: [8, 4],
          borderColor: "#c3c3c3",
          pointBackgroundColor: "#FFF",
          pointBorderColor: "#c3c3c3",
          pointHoverBackgroundColor: "#FFF",
          pointHoverBorderColor: "#c3c3c3",
          pointRadius: 0,
          pointHoverRadius: 6,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      tooltips: {
        displayColors: false,
        callbacks: {
          label: function (e, d) {
            // return '${e.xLabel} : ${e.yLabel}'
          },
          title: function () {
            return;
          }
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              padding: 10,
              stepSize: 5000,
              max: 20000,
              min: 0
            },
            gridLines: {
              display: true,
              drawBorder: false,
              zeroLineColor: "#e5e5e5"
            }
          }
        ]
      }
    }
  });

});


// Line chart
// ------------------------------
$(window).on("load", function(){

  //Get the context of the Chart canvas element we want to select
  var ctx = $("#line-chart");

  // Chart Options
  var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          position: 'bottom',
      },
      hover: {
          mode: 'label'
      },
      scales: {
          xAxes: [{
              display: true,
              gridLines: {
                  color: "#fff",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: false,
                  labelString: 'Month'
              }
          }],
          yAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: false,
                  labelString: 'Value'
              }
          }]
      },
      title: {
          display: false,
          text: 'Ventas x día'
      }
  };

  // Chart Data
  var chartData = {
      labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
      datasets: [{
          label: "Ventas x Día",
          data: [28, 48, 40, 19, 60, 27, 40],
          fill: false,
          // borderDash: [5, 5],
          borderColor: "#145388",
          pointBorderColor: "#145388",
          pointBackgroundColor: "#FFF",
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 6,
      }]
  };

  var config = {
      type: 'line',

      // Chart Options
      options : chartOptions,

      data : chartData
  };

  // Create the chart
  var lineChart = new Chart(ctx, config);
});

// Line area chart
// ------------------------------
$(window).on("load", function(){

  //Get the context of the Chart canvas element we want to select
  var ctx = $("#area-chart");

  // Chart Options
  var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          position: 'bottom',
      },
      hover: {
          mode: 'label'
      },
      scales: {
          xAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: false,
                  labelString: 'Year'
              }
          }],
          yAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: false,
                  labelString: 'Value'
              }
          }]
      },
      title: {
          display: false,
          text: 'Info Detalle'
      }
  };

  // Chart Data
  var chartData = {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      datasets: [
        {
          label: "Ventas en Soles",
          data: [20, 25, 28, 32, 30, 27, 25, 28, 15, 10],
          backgroundColor: "rgba(22,45,74,.4)",
          borderColor: "#172C49",
          pointBorderColor: "#172C49",
          pointBackgroundColor: "#172C49",
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 3,
        }
    ]
  };

  var config = {
      type: 'line',
      // Chart Options
      options : chartOptions,

      // Chart Data
      data : chartData
  };

  // Create the chart
  var areaChart = new Chart(ctx, config);

});



// Column chart
// ------------------------------
$(window).on("load", function(){

  //Get the context of the Chart canvas element we want to select
  var ctx = $("#column-chart");

  // Chart Options
  var chartOptions = {
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each bar to be 2px wide and green
      elements: {
          rectangle: {
              borderWidth: 2,
              borderColor: 'rgb(0, 255, 0)',
              borderSkipped: 'bottom'
          }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration:500,
      legend: {
          position: 'bottom',
      },
      scales: {
          xAxes: [{
              display: false,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: true,
              }
          }],
          yAxes: [{
              display: true,
              gridLines: {
                  color: "#f3f3f3",
                  drawTicks: false,
              },
              scaleLabel: {
                  display: true,
              }
          }]
      },
      title: {
          display: true,
          text: 'Información de ventas'
      }
  };

  // Chart Data
  var chartData = {
      labels: ["Ene", "Feb", "Mar", "Abr", "May"],
      datasets: [{
          label: "Soles",
          data: [65, 59, 80, 81, 56],
          backgroundColor: "#EA4C64",
          hoverBackgroundColor: "rgba(107,56,145,.9)",
          borderColor: "transparent"
      }, {
          label: "Planet Coins",
          data: [28, 48, 40, 80, 86],
          backgroundColor: "#145388",
          hoverBackgroundColor: "rgba(20,83,136,.9)",
          borderColor: "transparent"
      }
    ]
  };

  var config = {
      type: 'bar',

      // Chart Options
      options : chartOptions,

      data : chartData
  };

  // Create the chart
  var lineChart = new Chart(ctx, config);
});

