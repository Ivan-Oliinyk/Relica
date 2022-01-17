import React from "react";
import { baseTheme } from "../../styles/theme";
import Card from "../../components/card/Card";
import CardHeader from "../../components/card/CardHeader";
import CardContent from "../../components/card/CardContent";
import Title from "./Title";
import BtnBack from "../../components/buttons/BtnBack";
import Button from "../../components/buttons/Button";
import Form from "../../components/form/Form";
import { LayoutContainer } from "./Welcome";
import { BtnPhoto } from "../../components/buttons/BtnPhoto";
import InputText from "../../components/form/InputText";

const UserName: React.FC = () => {
  return (
    <LayoutContainer>
      <Card width="70%" maxWidth="40rem" margin="0 auto" direction="column">
        <CardHeader>
          <BtnBack linkTo="/Select-wallet"></BtnBack>
        </CardHeader>
        <CardContent direction="column">
          <Title>User name</Title>
          <Form>
            <BtnPhoto
              bgimage="/images/userName/userName.svg"
              img="/images/userName/photo-camera.svg"
              title="Profile photo"
              subtitle="Upload your profile photo here"
            />
            <InputText value="User name" name="name" />
            <Button
              border="1px solid #939393"
              borderRadius="3rem"
              minHeight="5.6rem"
              justify="center"
              align="center"
              weight={baseTheme.weight.bolt}
              linkTo="/Login-with-wallet"
            >
              Create username
            </Button>
          </Form>
        </CardContent>
      </Card>
    </LayoutContainer>
  );
};

export default UserName;
