// 引入css
import "../components/header.module.styl"
const queryString = require('query-string');
import Router from 'next/router'
import { withRouter } from 'next/router'


class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            tabList: [{
                key: "首页",
                value: "/"
            }, {
                key: "走进天恒达",
                value: "/introduce"
            }, {
                key: "服务领域",
                value: "/commonList",
                query: {
                    type: "service"
                }
            }, {
                key: "业绩及应用",
                value: "/commonList",
                query: {
                    type: "app"
                }
            }, {
                key: "新闻资讯",
                value: "/commonList",
                query: {
                    type: "news"
                }
            }]
        }
    }
    componentDidMount() {
        if(this.props.router.asPath === "/introduce"){
            this.setState({
                activeIndex: 1
            });
        }
        Router.events.on('routeChangeComplete', this.handleRouteChange.bind(this))
    }
    handleRouteChange = () => {
        const parsed = queryString.parse(this.props.router.asPath);
        // 判断路由中是否存在需要导航做出变更的内容
        for (let key in this.state.tabList) {
            if (this.state.tabList[key].query && this.state.tabList[key].query.type === Object.values(parsed)[0]) {
                this.setState({
                    activeIndex: Number(key)
                });
                return;
            }
        }
    }
    handelNav(v, index) {
        this.setState({
            activeIndex: index
        });
        // 跳转具体的路由
        Router.push({
            pathname: v.value,
            query: this.state.tabList[index].query
        });
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    render() {
        return <header className="commonHeader">
            {/* 图片和logo */}
            <img className="logo" src="/image/logoTitle.png" alt="" />
            <ul className="tabUl">
                {this.state.tabList.map((t, index) => <li onClick={this.handelNav.bind(this, t, index)} key={index} className={`tabItem ${this.state.activeIndex === index ? 'active' : ''}`}>{t.key}</li>)}
            </ul>
        </header>
    }
}

export default withRouter(header);