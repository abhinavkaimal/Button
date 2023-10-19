import React from 'react';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "button {\r\n    font-size: 60px;\r\n  }";
styleInject(css_248z);

var Button = function (props) {
    var label = props.label, onClick = props.onClick;
    var _a = React.useState(false), click = _a[0], setClicked = _a[1];
    var handleonClick = function () {
        console.log("Message from packagee:: Button clicked");
        setClicked(!click);
        onClick && onClick();
    };
    return (React.createElement(React.Fragment, null,
        click ? "Clicked" : "Not Clicked",
        React.createElement("button", { onClick: function () { return handleonClick(); } }, label)));
};

export { Button };
//# sourceMappingURL=index.js.map
