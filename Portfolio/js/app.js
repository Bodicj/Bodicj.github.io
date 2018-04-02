var skills = [
    {
        name: "HTML5",
        level: 8
    },
    {
        name: "CSS3",
        level: 7
    },
    {
        name: "JavaScript",
        level: 8
    },
    {
        name: "ReactJS",
        level: 3
    },
    {
        name: "AngularJS",
        level: 6
    },
    {
        name: "SASS",
        level: 8
    },
    {
        name: "Git",
        level: 9
    },
    {
        name: "Gulp",
        level: 8
    },
];
var projectsArr = [
    {
        img: 'img/Capture.PNG',
        name: 'Geotagging',
        GitRepo: 'http://github.com/Bodicj/Geotagging',
        descr: 'This is my project which can take an EXIF data from your uploaded photo and put the photo on a map where it was maked. This is my first app on JS',
        skills: 'HTML, CSS, JS, GoogleMapsAPI, FileReaderAPI',
        demo: '',
        demoTxt: 'Demo',
    },
    {
        img: 'img/MathCalc.PNG',
        name: 'MathCalc',
        GitRepo: 'http://github.com/Bodicj/Calculator-parser',
        descr: 'This is a parser for string expressions, which can works with arithmetical functions like: multiplication, division, derogation and addition. For this parser i used regular expressions',
        skills: "HTML, CSS, JS, RegExp",
        demo: 'https://bodicj.github.io/Calc/index.html',
        demoTxt: 'Demo',
    },
    {
        img: 'img/JuliaDates.PNG',
        name: 'JuliaDates',
        GitRepo: 'http://github.com/Bodicj/JuliaDates',
        descr: 'This is a responcive layout, for dating application. It includes: hover effects, button for slide page to the top, age slider, click effect for "Favorite" button and input form',
        skills: "HTML, CSS, JQuery, JQueryUI, SASS, Gulp",
        demo: 'https://bodicj.github.io/JuliaDates/index.html',
        demoTxt: 'Demo',
    },
    {
        img: 'img/EuroSolar.PNG',
        name: 'EuroSolar',
        GitRepo: 'http://github.com/Bodicj/EuroSolar',
        descr: 'This is a responcive layout, for EuroSolar. It includes: hover effects, different input forms and 2 sliders. Also it includes some AJAX requests.',
        skills: "HTML, CSS, JQuery, AJAX, SASS, Gulp",
        demo: 'https://bodicj.github.io/EuroSolar/index.html',
        demoTxt: 'Demo',
    },
    {
        img: 'img/FacilityTest.PNG',
        name: 'Facility',
        GitRepo: 'http://github.com/Bodicj/Bodicj.github.io/tree/master/FacilityTest',
        descr: 'This is a responcive layout. It includes: hover effects, sliders, button to slide page to the anchors, popup and input form',
        skills: "HTML, CSS, JQuery, JQueryUI, SASS, Gulp",
        demo: 'https://bodicj.github.io/FacilityTest',
        demoTxt: 'Demo',
    },
    {
        img: 'img/Majsternia.PNG',
        name: 'Majsernia',
        GitRepo: 'http://github.com/Bodicj/react-dataroot-course',
        descr: 'This is my first experience with ReactJS and react-router. It based on a Criasoft React starter kit. It uncludes some routes for pages, and some react components.',
        skills: "HTML, CSS, ReactJS, Webpack, react-router",
        demo: '',
        demoTxt: 'Demo',
    },
    {
        img: 'img/Intersog.PNG',
        name: 'Dashboard',
        GitRepo: 'http://github.com/Bodicj/IntersogDashboard',
        descr: 'This is my first experience with AngularJS 1.x. This is an application with simple dashboard of some advertising campaigns, it also includes a ng-routes directives with 2 roads: dashboard and campaign/:id. It shows some info about all campaigns and after click on "View Info" button it opens detail information about this campaign.',
        skills: "HTML, CSS, AngularJS 1.6, Webpack, Angular Material",
        demo: '',
        demoTxt: 'Demo',
    }
];

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Header />
                <About />
                <Skills data={skills} />
                <WorkExp />
                <Education />
                <Projects data={projectsArr} />
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
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <h1>bohdan ilba</h1>
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
                            I am a goal-oriented guy who wants to achieve heights in the field of front-end development.
                            About myself I can say a little, I'm very hardworking guy, if I can not master the information
                            with a quick understanding, then I take it by force. Failures for me are not a reason to
                            despair, but an opportunity to understand their shortcomings and start working on myself.
                            From my future work I expected very interesting projects
                        </p>
                    </div>
                    <img src="img/a-avatar.png" alt="developer's_photo" />
                    <div className="a-text">
                        <h3>Dreams</h3>
                        <p>
                            I have certain goals that I want to achieve during the work.
                            The first is to become a really part of the team, a person who will be useful.
                            The second is that it will learn something new, one of the reasons for which I left previous
                            work is the lack of technological growth.
                            The third is to become a really cool developer=)
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
    componentDidMount: function() {
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
var WorkExp = React.createClass({
    render: function() {
        return (
            <div className="about" id="Job">
                <h2>Working experience</h2>
                <div className='exWork'>
                    <h3>SEO-Studio</h3> <p className='period' >(july 2017 - january 2018)</p>
                    <p className='position' >Junior frontend devloper</p>
                    <p className='tasks'>Main tasks:</p>
                    <ul>
                        <li>Convert PSD to HTML, responcive, cross-browser layout</li>
                        <li>Creating of AJAX queries</li>
                        <li>About interesting tasks, I can note: creation of a countdown timer
                        and a rating module</li>
                    </ul>
                </div>
            </div>
        )
    }
});
var Education = React.createClass({
    render: function() {
        return (
            <div className="about" id="education">
                <h2>Education and courses</h2>
                <div className='Education'>
                    <h3 className='institution'>Igor Sikorsky Kyiv Polytechnic Institute</h3>
                    <h4 className='speciality'>Automation and computer-integrated technologies</h4><p className='period'>(2013-2018)</p>
                </div>
                <div className='Education'>
                    <h3 className='institution'>Dataroot</h3>
                    <h4 className='speciality'>Frontend courses</h4><p className='period'>(March 2017-June 2017)</p>
                </div>
            </div>
        )
    }
});
var Projects = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render: function() {
        var data = this.props.data;
        var ProjTemplate = data.map(function(item, index) {
            return (
                    <div className='Proj' id='projects' key={index}>
                        <div className='image'>
                            <img src={item.img}/>
                            <div className='hover-image'>
                                <h4>{item.name}</h4>
                                <p className='project-descr'>{item.descr}</p>
                                <div className='links'>
                                    <a target='_blank' href={item.GitRepo}>Github Repo</a>
                                    <a target='_blank' href={item.demo}>{item.demoTxt}</a>
                                </div>
                                <h4 className='sm'>Skills:</h4>
                                <p className='project-descr'>{item.skills}  </p>
                            </div>
                        </div>
                    </div>
            )
        });
        return (
            <div className="about" id="projects">
                <h2>My Projects</h2>
                <div className='proj-cover'>
                    {ProjTemplate}
                </div>
            </div>
        )
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
                    <div className="c-phone">
                        <h4>Phone number:</h4>
                        <a href="tel:+380661964425">+38066-196-44-25</a>
                    </div>
                    <div className='c-mail'>
                        <h4>Email:</h4>
                        <a href="mailto:bohdan.ilba@gmail.com">bohdan.ilba@gmail.com</a>
                    </div>
                    <div className='c-skype'>
                        <h4>Skype:</h4>
                        <a href="skype:live:bohdan.ilba?chat">Bohdan Ilba</a>
                    </div>
                    <div className='c-map'>
                        <h4>Telegram:</h4>
                        <a target='_blank'  href="http://t.me/Bodicj">@Bodicj</a>
                    </div>
                </div>
            </div>
        );
    }
});
var Footer = React.createClass({
   render: function() {
       return(
           <footer>
               <div className="f-contacts">
                    <div className="fc-item">
                        <h4>Mobile:</h4>
                        <a href="tel:+380661964425">+38066-196-44-25</a>
                    </div>
                    <div className="fc-item">
                        <h4>Email:</h4>
                        <a href="mailto:bohdan.ilba@gmail.com">bohdan.ilba@gmail.com</a>
                    </div>
                    <div className="fc-item">
                        <h4>Skype:</h4>
                        <a href="skype:live:bohdan.ilba?chat">Bohdan Ilba</a>
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkhUTUw1XCIsXHJcbiAgICAgICAgbGV2ZWw6IDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDU1MzXCIsXHJcbiAgICAgICAgbGV2ZWw6IDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgbGV2ZWw6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZWFjdEpTXCIsXHJcbiAgICAgICAgbGV2ZWw6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTQVNTXCIsXHJcbiAgICAgICAgbGV2ZWw6IDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJHaXRcIixcclxuICAgICAgICBsZXZlbDogOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkd1bHBcIixcclxuICAgICAgICBsZXZlbDogOFxyXG4gICAgfSxcclxuXTtcclxudmFyIHByb2plY3RzQXJyID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltZzogJ2ltZy9DYXB0dXJlLlBORycsXHJcbiAgICAgICAgbmFtZTogJ0dlb3RhZ2dpbmcnLFxyXG4gICAgICAgIEdpdFJlcG86ICdodHRwOi8vZ2l0aHViLmNvbS9Cb2RpY2ovR2VvdGFnZ2luZycsXHJcbiAgICAgICAgZGVzY3I6ICdUaGlzIGlzIG15IHByb2plY3Qgd2hpY2ggY2FuIHRha2UgYW4gRVhJRiBkYXRhIGZyb20geW91ciB1cGxvYWRlZCBwaG90byBhbmQgcHV0IHRoZSBwaG90byBvbiBhIG1hcCB3aGVyZSBpdCB3YXMgbWFrZWQuIFRoaXMgaXMgbXkgZmlyc3QgYXBwIG9uIEpTJyxcclxuICAgICAgICBza2lsbHM6ICdIVE1MLCBDU1MsIEpTLCBHb29nbGVNYXBzQVBJLCBGaWxlUmVhZGVyQVBJJyxcclxuICAgICAgICBkZW1vOiAnJyxcclxuICAgICAgICBkZW1vVHh0OiAnRGVtbycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ2ltZy9NYXRoQ2FsYy5QTkcnLFxyXG4gICAgICAgIG5hbWU6ICdNYXRoQ2FsYycsXHJcbiAgICAgICAgR2l0UmVwbzogJ2h0dHA6Ly9naXRodWIuY29tL0JvZGljai9DYWxjdWxhdG9yLXBhcnNlcicsXHJcbiAgICAgICAgZGVzY3I6ICdUaGlzIGlzIGEgcGFyc2VyIGZvciBzdHJpbmcgZXhwcmVzc2lvbnMsIHdoaWNoIGNhbiB3b3JrcyB3aXRoIGFyaXRobWV0aWNhbCBmdW5jdGlvbnMgbGlrZTogbXVsdGlwbGljYXRpb24sIGRpdmlzaW9uLCBkZXJvZ2F0aW9uIGFuZCBhZGRpdGlvbi4gRm9yIHRoaXMgcGFyc2VyIGkgdXNlZCByZWd1bGFyIGV4cHJlc3Npb25zJyxcclxuICAgICAgICBza2lsbHM6IFwiSFRNTCwgQ1NTLCBKUywgUmVnRXhwXCIsXHJcbiAgICAgICAgZGVtbzogJ2h0dHBzOi8vYm9kaWNqLmdpdGh1Yi5pby9DYWxjL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgIGRlbW9UeHQ6ICdEZW1vJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1nOiAnaW1nL0p1bGlhRGF0ZXMuUE5HJyxcclxuICAgICAgICBuYW1lOiAnSnVsaWFEYXRlcycsXHJcbiAgICAgICAgR2l0UmVwbzogJ2h0dHA6Ly9naXRodWIuY29tL0JvZGljai9KdWxpYURhdGVzJyxcclxuICAgICAgICBkZXNjcjogJ1RoaXMgaXMgYSByZXNwb25jaXZlIGxheW91dCwgZm9yIGRhdGluZyBhcHBsaWNhdGlvbi4gSXQgaW5jbHVkZXM6IGhvdmVyIGVmZmVjdHMsIGJ1dHRvbiBmb3Igc2xpZGUgcGFnZSB0byB0aGUgdG9wLCBhZ2Ugc2xpZGVyLCBjbGljayBlZmZlY3QgZm9yIFwiRmF2b3JpdGVcIiBidXR0b24gYW5kIGlucHV0IGZvcm0nLFxyXG4gICAgICAgIHNraWxsczogXCJIVE1MLCBDU1MsIEpRdWVyeSwgSlF1ZXJ5VUksIFNBU1MsIEd1bHBcIixcclxuICAgICAgICBkZW1vOiAnaHR0cHM6Ly9ib2RpY2ouZ2l0aHViLmlvL0p1bGlhRGF0ZXMvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgZGVtb1R4dDogJ0RlbW8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdpbWcvRXVyb1NvbGFyLlBORycsXHJcbiAgICAgICAgbmFtZTogJ0V1cm9Tb2xhcicsXHJcbiAgICAgICAgR2l0UmVwbzogJ2h0dHA6Ly9naXRodWIuY29tL0JvZGljai9FdXJvU29sYXInLFxyXG4gICAgICAgIGRlc2NyOiAnVGhpcyBpcyBhIHJlc3BvbmNpdmUgbGF5b3V0LCBmb3IgRXVyb1NvbGFyLiBJdCBpbmNsdWRlczogaG92ZXIgZWZmZWN0cywgZGlmZmVyZW50IGlucHV0IGZvcm1zIGFuZCAyIHNsaWRlcnMuIEFsc28gaXQgaW5jbHVkZXMgc29tZSBBSkFYIHJlcXVlc3RzLicsXHJcbiAgICAgICAgc2tpbGxzOiBcIkhUTUwsIENTUywgSlF1ZXJ5LCBBSkFYLCBTQVNTLCBHdWxwXCIsXHJcbiAgICAgICAgZGVtbzogJ2h0dHBzOi8vYm9kaWNqLmdpdGh1Yi5pby9FdXJvU29sYXIvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgZGVtb1R4dDogJ0RlbW8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdpbWcvRmFjaWxpdHlUZXN0LlBORycsXHJcbiAgICAgICAgbmFtZTogJ0ZhY2lsaXR5JyxcclxuICAgICAgICBHaXRSZXBvOiAnaHR0cDovL2dpdGh1Yi5jb20vQm9kaWNqL0JvZGljai5naXRodWIuaW8vdHJlZS9tYXN0ZXIvRmFjaWxpdHlUZXN0JyxcclxuICAgICAgICBkZXNjcjogJ1RoaXMgaXMgYSByZXNwb25jaXZlIGxheW91dC4gSXQgaW5jbHVkZXM6IGhvdmVyIGVmZmVjdHMsIHNsaWRlcnMsIGJ1dHRvbiB0byBzbGlkZSBwYWdlIHRvIHRoZSBhbmNob3JzLCBwb3B1cCBhbmQgaW5wdXQgZm9ybScsXHJcbiAgICAgICAgc2tpbGxzOiBcIkhUTUwsIENTUywgSlF1ZXJ5LCBKUXVlcnlVSSwgU0FTUywgR3VscFwiLFxyXG4gICAgICAgIGRlbW86ICdodHRwczovL2JvZGljai5naXRodWIuaW8vRmFjaWxpdHlUZXN0JyxcclxuICAgICAgICBkZW1vVHh0OiAnRGVtbycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ2ltZy9NYWpzdGVybmlhLlBORycsXHJcbiAgICAgICAgbmFtZTogJ01hanNlcm5pYScsXHJcbiAgICAgICAgR2l0UmVwbzogJ2h0dHA6Ly9naXRodWIuY29tL0JvZGljai9yZWFjdC1kYXRhcm9vdC1jb3Vyc2UnLFxyXG4gICAgICAgIGRlc2NyOiAnVGhpcyBpcyBteSBmaXJzdCBleHBlcmllbmNlIHdpdGggUmVhY3RKUyBhbmQgcmVhY3Qtcm91dGVyLiBJdCBiYXNlZCBvbiBhIENyaWFzb2Z0IFJlYWN0IHN0YXJ0ZXIga2l0LiBJdCB1bmNsdWRlcyBzb21lIHJvdXRlcyBmb3IgcGFnZXMsIGFuZCBzb21lIHJlYWN0IGNvbXBvbmVudHMuJyxcclxuICAgICAgICBza2lsbHM6IFwiSFRNTCwgQ1NTLCBSZWFjdEpTLCBXZWJwYWNrLCByZWFjdC1yb3V0ZXJcIixcclxuICAgICAgICBkZW1vOiAnJyxcclxuICAgICAgICBkZW1vVHh0OiAnRGVtbycsXHJcbiAgICB9XHJcbl07XHJcblxyXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIGRhdGE9e3NraWxsc30gLz5cclxuICAgICAgICAgICAgICAgIDxXb3JrRXhwIC8+XHJcbiAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHMgZGF0YT17cHJvamVjdHNBcnJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxudmFyIEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2dvXCI+Jmx0Oy8mZ3Q7PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2tpbGxzXCI+U2tpbGxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2plY3RzXCI+UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+Ym9oZGFuIGlsYmE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGQtcGFyYWdyYXBoXCI+ZnJvbnQtZW5kIGRldmVsb3BlcjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICB9XHJcbn0pO1xyXG52YXIgQWJvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIiBpZD1cImFib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+QWJvdXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLWNvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhLXRleHRcIiBpZD1cImdvYWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Hb2FsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBhbSBhIGdvYWwtb3JpZW50ZWQgZ3V5IHdobyB3YW50cyB0byBhY2hpZXZlIGhlaWdodHMgaW4gdGhlIGZpZWxkIG9mIGZyb250LWVuZCBkZXZlbG9wbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IG15c2VsZiBJIGNhbiBzYXkgYSBsaXR0bGUsIEknbSB2ZXJ5IGhhcmR3b3JraW5nIGd1eSwgaWYgSSBjYW4gbm90IG1hc3RlciB0aGUgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggYSBxdWljayB1bmRlcnN0YW5kaW5nLCB0aGVuIEkgdGFrZSBpdCBieSBmb3JjZS4gRmFpbHVyZXMgZm9yIG1lIGFyZSBub3QgYSByZWFzb24gdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3BhaXIsIGJ1dCBhbiBvcHBvcnR1bml0eSB0byB1bmRlcnN0YW5kIHRoZWlyIHNob3J0Y29taW5ncyBhbmQgc3RhcnQgd29ya2luZyBvbiBteXNlbGYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIG15IGZ1dHVyZSB3b3JrIEkgZXhwZWN0ZWQgdmVyeSBpbnRlcmVzdGluZyBwcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYS1hdmF0YXIucG5nXCIgYWx0PVwiZGV2ZWxvcGVyJ3NfcGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EcmVhbXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkgaGF2ZSBjZXJ0YWluIGdvYWxzIHRoYXQgSSB3YW50IHRvIGFjaGlldmUgZHVyaW5nIHRoZSB3b3JrLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZpcnN0IGlzIHRvIGJlY29tZSBhIHJlYWxseSBwYXJ0IG9mIHRoZSB0ZWFtLCBhIHBlcnNvbiB3aG8gd2lsbCBiZSB1c2VmdWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgc2Vjb25kIGlzIHRoYXQgaXQgd2lsbCBsZWFybiBzb21ldGhpbmcgbmV3LCBvbmUgb2YgdGhlIHJlYXNvbnMgZm9yIHdoaWNoIEkgbGVmdCBwcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yayBpcyB0aGUgbGFjayBvZiB0ZWNobm9sb2dpY2FsIGdyb3d0aC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0aGlyZCBpcyB0byBiZWNvbWUgYSByZWFsbHkgY29vbCBkZXZlbG9wZXI9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxudmFyIFNraWxscyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHByb3BUeXBlczoge1xyXG4gICAgICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpLCBqLCBzVHlwZTtcclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGF0aWNTdGFycy1pbnB1dCcpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc1R5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGF0aWNTdGFycy1pbnB1dCcpW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHNUeXBlLmNoaWxkTm9kZXMubGVuZ3RoOyBqID0gaiArIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwYXJzZUludChzVHlwZS5jaGlsZE5vZGVzW2pdLmF0dHJpYnV0ZXNbMF0udmFsdWUuc3BsaXQoJy0nKVsxXSkrMSA9PSBwYXJzZUludChzVHlwZS5hdHRyaWJ1dGVzWzFdLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNUeXBlLmNoaWxkTm9kZXNbal0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc1R5cGUuY2hpbGROb2Rlc1tqXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgICAgICB2YXIgc2tpbGxUZW1wbGF0ZSA9IGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInMtbGV2ZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aWNTdGFycy1pbnB1dFwiIHJlZnM9XCJzdGF0aWNcIiBuYW1lPXtpdGVtLmxldmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItOVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiICBkaXNhYmxlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRpdGxlPVwiMTBcIiBmb3I9XCJzdGFyLTlcIj48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItOFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiICBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCI5XCIgZm9yPVwic3Rhci04XCI+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGFyLTdcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmV2aWV3U3RhcnNcIiAgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRpdGxlPVwiOFwiIGZvcj1cInN0YXItN1wiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3Rhci02XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJldmlld1N0YXJzXCIgIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIjdcIiBmb3I9XCJzdGFyLTZcIj48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItNVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiICBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCI2XCIgZm9yPVwic3Rhci01XCI+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGFyLTRcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmV2aWV3U3RhcnNcIiAgZGlzYWJsZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHRpdGxlPVwiNVwiIGZvcj1cInN0YXItNFwiPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3Rhci0zXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJldmlld1N0YXJzXCIgIGRpc2FibGVkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT1cIjRcIiBmb3I9XCJzdGFyLTNcIj48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXItMlwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZXZpZXdTdGFyc1wiICBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCIzXCIgZm9yPVwic3Rhci0yXCI+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGFyLTFcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmV2aWV3U3RhcnNcIiBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCIyXCIgZm9yPVwic3Rhci0xXCI+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGFyLTBcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmV2aWV3U3RhcnNcIiBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgdGl0bGU9XCIxXCIgZm9yPVwic3Rhci0wXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsc1wiIGlkPVwic2tpbGxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+c2tpbGxzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicy1jb3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtza2lsbFRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG52YXIgV29ya0V4cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiIGlkPVwiSm9iXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+V29ya2luZyBleHBlcmllbmNlPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdleFdvcmsnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TRU8tU3R1ZGlvPC9oMz4gPHAgY2xhc3NOYW1lPSdwZXJpb2QnID4oanVseSAyMDE3IC0gamFudWFyeSAyMDE4KTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Bvc2l0aW9uJyA+SnVuaW9yIGZyb250ZW5kIGRldmxvcGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGFza3MnPk1haW4gdGFza3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbnZlcnQgUFNEIHRvIEhUTUwsIHJlc3BvbmNpdmUsIGNyb3NzLWJyb3dzZXIgbGF5b3V0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNyZWF0aW5nIG9mIEFKQVggcXVlcmllczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BYm91dCBpbnRlcmVzdGluZyB0YXNrcywgSSBjYW4gbm90ZTogY3JlYXRpb24gb2YgYSBjb3VudGRvd24gdGltZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGEgcmF0aW5nIG1vZHVsZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0pO1xyXG52YXIgRWR1Y2F0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCIgaWQ9XCJlZHVjYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMj5FZHVjYXRpb24gYW5kIGNvdXJzZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VkdWNhdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0naW5zdGl0dXRpb24nPklnb3IgU2lrb3Jza3kgS3lpdiBQb2x5dGVjaG5pYyBJbnN0aXR1dGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3NwZWNpYWxpdHknPkF1dG9tYXRpb24gYW5kIGNvbXB1dGVyLWludGVncmF0ZWQgdGVjaG5vbG9naWVzPC9oND48cCBjbGFzc05hbWU9J3BlcmlvZCc+KDIwMTMtMjAxOCk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdFZHVjYXRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2luc3RpdHV0aW9uJz5EYXRhcm9vdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nc3BlY2lhbGl0eSc+RnJvbnRlbmQgY291cnNlczwvaDQ+PHAgY2xhc3NOYW1lPSdwZXJpb2QnPihNYXJjaCAyMDE3LUp1bmUgMjAxNyk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxudmFyIFByb2plY3RzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcHJvcFR5cGVzOiB7XHJcbiAgICAgICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcclxuICAgIH0sXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgICAgIHZhciBQcm9qVGVtcGxhdGUgPSBkYXRhLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcm9qJyBpZD0ncHJvamVjdHMnIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG92ZXItaW1hZ2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcm9qZWN0LWRlc2NyJz57aXRlbS5kZXNjcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2l0ZW0uR2l0UmVwb30+R2l0aHViIFJlcG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPXtpdGVtLmRlbW99PntpdGVtLmRlbW9UeHR9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3NtJz5Ta2lsbHM6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3Byb2plY3QtZGVzY3InPntpdGVtLnNraWxsc30gIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+TXkgUHJvamVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2otY292ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIHtQcm9qVGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KTtcclxudmFyIENvbnRhY3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBvbklucHV0Q2hhbmdlSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Y29udGFjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWNvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLXBob25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QaG9uZSBudW1iZXI6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzgwNjYxOTY0NDI1XCI+KzM4MDY2LTE5Ni00NC0yNTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1tYWlsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtYWlsOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Ym9oZGFuLmlsYmFAZ21haWwuY29tXCI+Ym9oZGFuLmlsYmFAZ21haWwuY29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXNreXBlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNreXBlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJza3lwZTpsaXZlOmJvaGRhbi5pbGJhP2NoYXRcIj5Cb2hkYW4gSWxiYTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1tYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TG9jYXRpb246PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnICBocmVmPVwiaHR0cDovL3d3dy5nb29nbGUuY29tLnVhL21hcHMvcGxhY2UvTGlza2l2c2thK1N0LCsyMCwrS3lpdiwrMDIwMDAvQDUwLjUyNzIzODksMzAuNTk0MjA4MiwxN3ovZGF0YT0hM20xITRiMSE0bTUhM200ITFzMHg0MGQ0ZDExMzA4MmVlNTI3OjB4NTExZTZmNjI2NzVhYjk0NiE4bTIhM2Q1MC41MjcyMzU1ITRkMzAuNTk2Mzk2OVwiPkt5aXYsIFVrcmFpbmUsIExpc2tpdnNrYSBzdC4sIDIwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG4vKkkgZGlkIG5vdCBmdWxseSB1bmRlcnN0YW5kIHdoYXQgeW91IHdhbnRlZCB0byBzYXkgaW4gdGhlIGZpZnRoIGl0ZW0gb2YgdGhlIGFzc2lnbm1lbnQsIHNvIEkgYWRkIG9uQmx1ciBhY3Rpb24sXHJcbiBpZiB5b3Ugd2FudCB0byBzZWUgZnVsbCBpbnB1dCB2YWx1ZSB0aGF0IHlvdSBpbnB1dCwgYW5kIG9uQ2hhbmdlIGFjdGlvbiwgaWYgeW91IHdhbnQgdG8gc2VlIGV2ZXJ5IGNoYXJhY3RlciB0aGF0XHJcbiB5b3UgaW5wdXQqL1xyXG52YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZi1jb250YWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TW9iaWxlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzM4MDY2MTk2NDQyNVwiPiszODA2Ni0xOTYtNDQtMjU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5FbWFpbDo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmJvaGRhbi5pbGJhQGdtYWlsLmNvbVwiPmJvaGRhbi5pbGJhQGdtYWlsLmNvbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZjLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNreXBlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJza3lwZTpsaXZlOmJvaGRhbi5pbGJhP2NoYXRcIj5Cb2hkYW4gSWxiYTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29cIj4mbHQ7LyZndDs8L3A+XHJcbiAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICApXHJcbiAgIH1cclxufSk7XHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHAgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7Il0sImZpbGUiOiJhcHAuanMifQ==
