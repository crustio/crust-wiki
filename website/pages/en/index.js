/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const Container = require("react-bootstrap/Container");
const Row = require("react-bootstrap/Row");
const Col = require("react-bootstrap/Col");

class HomeNav extends React.Component {
    render() {
        // const {siteConfig, language = ''} = this.props;

        const NavContainer = (props) => (
            <section className="homeNavContainer">
                <Container className="h-100">
                    <Row className="h-100 d-flex align-items-center">{props.children}</Row>
                </Container>
            </section>
        );

        const NavItem = (props) => (
            <Col xs={12} md={12} lg={4} className="homeNavItem rounded-lg">
                <a
                    href={props.href}
                    className="h-100 d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay={props.aosDelay}
                >
                    <div className="mx-auto">
                        <h2 className="display-4 mt-0 text-dark font-weight-bold text-center">{props.title}</h2>
                        <p className="small text-secondary px-4">{props.content}</p>
                    </div>
                </a>
            </Col>
        );

        return (
            <NavContainer>
                <NavItem
                    href={this.props.docUrl("crustOverview.html")}
                    title="General"
                    content="Crust provides a decentralized storage network of Web3 ecosystem."
                    aosDelay="0"
                />
                <NavItem
                    href={this.props.docUrl("evmBuild101.html")}
                    title="EVM"
                    content="Now, Crust network is well adapted to EVM."
                    aosDelay="300"
                />
                <NavItem
                    href={this.props.docUrl("nodeOverview.html")}
                    title="Node"
                    content="Information and guides on how to deploy a node and run the network."
                    aosDelay="600"
                />
            </NavContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = "" } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
        const langPart = `${language ? `${language}/` : ""}`;
        const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

        return (
            <div className="homeContainer">
                <HomeNav siteConfig={siteConfig} docUrl={docUrl} />
            </div>
        );
    }
}

module.exports = Index;
