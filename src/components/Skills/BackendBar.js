import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
	labels: [
		'PHP',
		'Node.js',
		'MySQL',
		'GraphQL',
		'Firebase',
		'Git',
		'Apache/Nginx',
		'API Integration'
	],
	datasets: [{
		label: 'My Back-end skills',
		data: [80, 50, 40, 40, 40, 50, 50, 50, 0, 100],
		backgroundColor: [
		'#8892BE',
		'#303030',
		'#00758F',
		'#E535AB',
		'#FFCA28',
		'#96588A',
		'#D3A95C'
		],
		hoverBackgroundColor: [
			'#8892BE',
			'#303030',
			'#00758F',
			'#E535AB',
			'#FFCA28',
			'#96588A',
			'#D3A95C'
		]
	}]
};

class SkillsBackend extends React.Component{

  render() {
    return (
      <div>
        <h2 className="title-thin text-muted">Back-end skills</h2>
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

export default SkillsBackend
