import { Component } from "react";
import { BrowserRouter as Router,Route, Link  } from "react-router-dom";

class RouterEssai extends Component<{}, {}> {
    render() {
        return (
            <Router>
                <div>
                    <h2>Essai router</h2>
                    <div>
                        <nav>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/other#bottom'>Other</Link>
                            {/* <a href="/other#bottom">othersss</a> */}
                        </nav>
                    </div>
                </div>
                <Route path='/' exact component={Index} />
                <Route path='/about' component={About} />
                <Route path='/other' component={Other} />
            </Router>
        )
    }
}
class Index extends Component<{}>{
    render() {
        return (
            <h3>Home page</h3>
        )
    }
}
class About extends Component<{}>{
    render() {
        return (
            <h3>aboutPage page</h3>
        )
    }
}
class Other extends Component<{}>{
    render() {
        return (
            <>
                <h3>Other page</h3>
                <p className=" w-1/6 h-80 border border-gray-700 overflow-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora optio repellat rerum odio pariatur ad quidem unde, dignissimos aspernatur delectus enim magni, quo velit maiores doloribus sint nam vero. Dignissimos?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora optio repellat rerum odio pariatur ad quidem unde, dignissimos aspernatur delectus enim magni, quo velit maiores doloribus sint nam vero. Dignissimos?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora optio repellat rerum odio pariatur ad quidem unde, dignissimos aspernatur delectus enim magni, quo velit maiores doloribus sint nam vero. Dignissimos?
                    <div id="bottom"></div>
                </p>
            </>
        )
    }
}

export default RouterEssai;