import React, { Component } from 'react'
import AmCharts from '@amcharts/amcharts3-react'


const GraphsStats = (props) => {
	return(
		React.createElement(AmCharts.React, {
			style: {
				width: '100%',
				height: '400px'
			},
			options: {
				'type': 'serial',
				'theme': 'light',
				'graphs': [{
					'balloonText': '<span style=\'font-size:13px;\'>[[category]]: <b>[[value]]</b></span>',
					'bulletOffset': 10,
					'bulletSize': 52,
					'colorField': 'color',
					'cornerRadiusTop': 8,
					'customBulletField': 'bullet',
					'fillAlphas': 0.8,
					'lineAlpha': 0,
					'type': 'column',
					'valueField': 'points'
				}],
				'dataProvider': [{
					'name': 'Eliminaciones',
					'points': props.eliminations,
					'color': '#31B404',
          
					'bullet': 'http://localhost:3005/img/objetivo.png'
				}, {
					'name': 'Muertes',
					'points': props.dead,
					'color': '#DF0101',
          
					'bullet': 'http://localhost:3005/img/dead.png'
				},],
				'valueAxes': [{
					'maximum': 20,
					'minimum': 0,
					'axisAlpha': 0,
					'dashLength': 4,
					'position': 'left'
				}],
				'marginTop': 0,
				'marginRight': 0,
				'marginLeft': 0,
				'marginBottom': 0,
				'autoMargins': false,
				'categoryField': 'name',
				'categoryAxis': {
					'axisAlpha': 0,
					'gridAlpha': 0,
					'inside': true,
					'tickLength': 0
				},
			}
		}))
    
}

export default GraphsStats

