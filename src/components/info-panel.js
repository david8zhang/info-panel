import React, { Component } from 'react';

/**
 * @param {String} 	Title The title of the feature
 * @param {Object} 	Features 	An array of features
 * @param {String} 	Image_url 	the url of the centerpiece image
 * @param {JSX} 	Children 	Custom children to be passed in
 */
class InfoPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div style={{backgroundColor:'#e7e7e7', padding:'80px 0px'}} className='small-12 large-12 columns'>
			<div style={{width:'90%', maxWidth:'1100px', margin:'0 auto'}}>
				<h3 style={{color: 'dimgray', textAlign:'center', marginTop:'-30px', paddingBottom:'50px'}}>
					{this.props.title}
				</h3>
				{this.props.children || <div className='row' style={{textAlign:'center'}}>
					 <div className='small-12 medium-4 columns'>
					 	<h4>{this.props.features[0].title}</h4>
					 	<p>{this.props.features[0].description}</p>
					 	<h4>{this.props.features[1].title}</h4>
					 	<p>{this.props.features[1].description}</p>
					 </div>
					 <div className='small-12 medium-4 columns' style={{paddingTop:'50px'}}>
					 	<img src={this.props.image_url} alt=''/>
					 </div>
					 <div className='small-12 medium-4 columns'>
					 	<h4>{this.props.features[2].title}</h4>
					 	<p>{this.props.features[2].description}</p>
					 	<h4>{this.props.features[3].title}</h4>
					 	<p>{this.props.features[3].description}</p>
					 </div>
				</div>}
			</div>
		</div>	
	}
}

export default InfoPanel;