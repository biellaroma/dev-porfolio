import React from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Card, Input, Button, Icon } from 'react-materialize';
import UserProfile from '../../components/userProfile';

require('dotenv').config();

export default function Contact() {
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;

    function sendEmail(e) {
        e.preventDefault();

        emailjs.send(
            serviceId,
            templateId,
            e.target,
            userId,
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <Row>
            <Col m={3} s={12}>
                <UserProfile />
            </Col>
            <Col m={8} s={12}>
                <h5>Contact</h5>
                <Card>
                    <Row>
                        <Input email id="TextInput-46" label="E-mail" s={12} placeholder="Digite um e-mail válido" icon={<Icon>email</Icon>}/>
                        <Input placeholder="Digite sua mensagem..." label="Message" s={12} icon={<Icon>message</Icon>}/>
                        <Col s={12} m={12}>
                            <Button waves="light" floating className="right  green accent-4" title="Enviar" node="button" type="submit" onSubmit={sendEmail}>
                                <Icon>send</Icon>
                            </Button>                            
                            <Button waves="light" floating className="right red accent-4" title="Cancelar" type="reset" style={{ marginRight: '5px' }}>
                                <Icon>cancel</Icon>
                            </Button>
                        </Col>                        
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}
