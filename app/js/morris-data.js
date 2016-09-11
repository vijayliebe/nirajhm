var morris_area="";
var morris_bar ="";
var morris_donut="";

$('#toggle_area > button').click(function() {
    var ix = $(this).index();
    $('#areaGraph').toggle( ix === 0 );
    $('#areaRec').toggle( ix === 1 );
	var area_rec = JSON.stringify(morris_area, null, 4);
	$('.modal-body-area').text( area_rec );
});

$('#toggle_bar > button').click(function() {
    var ix = $(this).index();
    $('#barGraph').toggle( ix === 0 );
    $('#barRec').toggle( ix === 1 );

	var bar_rec = JSON.stringify(morris_bar, null, 4);
	$('.modal-body-bar').text( bar_rec );
});

$('#toggle_donut > button').click(function() {
    var ix = $(this).index();
    $('#donutGraph').toggle( ix === 0 );
    $('#donutRec').toggle( ix === 1 );

	var donut_rec = JSON.stringify(morris_donut, null, 4);
	$('.modal-body-donut').text( donut_rec );
});


$(function() {

      morris_area = [{
            period: '2014 Q1',
            iphone: 2666,
            ipad: 8600,
            itouch: 2647
        }, {
            period: '2014 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2014 Q3',
            iphone: 4912,
            ipad: 9969,
            itouch: 2501
        }, {
            period: '2014 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2015 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2015 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2015 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2015 Q4',
            iphone: 1073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2016 Q1',
            iphone: 1687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2016 Q2',
            iphone: 1432,
            ipad: 5713,
            itouch: 1791
    }];

    morris_donut = [{
            label: "Download Sales",
            value: 5
        }, {
            label: "In-Store Sales",
            value: 5
        }, {
            label: "Mail-Order Sales",
            value: 50
    }];

    morris_bar = [{
            y: '2013',
            a: 50,
            b: 40
        }, {
            y: '2014',
            a: 75,
            b: 65
        }, {
            y: '2015',
            a: 100,
            b: 90
        }, {
            y: '2016',
            a: 25,
            b: 65
    }];

	Morris.Area({
        element: 'morris-area-chart',
        data: morris_area,
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });


    Morris.Donut({
        element: 'morris-donut-chart',
        data: morris_donut,
		resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: morris_bar,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
