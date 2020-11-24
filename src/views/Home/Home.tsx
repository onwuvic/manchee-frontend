import React from 'react';
import { Row, Col, Tabs } from 'antd';
import './Home.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';

const { TabPane } = Tabs;

const Home = () => {

    return (
        <main className="main">
            <section className="section-container">
                <Row className="container-height">
                    <Col xs={{ span: 24 }} md={{ span: 12 }} className="center-content">
                        <h1 className="primary-heading">The Most Complete Social Network is Here!</h1>
                        <p className="secondary-heading"> 
                            We are the best and biggest social network with 5 billion active users all around the world. 
                            Share your thoughts, write blog posts, show your favourite music, earn badges and much more!
                        </p>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 10, offset: 2 }}>
                        <Tabs type="card">
                            <TabPane tab="Login to your Account" key="1">
                                <LoginForm />
                            </TabPane>
                            <TabPane tab="Create a new Account" key="2">
                                <SignupForm />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </section>
        </main>
    )
}


export default Home;