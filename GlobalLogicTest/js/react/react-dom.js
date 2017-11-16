/**
 * ReactDOM v0.14.7
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
// Based off https://github.com/ForbesLindesay/umd/blob/master/template.js
;(function(f) {
  // CommonJS
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f(require('react'));

  // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define(['react'], f);

  // <script>
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      // works providing we're not in "use strict";
      // needed for Java 8 Nashorn
      // see https://github.com/facebook/react/issues/3037
      g = this;
    }
    g.ReactDOM = f(g.React);
  }

})(function(React) {
  return React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZWFjdC9yZWFjdC1kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJlYWN0RE9NIHYwLjE0LjdcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxyXG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cclxuICpcclxuICovXHJcbi8vIEJhc2VkIG9mZiBodHRwczovL2dpdGh1Yi5jb20vRm9yYmVzTGluZGVzYXkvdW1kL2Jsb2IvbWFzdGVyL3RlbXBsYXRlLmpzXHJcbjsoZnVuY3Rpb24oZikge1xyXG4gIC8vIENvbW1vbkpTXHJcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gZihyZXF1aXJlKCdyZWFjdCcpKTtcclxuXHJcbiAgLy8gUmVxdWlyZUpTXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKFsncmVhY3QnXSwgZik7XHJcblxyXG4gIC8vIDxzY3JpcHQ+XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBnO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZyA9IHdpbmRvdztcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBnID0gZ2xvYmFsO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBnID0gc2VsZjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHdvcmtzIHByb3ZpZGluZyB3ZSdyZSBub3QgaW4gXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgIC8vIG5lZWRlZCBmb3IgSmF2YSA4IE5hc2hvcm5cclxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzAzN1xyXG4gICAgICBnID0gdGhpcztcclxuICAgIH1cclxuICAgIGcuUmVhY3RET00gPSBmKGcuUmVhY3QpO1xyXG4gIH1cclxuXHJcbn0pKGZ1bmN0aW9uKFJlYWN0KSB7XHJcbiAgcmV0dXJuIFJlYWN0Ll9fU0VDUkVUX0RPTV9ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xyXG59KTsiXSwiZmlsZSI6InJlYWN0L3JlYWN0LWRvbS5qcyJ9
