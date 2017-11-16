var skills = [
    { name: "HTML5", level: 8},
    { name: "CSS3", level: 5},
    { name: "JavaScript", level: 10},
    { name: "ReactJS", level: 8 },
    { name: "AngularJS", level: 8 },
];

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Header />
                <About />
                <Skills data={skills} />
                <Contact />
                <Footer />
            </div>
        );
    }
});
var Header = React.createClass({
    render: function() {
        return (
            <div className="header-background">
                <header className="header">
                    <p className="logo">&lt;/&gt;</p>
                    <div className="navbar">
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <h1>name surname</h1>
                <p className="hd-paragraph">front-end developer</p>
            </div>
        )
   }
});
var About = React.createClass({
    render: function() {
        return (
            <div className="about" id="about">
                <h2>About</h2>
                <div className="a-cover">
                    <div className="a-text" id="goals">
                        <h3>Goals</h3>
                        <p>
                            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec
                            phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo.
                            Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing
                            ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend.
                            Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
                            integer ut dignissim harum.
                        </p>
                    </div>
                    <img src="img/a-avatar.png" alt="developer's_photo" />
                    <div className="a-text">
                        <h3>Dreams</h3>
                        <p>
                            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec
                            phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo.
                            Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing
                            ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend.
                            Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut,
                            integer ut dignissim harum.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
});
var Skills = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    componentDidMount: function() { //ставим фокус в input
        var i, j, sType;
        for(i = 0; i < document.getElementsByClassName('staticStars-input').length; i++){
            {
                sType = document.getElementsByClassName('staticStars-input')[i];
                for (j = 0; j < sType.childNodes.length; j = j + 2) {
                    if(parseInt(sType.childNodes[j].attributes[0].value.split('-')[1])+1 == parseInt(sType.attributes[1].value)){
                        sType.childNodes[j].disabled = false;
                        sType.childNodes[j].checked = true;
                        break
                    }
                }
            }
        }
    },
    render: function() {
        var data = this.props.data;
        var skillTemplate = data.map(function(item, index) {
            return (
                <div className="skill" key={index}>
                    <h3>{item.name}</h3>
                    <div className="s-level">
                        <div className="staticStars-input" refs="static" name={item.level}>
                            <input id="star-9" type="checkbox" name="reviewStars"  disabled />
                            <label title="10" for="star-9"></label>

                            <input id="star-8" type="checkbox" name="reviewStars"  disabled/>
                            <label title="9" for="star-8"></label>

                            <input id="star-7" type="checkbox" name="reviewStars"  disabled/>
                            <label title="8" for="star-7"></label>

                            <input id="star-6" type="checkbox" name="reviewStars"  disabled/>
                            <label title="7" for="star-6"></label>

                            <input id="star-5" type="checkbox" name="reviewStars"  disabled/>
                            <label title="6" for="star-5"></label>

                            <input id="star-4" type="checkbox" name="reviewStars"  disabled/>
                            <label title="5" for="star-4"></label>

                            <input id="star-3" type="checkbox" name="reviewStars"  disabled/>
                            <label title="4" for="star-3"></label>

                            <input id="star-2" type="checkbox" name="reviewStars"  disabled/>
                            <label title="3" for="star-2"></label>

                            <input id="star-1" type="checkbox" name="reviewStars" disabled/>
                            <label title="2" for="star-1"></label>

                            <input id="star-0" type="checkbox" name="reviewStars" disabled/>
                            <label title="1" for="star-0"></label>
                        </div>
                    </div>
                </div>
            )
        });
        return (

            <div className="skills" id="skills">
                <h2>skills</h2>
                <div className="s-cover">
                    {skillTemplate}
                </div>
            </div>
        );
    }
});
var Contact = React.createClass({
    onInputChangeHandler: function(event) {
        console.log(event.target.value);
    },

    render: function() {
        return (

            <div className="contacts" id="contact">
                <h2>contacts</h2>
                <div className="c-cover">
                    <div className="c-company">
                        <h4>Phone number:</h4>
                        <a href="tel:+380666666666">+38066-66-66-666</a>
                        <h4>Email:</h4>
                        <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                        <h4>Skype:</h4>
                        <a>mySkypeAcc</a>
                    </div>
                    <div className="c-dev">
                        <form id="cd-contacs">
                            <input onBlur={this.onInputChangeHandler.bind(this)} type="text" id="name" placeholder="Name" required/>
                            <input onBlur={this.onInputChangeHandler.bind(this)}  type="email" id="email" placeholder="Email" required/>
                            <textarea onChange={this.onInputChangeHandler.bind(this)} id="message-body" placeholder="Send a message"></textarea>
                        </form>
                        <button type="submit" form="cd-contacs" className="cd-submit">send</button>
                    </div>
                </div>
            </div>
        );
    }
});
/*I did not fully understand what you wanted to say in the fifth item of the assignment, so I add onBlur action,
 if you want to see full input value that you input, and onChange action, if you want to see every character that
 you input*/
var Footer = React.createClass({
   render: function() {
       return(
           <footer>
               <div className="f-contacts">
                    <div className="fc-item">
                        <h4>Mobile:</h4>
                        <a href="tel:+380666666666">+38066-66-66-666</a>
                    </div>
                    <div className="fc-item">
                        <h4>Email:</h4>
                        <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                    </div>
                    <div className="fc-item">
                        <h4>Skype:</h4>
                        <a>mySkypeAcc</a>
                    </div>
               </div>
               <p className="logo">&lt;/&gt;</p>
           </footer>
       )
   }
});
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNraWxscyA9IFtcclxuICAgIHsgbmFtZTogXCJIVE1MNVwiLCBsZXZlbDogOH0sXHJcbiAgICB7IG5hbWU6IFwiQ1NTM1wiLCBsZXZlbDogNX0sXHJcbiAgICB7IG5hbWU6IFwiSmF2YVNjcmlwdFwiLCBsZXZlbDogMTB9LFxyXG4gICAgeyBuYW1lOiBcIlJlYWN0SlNcIiwgbGV2ZWw6IDggfSxcclxuICAgIHsgbmFtZTogXCJBbmd1bGFySlNcIiwgbGV2ZWw6IDggfSxcclxuXTtcclxuXHJcbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17c2tpbGxzfSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcbnZhciBIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9nb1wiPiZsdDsvJmd0OzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNob21lXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3NraWxsc1wiPlNraWxsczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT5uYW1lIHN1cm5hbWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGQtcGFyYWdyYXBoXCI+ZnJvbnQtZW5kIGRldmVsb3BlcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICB9XHJcbn0pO1xyXG52YXIgQWJvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIiBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLWNvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXRleHRcIiBpZD1cImdvYWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Hb2FsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGFjIGVyYXQgZG9sb3IgcXVpc3F1ZSBtYWduYSBjb25zZWN0ZXR1ciBsZW8sIHBlZGUgbmVjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaGFzZWxsdXMgcHJhZXNlbnQgYWRpcGlzY2luZy4gTnVsbGFtIGRpYW0gbWFnbmEgYXQgbWF1cmlzIGFtZXQsIG5vbiB1dCB1cm5hIGEgY29tbW9kby5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmVjIHZpdmFtdXMgc2VtcGVyIG5pc2kgdmVsaXQsIHByb2luIGlkIHR1cnBpcywgdmVoaWN1bGEgYW1ldCBudWxsYW0gY29udmFsbGlzIGFkaXBpc2NpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0IHNpdCwgc2l0IHZpdmVycmEuIER1aXMgaW50ZXJkdW0gZXUgZXUgc29kYWxlcyBuZWMgdXQsIG5vbiBuaWJoIGFjY3Vtc2FuIGVsZWlmZW5kLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHVydXMgdXQgdml0YWUgc2FwaWVuIGR1aSBkdWlzIGRvbG9yZXMsIHBvcnR0aXRvciB0ZW1wdXMgbmFzY2V0dXIgaWQgdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ2VyIHV0IGRpZ25pc3NpbSBoYXJ1bS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2EtYXZhdGFyLnBuZ1wiIGFsdD1cImRldmVsb3BlcidzX3Bob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImEtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RHJlYW1zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgYWMgZXJhdCBkb2xvciBxdWlzcXVlIG1hZ25hIGNvbnNlY3RldHVyIGxlbywgcGVkZSBuZWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBoYXNlbGx1cyBwcmFlc2VudCBhZGlwaXNjaW5nLiBOdWxsYW0gZGlhbSBtYWduYSBhdCBtYXVyaXMgYW1ldCwgbm9uIHV0IHVybmEgYSBjb21tb2RvLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uZWMgdml2YW11cyBzZW1wZXIgbmlzaSB2ZWxpdCwgcHJvaW4gaWQgdHVycGlzLCB2ZWhpY3VsYSBhbWV0IG51bGxhbSBjb252YWxsaXMgYWRpcGlzY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXQgc2l0LCBzaXQgdml2ZXJyYS4gRHVpcyBpbnRlcmR1bSBldSBldSBzb2RhbGVzIG5lYyB1dCwgbm9uIG5pYmggYWNjdW1zYW4gZWxlaWZlbmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdXJ1cyB1dCB2aXRhZSBzYXBpZW4gZHVpIGR1aXMgZG9sb3JlcywgcG9ydHRpdG9yIHRlbXB1cyBuYXNjZXR1ciBpZCB1dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVnZXIgdXQgZGlnbmlzc2ltIGhhcnVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxudmFyIFNraWxscyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHByb3BUeXBlczoge1xyXG4gICAgICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkgeyAvL9GB0YLQsNCy0LjQvCDRhNC+0LrRg9GBINCyIGlucHV0XHJcbiAgICAgICAgdmFyIGksIGosIHNUeXBlO1xyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXRpY1N0YXJzLWlucHV0JykubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzVHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YXRpY1N0YXJzLWlucHV0JylbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc1R5cGUuY2hpbGROb2Rlcy5sZW5ndGg7IGogPSBqICsgMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KHNUeXBlLmNoaWxkTm9kZXNbal0uYXR0cmlidXRlc1swXS52YWx1ZS5zcGxpdCgnLScpWzFdKSsxID09IHBhcnNlSW50KHNUeXBlLmF0dHJpYnV0ZXNbMV0udmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc1R5cGUuY2hpbGROb2Rlc1tqXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzVHlwZS5jaGlsZE5vZGVzW2pdLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgICAgIHZhciBza2lsbFRlbXBsYXRlID0gZGF0YS5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicy1sZXZlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpY1N0YXJzLWlucHV0XCIgcmVmcz1cInN0YXRpY1wiIG5hbWU9e2l0ZW0ubGV2ZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3Rhci05XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJldmlld1N0YXJzXCIgIGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCIxMFwiIGZvcj1cInN0YXItOVwiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3Rhci04XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJldmlld1N0YXJzXCIgIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIjlcIiBmb3I9XCJzdGFyLThcIj48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItN1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiICBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCI4XCIgZm9yPVwic3Rhci03XCI+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGFyLTZcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmV2aWV3U3RhcnNcIiAgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRpdGxlPVwiN1wiIGZvcj1cInN0YXItNlwiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3Rhci01XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJldmlld1N0YXJzXCIgIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIjZcIiBmb3I9XCJzdGFyLTVcIj48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItNFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiICBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCI1XCIgZm9yPVwic3Rhci00XCI+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGFyLTNcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmV2aWV3U3RhcnNcIiAgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRpdGxlPVwiNFwiIGZvcj1cInN0YXItM1wiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3Rhci0yXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJldmlld1N0YXJzXCIgIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIjNcIiBmb3I9XCJzdGFyLTJcIj48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItMVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIjJcIiBmb3I9XCJzdGFyLTFcIj48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItMFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIjFcIiBmb3I9XCJzdGFyLTBcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzXCIgaWQ9XCJza2lsbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5za2lsbHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzLWNvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NraWxsVGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcbnZhciBDb250YWN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgb25JbnB1dENoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0c1wiIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPmNvbnRhY3RzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1jb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QaG9uZSBudW1iZXI6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzgwNjY2NjY2NjY2XCI+KzM4MDY2LTY2LTY2LTY2NjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtYWlsOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bWFpbEBnbWFpbC5jb21cIj5tYWlsQGdtYWlsLmNvbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNreXBlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPm15U2t5cGVBY2M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWRldlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImNkLWNvbnRhY3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkJsdXI9e3RoaXMub25JbnB1dENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKX0gdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25CbHVyPXt0aGlzLm9uSW5wdXRDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyl9ICB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpfSBpZD1cIm1lc3NhZ2UtYm9keVwiIHBsYWNlaG9sZGVyPVwiU2VuZCBhIG1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGZvcm09XCJjZC1jb250YWNzXCIgY2xhc3NOYW1lPVwiY2Qtc3VibWl0XCI+c2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG4vKkkgZGlkIG5vdCBmdWxseSB1bmRlcnN0YW5kIHdoYXQgeW91IHdhbnRlZCB0byBzYXkgaW4gdGhlIGZpZnRoIGl0ZW0gb2YgdGhlIGFzc2lnbm1lbnQsIHNvIEkgYWRkIG9uQmx1ciBhY3Rpb24sXHJcbiBpZiB5b3Ugd2FudCB0byBzZWUgZnVsbCBpbnB1dCB2YWx1ZSB0aGF0IHlvdSBpbnB1dCwgYW5kIG9uQ2hhbmdlIGFjdGlvbiwgaWYgeW91IHdhbnQgdG8gc2VlIGV2ZXJ5IGNoYXJhY3RlciB0aGF0XHJcbiB5b3UgaW5wdXQqL1xyXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZi1jb250YWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TW9iaWxlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzM4MDY2NjY2NjY2NlwiPiszODA2Ni02Ni02Ni02NjY8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5FbWFpbDo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOm1haWxAZ21haWwuY29tXCI+bWFpbEBnbWFpbC5jb208L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ta3lwZTo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5teVNreXBlQWNjPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9nb1wiPiZsdDsvJmd0OzwvcD5cclxuICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgIClcclxuICAgfVxyXG59KTtcclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcCAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuKTsiXSwiZmlsZSI6ImFwcC5qcyJ9
