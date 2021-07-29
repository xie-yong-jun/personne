
import React, { Component } from "react";
// react-router提供了路由的核心api，包括router、route、Switch等，但是没有提供dom操作跳转
// api react-router-dom提供BrowserRouter，route Link、switch等，可以通过dom事件控制路由
import { BrowserRouter, Switch, Route, } from "react-router-dom";

// Home About组件
import About from "./views/About"
import Home from "./views/Home"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div> <h2> 谢拥军 </h2> </div>
        {/* HashRouter 路由模式，页面地址上会带有 # 号 http://localhost:3001/#/
            BrowserRouter  http://localhost:3001/
            区别 ：HashRouter最简单，不需要服务器端渲染，服务器端无论对任何URL请求都返回一模一样的HTML就好，靠浏览器的#来区分path就好
            BrowserRouter，要求服务端对不同的url返回不同的html
            具体区别，有待研究？？？？
        */}
        <BrowserRouter>
          {/* Switch 只匹配一个 / 和 /About这两个路径如果不使用Switch
            例如在 输入/about路径下 这两个路径都会显示组件 但是加上Switch后 /about路径下，还是会显示
            Home组件(路径 / 直接就匹配上了) 这就是精准匹配的问题了，加上exact就好了
          */}
          <Switch>
            <Route exact component={Home} path='/' />
            <Route component={About} path='/about' />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }


}





export default App;
