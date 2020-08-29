import "../commonList/index.styl"
import Router, { withRouter } from 'next/router'
const queryString = require('query-string');


class CommonList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nowType: "service",
			service: {
				title: "服务领域",
				tip: "Service area"
			},
			app: {
				title: "业绩及应用",
				tip: "Performance and app"
			},
			news: {
				title: "新闻资讯",
				tip: "News and information"
			},
			navList: {
				index: 0,
				service: ["水处理工程", "大气处理过程", "河湖整治工程", "智慧水利工程", "节能智控工程", "市政环保工程"],
				app: ["水处理工程业绩", "大气处理过程业绩", "河湖整治工程业绩", "智慧水利工程业绩", "节能智控工程业绩", "市政环保工程业绩"],
				news: ["公司新闻动态"]
			}
		}
	}
	componentDidMount(){
		Router.events.on('routeChangeComplete', this.handleRouteChange.bind(this))
	}
	handleRouteChange(){
		const parsed = queryString.parse(this.props.router.asPath);
		this.setState({
			nowType: Object.values(parsed)[0]
		})
	}
	handelLeftNavItem(index){
		this.setState({
			navList: {
				index,
				service: this.state.navList.service
			}
		})
	}
	render() {
		return <div className="listIndex">
			<img className="indexImage" src={this.state.nowType === "service" ? '/image/bannerService.png' : this.state.nowType === "app" ? '/image/bannerApp.png' : '/image/bannerNews.png'}></img>
			<div className="indexBox">
				<div className="indexBg">
					{/* 标语 */}
					<p className="indexTitle" style={{ 'marginTop': '4.38rem' }}>保护环境 · 造福千秋</p>
					{/* 英文口号 */}
					<p className="indexTip">{'Protect the environment and benefit the future'.toLocaleUpperCase()}</p>
				</div>
			</div>
			<div className="listMain">
				<div className="listMainLeft">
					<div className="listMainLeftImage">
						<div className="title">{this.state[this.state.nowType].title}</div>
						<div className="tip">{this.state[this.state.nowType].tip}</div>
					</div>
					<div className="listMainList">
						{ this.state.navList[this.state.nowType].map((i, index) => <div key={index} onClick={this.handelLeftNavItem.bind(this, index)} className={`listMainListItem ${this.state.navList.index === index && 'active'}`}>{i}</div>)}
					</div>
				</div>
				<div className="listMainRight">
					<div className="listMainRightCardItem">
						<img src="/image/banner1.png" />
						<div className="listMainRightCardItemRight">
							<div className="crdItemRightTitle">SNCR改进型脱硝技术是使用计算流体力学</div>
							<div className="crdItemRightContent">SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）进行工程设计，即将先进的虚拟现实设计技术与特…SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）进行工程设计，即将先进的虚拟现实设计技术与特…</div>
						</div>
					</div>
					<div className="listMainRightCardItem">
						<img src="/image/banner1.png" />
						<div className="listMainRightCardItemRight">
							<div className="crdItemRightTitle">SNCR改进型脱硝技术是使用计算流体力学</div>
							<div className="crdItemRightContent">SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）进行工程设计，即将先进的虚拟现实设计技术与特…SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）进行工程设计，即将先进的虚拟现实设计技术与特…</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default withRouter(CommonList);