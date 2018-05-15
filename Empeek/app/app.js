webpackJsonp([0], {
    62: function (e, t, a) {
        a(30), e.exports = a(84)
    }, 84: function (e, t, a) {
        "use strict";
        a(85), a(89);
        angular.module("DairyApp", ["app.chatList"])
    }, 85: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = a(86), n = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s), i = angular.module("app.chatDetails", []);
        i.component("chatDetails", n.default), t.default = i
    }, 86: function (e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = a(87), i = s(n), c = a(88), r = s(c);
        t.default = {template: i.default, controller: r.default}
    }, 87: function (e, t) {
        e.exports = ""
    }, 88: function (e, t, a) {
        "use strict";

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function e(t, a) {
            "ngInject";
            var n = this;
            s(this, e), this.$onInit = function (e) {
                n.$log.info("Activated Dashboard View.")
            }, this.$log = t
        };
        n.$inject = ["$log", "$window"], t.default = n
    }, 89: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = a(90), n = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(s), i = angular.module("app.chatList", []);
        i.component("chatList", n.default), t.default = i
    }, 90: function (e, t, a) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = a(91), i = s(n), c = a(92), r = s(c);
        t.default = {template: i.default, controller: r.default}
    }, 91: function (e, t) {
        e.exports = '<div class="chat-list_wrapper">\n    <h2>Items</h2>\n    <div class="chat-list_input-wrapper">\n        <input class="input-wrapper_input" id="addChat" type="text" placeholder="Type names here..." />\n        <button class="main-button input-wrapper_button" ng-click="$ctrl.addChat()">Add new</button>\n    </div>\n    <div class="chat-list">\n        <div class="chat-list_item chat-item chat-{{chat.id}}" ng-repeat="chat in $ctrl.chatDetails" chatid="{{chat.id}}">\n            <h3 class="chat-item_name" ng-click="$ctrl.changeActive(chat.id)">{{chat.name}}<span class="chat-item_msg-count">{{chat.messageCount}}</span></h3>\n            <button class="main-button__short-red"  ng-click="$ctrl.deleteChat(chat.id)">Delete</button>\n        </div>\n    </div>\n</div>\n<div class="chat-details">\n    <h2>Comments #2</h2>\n    <div class="chat-details_chat_wrapper chat_wrapper" >\n        <div class="chat-wrapper_message message" ng-repeat="message in $ctrl.messages track by $index">\n            <div class="message_user-photo" style="background: {{message.authorImage}}"></div>\n            <p class="message_text">{{message.message}}</p>\n        </div>\n    </div>\n    <div class="chat-details_user-message user-message">\n        <div class="user-message_icon"></div>\n        <textarea class="user-message_text" id="addMessage" ng-keydown="$ctrl.addMessage(event)"></textarea>\n    </div>\n</div>\n\n'
    }, 92: function (e, t, a) {
        "use strict";

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function e(t) {
            "ngInject";
            var a = this;
            s(this, e), this.$onInit = function () {
                window.localStorage.chats || window.localStorage.setItem("chats", '[{"name":"First item name","messageCount":3, "id": 0, "messages":[{"authorImage":"#f2f2f2", "parentId": 0, "message":"A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"},{"authorImage":"#045646", "parentId": 0, "message":"A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"}, {"authorImage":"#f2f2f2", "parentId": 0, "message":"A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"}]},{"name":"Second item name", "messageCount":2, "id": 1,"messages":[{"authorImage":"#f2f2f2", "parentId": 1, "message":"Hello people!"},{"authorImage":"#045646", "parentId": 1, "message":"Hi"}]}]');
                a.chatDetails = JSON.parse(window.localStorage.chats) || null, angular.element(document).ready(function () {
                    document.querySelector(".chat-item").classList.add("active-chat")
                }), a.messages = JSON.parse(window.localStorage.chats)[0].messages, a.$log.info("Activated Dashboard View.")
            }, this.$log = t;
            var n = this;
            this.deleteChat = function (e) {
                document.querySelector(".chat-" + e).classList.contains("active-chat") && (document.querySelector(".active-chat").classList.remove("active-chat"), document.querySelector(".chat-" + (e - 1)).classList.add("active-chat"), n.messages = n.chatDetails.filter(function (t) {
                    return t.id == e - 1
                })[0].messages), n.chatDetails.splice(n.chatDetails.indexOf(n.chatDetails.filter(function (t) {
                    return t.id == e
                })[0]), 1), window.localStorage.setItem("chats", JSON.stringify(n.chatDetails))
            }, this.changeActive = function (e) {
                document.querySelector(".active-chat").classList.remove("active-chat"), document.querySelector(".chat-" + e).classList.add("active-chat"), n.messages = n.chatDetails.filter(function (t) {
                    return t.id == e
                })[0].messages
            }, this.addChat = function () {
                if (0 !== n.chatDetails.filter(function (e) {
                        return e.name == document.querySelector("#addChat").value
                    }).length) alert("Sorry, but chat with current name is already exist!"); else {
                    document.querySelector("#addChat").value;
                    var e = n.chatDetails[n.chatDetails.length - 1].id + 1,
                        t = {name: document.querySelector("#addChat").value, id: e, messageCount: 0, messages: []};
                    n.chatDetails.push(t), window.localStorage.setItem("chats", JSON.stringify(n.chatDetails))
                }
            }, this.addMessage = function () {
                if (13 === event.keyCode && event.ctrlKey) {
                    var e = document.querySelector(".active-chat").getAttribute("chatid"),
                        t = n.chatDetails.indexOf(n.chatDetails.filter(function (t) {
                            return t.id == e
                        })[0]),
                        a = {authorImage: "#ffa500", parentID: e, message: document.querySelector("#addMessage").value};
                    n.messages.push(a), n.chatDetails[t].messages = n.messages, n.chatDetails[t].messageCount = n.chatDetails[t].messageCount + 1, window.localStorage.setItem("chats", JSON.stringify(n.chatDetails)), document.querySelector("#addMessage").value = null
                }
            }
        };
        n.$inject = ["$log"], t.default = n
    }
}, [62]);
