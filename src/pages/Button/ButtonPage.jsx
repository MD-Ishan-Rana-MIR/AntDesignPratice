import React from "react";
import { Button, Flex, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ButtonPage = () => {
  return (
    <div>
      <Flex wrap gap={"small"}>
        <Button>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>

      <div className="my-10">
        <Flex gap="small" vertical>
          <Flex wrap gap="small">
            <Tooltip title="search">
              <Button type="primary" prefix={<SearchOutlined />}  />
            </Tooltip>
            <Button type="primary" shape="circle">
              A
            </Button>
            <Tooltip>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
            </Tooltip>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
          </Flex>
          <Flex wrap gap="small">
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
              Search
            </Button>
            <Button
              icon={<SearchOutlined />}
              href="https://www.google.com"
              target="_blank"
            />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default ButtonPage;
