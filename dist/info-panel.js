'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @param {String} 	Title The title of the feature
 * @param {Object} 	Features 	An array of features
 * @param {String} 	Image_url 	the url of the centerpiece image
 * @param {JSX} 	Children 	Custom children to be passed in
 */

var InfoPanel = (function (_Component) {
	_inherits(InfoPanel, _Component);

	function InfoPanel(props) {
		_classCallCheck(this, InfoPanel);

		return _possibleConstructorReturn(this, (InfoPanel.__proto__ || Object.getPrototypeOf(InfoPanel)).call(this, props));
	}

	_createClass(InfoPanel, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { backgroundColor: '#e7e7e7', padding: '80px 0px' }, className: 'small-12 large-12 columns' },
				_react2.default.createElement(
					'div',
					{ style: { width: '90%', maxWidth: '1100px', margin: '0 auto' } },
					_react2.default.createElement(
						'h3',
						{ style: { color: 'dimgray', textAlign: 'center', marginTop: '-30px', paddingBottom: '50px' } },
						this.props.title
					),
					this.props.children || _react2.default.createElement(
						'div',
						{ className: 'row', style: { textAlign: 'center' } },
						_react2.default.createElement(
							'div',
							{ className: 'small-12 medium-4 columns' },
							_react2.default.createElement(
								'h4',
								null,
								this.props.features[0].title
							),
							_react2.default.createElement(
								'p',
								null,
								this.props.features[0].description
							),
							_react2.default.createElement(
								'h4',
								null,
								this.props.features[1].title
							),
							_react2.default.createElement(
								'p',
								null,
								this.props.features[1].description
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'small-12 medium-4 columns', style: { paddingTop: '50px' } },
							_react2.default.createElement('img', { src: this.props.image_url, alt: '' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'small-12 medium-4 columns' },
							_react2.default.createElement(
								'h4',
								null,
								this.props.features[2].title
							),
							_react2.default.createElement(
								'p',
								null,
								this.props.features[2].description
							),
							_react2.default.createElement(
								'h4',
								null,
								this.props.features[3].title
							),
							_react2.default.createElement(
								'p',
								null,
								this.props.features[3].description
							)
						)
					)
				)
			);
		}
	}]);

	return InfoPanel;
})(_react.Component);

exports.default = InfoPanel;