import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'WordPress',
		'Netlify CMS'
	],
	datasets: [{
		data: [80, 50],
		backgroundColor: [
		'#21759B',
		'#C9FA4B'
		],
		hoverBackgroundColor: [
			'#21759B',
			'#C9FA4B'
		]
	}]
};

class SkillsFrontend extends React.Component{

  render() {
    return (
      <div>
        <h2 className="title-thin text-muted">CMS skills</h2>
        <Doughnut data={data} />
      </div>
    );
  }
};

export default SkillsFrontend
