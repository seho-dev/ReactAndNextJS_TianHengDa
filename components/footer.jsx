
// 引入css
import "../components/footer.module.styl"

class footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <footer className="footer">
            <div className="footerMain footerLeft">
                <img className="logo" src="/image/footerLogo.png" alt=""/>
                <div className="leftItem">
                    <img style={{width: '0.22rem',height:'0.3rem'}} src="/image/footerLocal.png" alt=""/>
                    <span>滨海-中关村科技园</span>
                </div>
                <div className="leftItem">
                    <img style={{width: '0.24rem',height:'0.3rem'}} src="/image/footerPhone.png" alt=""/>
                    <span>022-662583</span>
                </div>
                <div className="leftItem">
                    <img style={{width: '0.26rem',height:'0.2rem'}} src="/image/footerEmail.png" alt=""/>
                    <span>thd1619@163.com</span>
                </div>
                <div className="leftItem">
                    <img style={{width: '0.26rem',height:'0.26rem'}} src="/image/footerTip.png" alt=""/>
                    <span>www.chinathd.cn</span>
                </div>
            </div>
            <div className="footerMain footerMiddle">
                <div className="footerMidlleTitle">专注于各类水处理工程、大气治理工程、河湖整治工程、智慧水利工程、节能智控工程、市政环保运营及配套材料领域的研发、制造、销售和技术服务。</div>
                {/* email搜索框 */}
                <div className="searchLabel">Newsletter</div>
                <div className="searchInput">
                    <input type="text"/>
                    <img src="/image/footerRight.png" alt=""/>
                </div>
            </div>
        </footer>
    }
}

export default footer;