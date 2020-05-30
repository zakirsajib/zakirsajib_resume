import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
	labels: [
		'JavaScript',
		'React.js',
		'Gatsby.js',
		'SASS',
		'jQuery',
		'Bootstrap',
		'Bulma',
		'Tailwind',
		'CSS Modules',
		'CSS-in-JS',
		'Styled Components'
	],
	datasets: [{
		label: 'My Front-end skills',
		data: [50, 50, 50, 50, 80, 80, 80, 20, 50, 50, 50, 0, 100],
		backgroundColor: [
		'#F0db4F',
		'#61DBFB',
		'#663399',
		'#F2ECE4',
		'#0868AC',
		'#563d7c',
		'#00d1b2',
		'#38b2ac',
		'#f1f1f1',
		'#000000',
		'rgb(218, 163, 87)'
		],
		hoverBackgroundColor: [
			'#F0db4F',
			'#61DBFB',
			'#663399',
			'#F2ECE4',
			'#0868AC',
			'#563d7c',
			'#00d1b2',
			'#38b2ac',
			'#f1f1f1',
			'#000000',
			'rgb(218, 163, 87)'
		]
	}]
};

class SkillsFrontend extends React.Component{

  render() {
    return (
      <div>
        <h2 className="title-thin text-muted">Front-end skills</h2>
        <Bar
					data={data}
					options={{
            maintainAspectRatio: true
          }}
				/>
      </div>
    );
  }
};

export default SkillsFrontend
