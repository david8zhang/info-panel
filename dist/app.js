'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _infoPanel = require('./info-panel');

var _infoPanel2 = _interopRequireDefault(_infoPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var features = [{ title: 'feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.' }, { title: 'feature 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.' }, { title: 'feature 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.' }, { title: 'feature 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid blanditiis commodi dolorem et ex exercitationem fuga hic id illo iste iusto labore nam nemo non, quae quam quibusdam reprehenderit.' }];
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_infoPanel2.default, { title: 'Sample Info Panel', features: features, image_url: 'http://www.telegraph.co.uk/content/dam/news/2016/05/29/99356270_Harambe_a_17-year-old_gorilla-NEWS-large_trans++qVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg' }),
				_react2.default.createElement(
					_infoPanel2.default,
					{ title: 'Sample Info Panel' },
					_react2.default.createElement(
						'h1',
						null,
						'Hello World!'
					)
				)
			);
		}
	}]);

	return App;
})(_react.Component);

exports.default = App;