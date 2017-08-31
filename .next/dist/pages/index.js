'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _posts = require('nextein/posts');

var _posts2 = _interopRequireDefault(_posts);

var _post = require('nextein/post');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/davidg/Development/personal/davegomez.github.io/pages/index.js?entry';


var BLOG_TITLE = '{ davegomez.io }';

var renderPosts = function renderPosts(post, idx) {
  return _react2.default.createElement('article', { key: 'post-' + idx, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { href: post.data.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, post.data.title)), _react2.default.createElement(_post.Content, (0, _extends3.default)({}, post, { excerpt: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })));
};

exports.default = (0, _posts2.default)(function (_ref) {
  var posts = _ref.posts;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h1', { className: 'blog-title', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, BLOG_TITLE)), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, posts.map(renderPosts)));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aFBvc3RzIiwiQ29udGVudCIsIkJMT0dfVElUTEUiLCJyZW5kZXJQb3N0cyIsInBvc3QiLCJpZHgiLCJkYXRhIiwidXJsIiwidGl0bGUiLCJwb3N0cyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7OztBQUVULElBQU0sYUFBTixBQUFtQjs7QUFFbkIsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsTUFBRCxBQUFPLEtBQVA7eUJBQ2xCLGNBQUEsYUFBUyxlQUFULEFBQXNCO2dCQUF0QjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLE9BQUcsTUFBTSxLQUFBLEFBQUssS0FBZCxBQUFtQjtnQkFBbkI7a0JBQUEsQUFBeUI7QUFBekI7VUFBeUIsQUFBSyxLQUZsQyxBQUNFLEFBQ0UsQUFBbUMsQUFFckMseUJBQUEsQUFBQyx3REFBRCxBQUFhLFFBQU0sU0FBbkI7Z0JBQUE7a0JBTGdCLEFBQ2xCLEFBSUU7QUFBQTs7QUFMSixBQVNBOzt1Q0FBeUIsZ0JBQWU7TUFBWixBQUFZLGFBQVosQUFBWSxBQUN0Qzs7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQTRCO0FBQTVCO0tBRkosQUFDRSxBQUNFLEFBRUYsOEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEsV0FBTSxBQUFNLElBTGhCLEFBQ0UsQUFJRSxBQUFNLEFBQVUsQUFHckI7QUFURCxBQUFlLENBQUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhdmlkZy9EZXZlbG9wbWVudC9wZXJzb25hbC9kYXZlZ29tZXouZ2l0aHViLmlvIn0=