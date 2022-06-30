import React, { useState } from "react";

import { Form, Input, Typography, Radio, Button, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import "./Register.css";
const { Title } = Typography;
const { Item } = Form;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const buttonLayout = {
  wrapperCol: {
    span: 14,
    offset: 6,
  },
};
const uploadConfigs = {
  name: "file",
  multiple: false,
  showUploadList: {
    showDownloadIcon: false,
  },
};
function Register() {
  const [profile, setProfile] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const onChange = ({ file }) => {
    console.log("newFileList", file);

    // setFileList([newFileList[newFileList.length - 1]]);
  };

  //   const onPreview = async (file) => {
  //     console.log("onPreview");
  //     let src = file.url;

  //     if (!src) {
  //       src = await new Promise((resolve) => {
  //         const reader = new FileReader();
  //         reader.readAsDataURL(file.originFileObj);

  //         reader.onload = () => resolve(reader.result);
  //       });
  //     }
  //   };
  return (
    <div className="container">
      <div className="inner">
        <div className="title">
          <Title level={3}>Register</Title>
        </div>
        <br />
        <br />
        <div className="form">
          <Form {...layout}>
            <Item label="Profile">
              <ImgCrop rotate>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  showUploadList={false}
                  onChange={onChange}
                  //   onPreview={onPreview}
                >
                  upload
                </Upload>
              </ImgCrop>
            </Item>
            <Item label="Name">
              <Input />
            </Item>
            <Item label="Email">
              <Input />
            </Item>
            <Item label="Password">
              <Input />
            </Item>
            <Item label="Role">
              <Radio.Group onChange={(e) => setRole(e.target.value)} value={role}>
                <Radio value={"client"}>client</Radio>
                <Radio value={"owner"}>owner</Radio>
              </Radio.Group>
            </Item>
            <br />
            <Item {...buttonLayout}>
              <Button type="primary">Confirm</Button>
            </Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
