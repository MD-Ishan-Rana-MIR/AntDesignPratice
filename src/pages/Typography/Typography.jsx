import React from "react";
import { Space, Typography as type } from "antd";

const Typography = () => {
  const { Title, Paragraph, Text, Link } = type;
  return (
    <div className="mb-10" >
      {/* <Title level={1}>Title 1</Title>
        <Title level={2}>Title 2</Title>
        <Title level={3}>Title 3</Title>
        <Title level={4}>Title 4</Title>
        <Title level={5}>Title 5</Title>
        <Title level={6}>Title 6</Title> */}
      <Title level={1}>Title 1</Title>
      <Title level={2}>Title 2</Title>
      <Title level={3}>Title 3</Title>
      <Title level={4}>Title 4 </Title>
      <Title level={5}>Title 5</Title>
      <Title level={6}>Title 6</Title>

      <div>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>
      </div>
      <div>
        <Paragraph>
          After massive project practice and summaries, Ant Design, a design
          <Text strong>
            language for background applications, is refined by Ant UED Team,
          </Text>
          which aims to{" "}
          <Text strong>
            uniform the user interface specs for internal background projects,
            lower the unnecessary cost of design differences and implementation
            and liberate the resources of design and front-end development
          </Text>
          .
        </Paragraph>
        <Text className="strongTag" strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex!
        </Text>
      </div>
      <div>
        <Space direction="vertical" >
          <Text>Ant Design (default)</Text>
          <Text className="secondaryTag" type="">Ant Design (secondary)</Text>
          <Text type="success">Ant Design (success)</Text>
          <Text type="warning">Ant Design (warning)</Text>
          <Text type="danger">Ant Design (danger)</Text>
          <Text disabled>Ant Design (disabled)</Text>
          <Text mark>Ant Design (mark)</Text>
          <Text code>Ant Design (code)</Text>
          <Text keyboard>Ant Design (keyboard)</Text>
          <Text underline>Ant Design (underline)</Text>
          <Text delete>Ant Design (delete)</Text>
          <Text strong>Ant Design (strong)</Text>
          <Text italic>Ant Design (italic)</Text>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
          <Text mark>Ant Design (mark)</Text>
        </Space>
      </div>
      <div>
        
        <Text mark>Ant Design (delete)</Text>

      </div>
    </div>
  );
};

export default Typography;
