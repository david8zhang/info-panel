import React, { Component } from 'react';
import InfoPanel from './info-panel';

class App extends Component {
	render() {
		var features = [
			{title: 'feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.'},
			{title: 'feature 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.'},
			{title: 'feature 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.'},
			{title: 'feature 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.'}
		]
		return <div>
			<InfoPanel title='Sample Info Panel' features={features} image_url='http://www.telegraph.co.uk/content/dam/news/2016/05/29/99356270_Harambe_a_17-year-old_gorilla-NEWS-large_trans++qVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg'/>
			<InfoPanel title='Sample Info Panel'>
				<h1>Hello World!</h1>
			</InfoPanel>
		</div>
	}
}

export default App;