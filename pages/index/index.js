import "../index/index.styl"

export default function Home() {
  return (
	<div className="index">
      <img className="indexImage" src="/image/index_bg.png"></img>
      <div className="indexBox">
        <div className="indexBg">
          {/* 搜索 */}
          <div className="indexSearch">
            <img className="icon" src="image/index_search.png"/>
            <input type="text" placeholder="水洒到哪里都能卡"/>
          </div>
          {/* 标语 */}
          <p className="indexSearchTitle">保护环境 · 造福千秋</p>
          {/* 英文口号 */}
          <p className="indexTip">{'Protect the environment and benefit the future'.toLocaleUpperCase()}</p>
        </div>
        {/* 首页小banner */}
        <div className="banner">
        <div className="bannerMain">
          <div className="bannerTitle">精诚合作</div>
              <div className="bannerContent">作为环保领域的实力制造服务商，以雄厚的资金和技术力量为依托，以先进的检测手段和完善的生产设施为保证，为客户提供设计精良，稳定优质，智慧节能及高性价比的产品是公司不懈的追求，公司诚邀天下有识之主加盟，投身环保事业，合作共赢，共谋未来</div>
              <div className="bannerMore">了解更多
                <img src="/image/right.png"></img>
              </div>
          </div>  
        </div>
        <div className="bannerList">
          <div className="bannerItem" style={{background: "url('/image/indexBg2.png') no-repeat center center / 120% 120%"}}>
          <div className="bannerTitle">研发艰巨</div>
            <div className="bannerContent">2016年末与天津科技大学合作成立研发中心；2017年在河北唐山路南区设立环保材料厂；2018年在山东平原县联合恒信水务与中国农业科学院建立节水创新实验基地；2019年在汉沽化工区设立2000平方米的高标准装备制造基地。</div>
            <div className="bannerMore">了解更多
              <img src="/image/right.png"></img>
            </div>
          </div>
          <div className="bannerItem" style={{background: "url('/image/indexBg3.png') no-repeat center center / 120% 120%"}}>
          <div className="bannerTitle">先进技术</div>
            <div className="bannerContent">公司的前沿环保技术：景观模式污水处理系统、高浓度化学水处理装置、自净式河湖治理技术、SNCR改进型烟气脱硝﹑干法脱硫-低温无氨催化脱硝一体化技术﹑烟囱/烟道/综合处理塔协同净化技术﹑直喷除湿烟气脱白技术﹑一体化智慧泵站、智慧节能平台等；拥有17项环保专利授权。</div>
            <div className="bannerMore">了解更多
              <img src="/image/right.png"></img>
            </div>
          </div>
        </div>
        <div className="Innovation">
          <div className="title">
          <div className="titleTop">
          <img src="/image/indexTitleRow.png"></img>
              <div>创新天恒达</div>
              <img src="/image/indexTitleRow.png"></img>
            </div>
             <div className="En">Innovation Tianhengda</div>
            </div>
          <div className="InnovationCard">
            <div className="InnovationCardItem">
              <img src="/image/banner1.png"></img>
              <div className="name">企业宗旨</div>
              <div className="tip">圆人类碧水蓝天的家园梦想</div>
            </div>
            <div className="InnovationCardItem">
              <img src="/image/banner2.png"></img>
              <div className="name">经营理念</div>
              <div className="tip">以团队协作为根本 以技术创新为动力 以环境友好为责任 以客户价值为中心</div>
            </div>
            <div className="InnovationCardItem">
              <img src="/image/banner3.png"></img>
              <div className="name">质量方针</div>
              <div className="tip">顾客满意是我们永恒的追求</div>
            </div>
          </div>
          <img className="bottom" src="/image/indexBottom.png"></img>
          <div className="more">了解更多</div>
        </div>
        <div className="ServiceArea">
        <div className="title">
          <div className="titleTop">
            <img src="/image/indexTitleRow.png"></img>
                <div>服务领域</div>
                <img src="/image/indexTitleRow.png"></img>
              </div>
              <div className="En">Service area</div>
          </div>
          <div className="serviceMain">
            <div className="serviceItem">
              <img style={{width: '1.46rem', height: '1.48rem'}} src="/image/service1.png"></img>
              <div className="serviceItemTitle">水处理工程</div>
              <div className="serviceItemTip">净水处理 / 各类废水处理 / 业用水处</div>
            </div>
            <div className="serviceItem">
              <img style={{width: '1.32rem', height: '1.4rem'}} src="/image/service2.png"></img>
              <div className="serviceItemTitle">大气处理工程</div>
              <div className="serviceItemTip">燃煤及燃气锅炉的脱硫、脱硝、除尘及脱白 各类型的VOC治理及除臭工程。</div>
            </div>
            <div className="serviceItem">
              <img style={{width: '1.46rem', height: '1.32rem'}} src="/image/service3.png"></img>
              <div className="serviceItemTitle">河湖整理工程</div>
              <div className="serviceItemTip">控导工程 / 护滩工程 / 险工处理 / 净化工程 / 面源治理及绿化工程。</div>
            </div>
          </div>
          <div className="serviceMain" style={{marginTop: '.2rem'}}>
            <div className="serviceItem">
              <img style={{width: '1.46rem', height: '1.48rem'}} src="/image/service1.png"></img>
              <div className="serviceItemTitle">智慧水利工程</div>
              <div className="serviceItemTip">江河流域水利工程 / 高标准农田建设工程 / 智慧灌溉工程</div>
            </div>
            <div className="serviceItem">
              <img style={{width: '1.32rem', height: '1.4rem'}} src="/image/service2.png"></img>
              <div className="serviceItemTitle">节能智控工程</div>
              <div className="serviceItemTip">废水、热、气、渣综合资源化利用工程 / 节能系统工程 / 智慧监控平台。</div>
            </div>
            <div className="serviceItem">
              <img style={{width: '1.46rem', height: '1.32rem'}} src="/image/service3.png"></img>
              <div className="serviceItemTitle">市政环保运营</div>
              <div className="serviceItemTip">供热站、热电厂、污水处理厂、垃圾处理从及城市环卫工程的托管运营</div>
            </div>
          </div>
        </div>
        <div className="OurProject">
          <div className="OurProjectMain">
            <div className="project">
                <div className="title" style={{backgroundColor: '#fff', paddingTop: '1.38rem', margin: '0'}}>
                  <div className="titleTop">
                  <img src="/image/indexTitleRow.png"></img>
                      <div>服务领域</div>
                      <img src="/image/indexTitleRow.png"></img>
                </div>
                <div className="En">Service area</div>
                <img className="projectFirstImage" src="/image/banner4.png"></img>
              </div>
              </div>
              <div className="project">
                <img className="projectSecondImage" src="/image/banner1.png"></img>
                <div className="projectContent">
                  <div className="content">
                  公司专注于各类水处理工程、大气治理工程、河湖整治工程、智慧水利工程、节能智控工程、市政环保运营及配套材料领域的研发、制造、销售和技术服务。
                  </div>
                </div>
              </div>
              <div className="project">
                <img className="projectForthImage" src="/image/banner2.png"></img>
                <img className="projectThirdImage" src="/image/banner3.png"></img>
                <div className="more">
                  了解更多 <img src="/image/right.png"></img>
                </div>
              </div>
            </div>
        </div>
        <div className="CoreTeam">
          <div className="title">
          <div className="titleTop">
          <img src="/image/indexTitleRow.png"></img>
              <div>核心团队</div>
              <img src="/image/indexTitleRow.png"></img>
            </div>
             <div className="En">Core team</div>
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
          <img className="bottom" src="/image/indexBottom.png"></img>
          <div className="more">了解更多</div>
        </div>
        <div className="newsMain">
        <div className="title">
          <div className="titleTop">
          <img src="/image/indexTitleRow.png"></img>
              <div>新闻资讯</div>
              <img src="/image/indexTitleRow.png"></img>
            </div>
             <div className="En">News and information</div>
            </div>
           
            <div className="swiperMain">
              <img src="/image/indexNews.png"></img>
              <div className="swiperContent">
                <div className="title">2016年9月18日公司成立</div>
                <div className="time">2016-9-18</div>
                <div className="content">2017年3月26日，公司与天津光华绿色生态设计研究院有限公司签署战略合作协议，就公司后期的项目设计工作达成一致意见，全权委托乙方进行设计及技术跟踪服务。</div>
              </div>
            </div>
          <img className="bottom" src="/image/indexBottom.png"></img>
          <div className="more">了解更多</div>
        </div>
      </div>
	  </div>
  )
}
