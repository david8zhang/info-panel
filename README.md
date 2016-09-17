# Description
A panel for displaying feature information

# Styles
You must have Foundation 6 included as part of the project for this component to work!

Get it here: [Foundation 6](http://foundation.zurb.com/sites/download.html/)

Require it in your html

```
<link rel="stylesheet" type="text/css" href="./style/css/app.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.min.css">
```

# Usage
```
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

```