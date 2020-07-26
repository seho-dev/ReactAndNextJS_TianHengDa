import Layout from "../../components/layout"
import "../index/index.styl"

export default function Home() {
  return (
    <Layout>
      <img className="indexImage" src="/image/index_bg.png"></img>
      <div className="indexBox">
        <div className="indexBg">
          {/* 搜索 */}
          <div className="indexSearch">
            <img className="icon" src="image/index_search.png"/>
            <input type="text" placeholder="水洒到哪里都能卡"/>
          </div>
          {/* 标语 */}
          <p className="indexTitle">保护环境 · 造福千秋</p>
          {/* 英文口号 */}
          <p className="indexTip">{'Protect the environment and benefit the future'.toLocaleUpperCase()}</p>
        </div>
      </div>
    </Layout>
  )
}
