import "../introduce/index.styl"


export default class InTroduce extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			historyIndex: 0,
			historyItems: [{
				time: "2015.10",
				value: "2015年10月研发团队组建"
			}, {
				time: "2016.09",
				value: "2016年9月公司成立"
			}, {
				time: "2017.08",
				value: "2017年8月公司成立环保研发基地成立，路南区1200平方米大气治理药剂开始投产。"
			}, {
				time: "2018.05",
				value: "2018年5月与中国环保能源发展中心、天津科技大学合作成立研发中心；山东德州高标准农田灌溉生产及示范基地成立。"
			}, {
				time: "2020.05",
				value: "2020年5月汉沽化工街制造车间启用。"
			}]
		}
	}
	// 点击力视过程中的某一个
	handelHistoryItem(i, index) {
		this.setState({
			historyIndex: index
		})
	}
	render() {
		return <div>
			<img className="indexImage" src="/image/introduce.jpg"></img>
			<div className="introduceBox">
				<div className="indexBg">
					{/* 标语 */}
					<p className="indexTitle" style={{ 'marginTop': '4.38rem' }}>保护环境 · 造福千秋</p>
					{/* 英文口号 */}
					<p className="indexTip">{'Protect the environment and benefit the future'.toLocaleUpperCase()}</p>
				</div>
			</div>
			{/* 关于我们 */}
			<div className="aboutUs">
				{/* 标题 */}
				<div className="commonTitle">
					<div className="commonTitleLabel">公司简介</div>
					{/* 底部的线 */}
					<img src="/image/indexTitleRow.png" alt="" />
					{/* 提示 */}
					<div className="commonTitleTip">About us</div>
				</div>
				{/* 公司介绍 */}
				<div className="companyInfo">
					<div className="compantInfoTitle">天津天恒达环保工程有限公司</div>
					<div className="companyInfoContent">
						天津天恒达环保工程有限公司坐落于天津滨海-北塘中关村科技园，注册资本人民币1000万元。在滨海汉沽化工区、山东平原龙门开发区有2000平方米的高标准装备制造车间和数千平方米的智慧灌溉水利示范基地。
	公司拥有数十位行业技术精英，与天津大学、天津科技大学及天津农科院等国内外多家院校及研发机构建立了紧密合作关系，专业致力于各类水处理工程、大气治理工程、河湖整治工程、智慧水利工程、节能智控工程、市政环保运营及配套材料领域的研发、制造、销售和技术服务。公司消化吸收国内外先进技术，结合丰富的实践经验，精心研究出多项技术成果，如景观模式污水处理系统、地埋式污水处理系统、高浓度化学水处理装置、自净式河湖治理技术、SNCR改进型烟气脱硝﹑干法脱硫-低温无氨催化脱硝一体化技术﹑烟囱/烟道/综合处理塔协同净化技术﹑直喷除湿烟气脱白技术﹑一体化智慧泵站等前沿技术，解决了水、热、气治理领域多个难题。公司拥有17项专利，通过了ISO9001、14001及OHSAS18001体系认证，并取得环保工程专业承包等资质。
	作为环保领域的实力制造服务商，提供设计精良、稳定质优、智慧节能及高性价比的产品是公司不懈的追求。多年来公司积累了丰富的项目工程设计和总承包施工经验，并赢得众多业主广泛赞誉，有条件也有信心为业主提供优质的工程服务！
					</div>
				</div>
				<img className="aboutBg" src="/image/developmentBg1.png" alt="" />
			</div>
			{/* 发展历程 */}
			<div className="developmentHistory">
				<div className="developmentHistoryMain">
					<div className="commonRightTitle">
						<div className="commonRightTitleLabel">公司历程</div>
						{/* 底部的线 */}
						<img src="/image/indexTitleRow.png" alt="" />
						{/* 提示 */}
						<div className="commonRightTitleTip">Development Path</div>
					</div>
					{/* 底部border */}
					<div className="developmentHistoryBorder">
						{/* 左侧left */}
						<img className="row rowLeft" src="/image/developmentRow.png"></img>
						{/* 中间顶部虚线 */}
						<div className="borderMain">
							<div className="historyMain">
								{this.state.historyItems.map((h, index) =>
									<div key={index} onClick={this.handelHistoryItem.bind(this, h, index)} className={`historyItem ${this.state.historyIndex === index ? 'active' : ''}`}>
										<div className={`historyItemAvatar ${this.state.historyIndex === index ? 'active' : ''}`}>
											<img className={this.state.historyIndex === index ? 'active' : ''} src="/image/indexNews.png"></img>
										</div>
										<div className="historyItemTime">{h.time}</div>

										{/* 介绍 */}
										{this.state.historyIndex === index &&
											<div className="historyItemIntroduce">
												{h.value}
											</div>
										}
									</div>)}
							</div>
						</div>
						{/* 右侧right */}
						<img className="row rowRight" src="/image/developmentRow.png"></img>
					</div>
				</div>

			</div>
			<div className="qualifications">
				<div className="qualificationsLeft">
					<div className="commonTitle">
						<div className="commonTitleLabel">资质荣誉</div>
						{/* 底部的线 */}
						<img src="/image/indexTitleRow.png" alt="" />
						{/* 提示 */}
						<div className="commonTitleTip">Development Path</div>
					</div>
					<div className="qualificationsContent">
						公司先后取得了三体系认证及施工总承包资质<br />
						一种高效环保型烧结机烟气除尘装置	ZL 2018 2 1617762.6<br />
					</div>
				</div>
				<div className="qualificationsRight">
				</div>
			</div>
			<div className="coreTeam">
				<div className="coreTeamMain">
					<div className="commonRightTitle">
						<div className="commonRightTitleLabel">核心团队</div>
						{/* 底部的线 */}
						<img src="/image/indexTitleRow.png" alt="" />
						{/* 提示 */}
						<div className="commonRightTitleTip">Core Team</div>
					</div>
					<div className="rankInfo">
						<div className="rankInfoItem">
							<img className="avatar" src="/image/avatar1.jpg"></img>
							<div className="name">罗坚</div>
							<div className="detail">1999年美国康涅狄格大学化学系获博士学位，并在加州大学伯克利分校（伯克利国家实验室材料部）作博士后。</div>
						</div>
						<div className="rankInfoItem">
							<img className="avatar" src="/image/avatar2.jpg"></img>
							<div className="name">沈渭清</div>
							<div className="detail">高级工程师，多项专利发明人及专利权人</div>
						</div>
						<div className="rankInfoItem">
							<img className="avatar" src="/image/avatar3.jpg"></img>
							<div className="name">张鹏</div>
							<div className="detail">高级工程师/意大利热那亚大学产品设计及活动策划硕士</div>
						</div>
					</div>
				</div>
			</div>
			<div className="technology">
				<div className="commonTitle">
					<div className="commonTitleLabel">技术专利</div>
					{/* 底部的线 */}
					<img src="/image/indexTitleRow.png" alt="" />
					{/* 提示 */}
					<div className="commonTitleTip">Technical patent</div>
				</div>
				<div className="cardInfo">
					<div className="cardItem">
						<img src="/image/banner1.png" />
						<div className="cardItemMain">
							<div className="cardItemMainTitle">SNCR改进型高效脱硝技术</div>
							<div className="cardItemMainContent">SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）…</div>
						</div>
					</div>
					<div className="cardItem">
						<img src="/image/banner1.png" />
						<div className="cardItemMain">
							<div className="cardItemMainTitle">SNCR改进型高</div>
							<div className="cardItemMainContent">SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）…</div>
						</div>
					</div>
					<div className="cardItem">
						<img src="/image/banner1.png" />
						<div className="cardItemMain">
							<div className="cardItemMainTitle">SNCR改进型高效脱硝技术</div>
							<div className="cardItemMainContent">SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）…</div>
						</div>
					</div>
					<div className="cardItem">
						<img src="/image/banner1.png" />
						<div className="cardItemMain">
							<div className="cardItemMainTitle">SNCR改进型</div>
							<div className="cardItemMainContent">SNCR改进型脱硝技术是使用计算流体力学（CFD）和化学动力学模型学、动力学模型（CK）…</div>
						</div>
					</div>

				</div>
				<div className="technologyBottom">
					<img src="/image/right.png" />
					<img src="/image/right.png" />
				</div>
			</div>
			<div className="culture">
				<div className="cultureMain">
					<div className="commonRightTitle">
						<div className="commonRightTitleLabel">企业文化</div>
						{/* 底部的线 */}
						<img src="/image/indexTitleRow.png" alt="" />
						{/* 提示 */}
						<div className="commonRightTitleTip">Corporate Culture</div>
					</div>
					<div className="cardInfo">
						<div className="cardItem">
							<img src="/image/banner3.png" />
							<div className="cardContent">
								<div className="title">企业宗旨</div>
								<div className="content">
									圆人类碧水蓝天的家园梦想圆人类碧水蓝天的家园梦想圆人类碧水蓝天的家园梦想圆人类碧水蓝天的家园梦想圆人类碧水蓝天的家园梦想圆人类碧水蓝天的家园梦想圆人类碧水蓝天的家园梦想圆人类碧水蓝天的家园梦想
								</div>
							</div>
						</div>
						<div className="cardItem">
							<img src="/image/banner3.png" />
							<div className="cardContent">
								<div className="title">经营理念</div>
								<div className="content">
									以团队协作为根本 以技术创新为动力 以环境友好为责任 以客户价值为中心以团队协作为根本 以技术创新为动力 以环境友好为责任 以客户价值为中心
								</div>
							</div>
						</div>
						<div className="cardItem">
							<img src="/image/banner3.png" />
							<div className="cardContent">
								<div className="title">质量方针</div>
								<div className="content">
									顾客满意是我们永恒的追求顾客满意是我们永恒的追求顾客满意是我们永恒的追求顾客满意是我们永恒的追求顾客满意是我们永恒的追求
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}