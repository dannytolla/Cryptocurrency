import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Spin } from "antd";
import HTMLReactParser from "html-react-parser";
import { useGetExchangesQuery } from "../../services/Cryptoapi";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Spin />;
  return (
    <>
      <Title level={2}>Exchange</Title>
      <Row>
        <Col span={6}>
          <Title level={5}>Exchanges</Title>
        </Col>
        <Col span={6}>
          <Title level={5}>24h Trade Volume</Title>
        </Col>{" "}
        <Col span={6}>
          <Title level={5}>Markets</Title>
        </Col>{" "}
        <Col span={6}>
          <Title level={5}>
            <Col span={6}>Change</Col>
          </Title>
        </Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24} key={exchange.id}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
