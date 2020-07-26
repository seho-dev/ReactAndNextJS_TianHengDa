// 引入css
import "../components/header.module.styl"
import Router from 'next/router'

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
                value: ""
            }, {
                key: "服务领域",
                value: ""
            }, {
                key: "业绩及应用",
                value: ""
            }, {
                key: "新闻资讯",
                value: ""
            }]
        }
    }
    handelNav(v, index){
        this.setState({
            activeIndex: index
        });
        // 跳转具体的路由
        Router.push(v.value)
    }
    render() {
        return <div className="commonHeader">
            {/* 图片和logo */}
            <img className="logo" src="/image/logoTitle.png" alt=""/>
            <ul className="tabUl">
                {this.state.tabList.map((t, index) => <li onClick={this.handelNav.bind(this, t, index)} key={index} className={`tabItem ${this.state.activeIndex === index ? 'active' : ''}`}>{t.key}</li>)}
            </ul>
        </div>
    }
}

export default header;