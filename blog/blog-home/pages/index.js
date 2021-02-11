import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col } from 'antd'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>白鸟亦悲否？</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>

        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <Advert/>
        </Col>
      </Row>

      <Footer/>
    </>
  )
}

export default Home
