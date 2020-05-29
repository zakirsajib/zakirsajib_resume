import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
	labels: [
		'WooCommerce',
		'GitHub',
		'GitLab',
		'Webpack',
		'Grunt',
		'Gulp',
		'PWA',
		'Adobe Photoshop',
		'Sketch',
		'Zeplin',
		'Adobe XD',
		'InVision',
		'FlyWheel',
		'Docker',
		'Visual Studio Code'
	],
	datasets: [{
		label: 'My other skills set',
		data: [
			80,
			70,
			50,
			40,
			40,
			40,
			50,
			60,
			30,
			50,
			40,
			80,
			70,
			30,
			70,
			0,
			100
		],
		backgroundColor: [
		'#4078c0',
		'#00758F',
		'#292961',
		'#2b3a42',
		'#453015',
		'#cf4647',
		'#3740ff',
		'#26C9FF',
		'#fa6400',
		'#ee6723',
		'#FF26BE',
		'rgb(255, 51, 102)',
		'#50c6db',
		'#022144',
		'#0066B8'
		],
		hoverBackgroundColor: [
			'#4078c0',
			'#00758F',
			'#292961',
			'#2b3a42',
			'#453015',
			'#cf4647',
			'#3740ff',
			'#26C9FF',
			'#fa6400',
			'#ee6723',
			'#FF26BE',
			'rgb(255, 51, 102)',
			'#50c6db',
			'#022144',
			'#0066B8'
		]
	}]
};

class OtherSkills extends React.Component{

  render() {
    return (
      <div>
        <h2 className="title-thin text-muted">Other skills</h2>
        <HorizontalBar data={data}/>
      </div>
    );
  }
};

export default OtherSkills
