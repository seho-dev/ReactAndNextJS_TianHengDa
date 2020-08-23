// 引入公共头部
import Header from "../components/header"
import Footer from "../components/footer"
import Head from 'next/head'


export default ({children}) => (
    <div className="container">
        <Head>
            <title>天津天恒达环保有限公司</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
)