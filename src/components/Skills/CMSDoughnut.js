import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'WordPress',
		'Netlify CMS',
		'Prismic'
	],
	datasets: [{
		data: [80, 50, 30],
		backgroundColor: [
		'#21759B',
		'#C9FA4B',
		'#5163ba'
		],
		hoverBackgroundColor: [
			'#21759B',
			'#C9FA4B',
			'#5163ba'
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
