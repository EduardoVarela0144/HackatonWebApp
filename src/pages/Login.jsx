import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import CustomCarousel from "@components/General/CustomCarousel";
import AnimationLayout from "@components/General/AnimationLayout";
import { useLogin } from "@hooks/Users/useLogin";
import Logo from "@assets/images/Logo.png";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const { login } = useLogin();

  const onFinish = (values) => {
    login(values);
  };

  return (
    // <AnimationLayout>
    <div className="flex h-screen ">
      <Row className="w-full h-full">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
          className="flex items-center justify-center p-4 md:p-16"
        >
          <Form
            name="login-form"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{ remember: true }}
            style={{ width: "100%", margin: "0 auto" }}
          >
            <div className="flex items-center justify-center">
              <img src={Logo} className="mb-16 h-28"></img>
            </div>
            <Form.Item
              label="Correo electrónico"
              className="text-lg font-bold"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu correo electrónico.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              className="text-lg font-bold"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu contraseña.",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full my-4 h-auto rounded-full bg-orange-500"
              >
                <p className="text-center py-2 align-middle justify-center text-lg font-bold">Iniciar sesión</p>
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <CustomCarousel />
        </Col>
      </Row>
    </div>
    // </AnimationLayout>
  );
}
