import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Card, Input, Button, Icon } from 'react-materialize';
import UserProfile from '../../components/userProfile';

export default function Contact() {

    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const userId = import.meta.env.VITE_REACT_APP_USER_ID;    

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            userId,
        ).then((result) => {
            console.log(result.text);
            alert("E-mail enviado com sucesso. Mensagem: " + result.text);
        }, (error) => {
            console.log(error.text);
            alert(error.text);
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
                        <form onSubmit={sendEmail} ref={form}>
                            <Input type="text" id="from_name" label="Nome" s={12} placeholder="Digite o nome completo" icon={<Icon>person</Icon>} />
                            <Input type="email" id="user_email" label="E-mail" s={12} placeholder="Digite um e-mail válido" icon={<Icon>email</Icon>} />
                            <Input type="text" id="phone" label="Telefone" s={12} placeholder="(xx) xxxxx-xxxx" icon={<Icon>phone</Icon>} />
                            <Input type="text" id="subject" label="Assunto" s={12} placeholder="Assunto" icon={<Icon>archive</Icon>} />
                            <Input type="text" id="message" placeholder="Digite sua mensagem..." label="Message" s={12} icon={<Icon>message</Icon>} />
                            <Col s={12} m={12}>
                            <Button waves="light" floating className="right  green accent-4" title="Enviar" node="button" type="submit">
                                <Icon>send</Icon>
                            </Button>                            
                            <Button waves="light" floating className="right red accent-4" title="Cancelar" type="reset" style={{ marginRight: '5px' }}>
                                <Icon>cancel</Icon>
                            </Button>
                        </Col>    
                        </form>           
                    </Row>
                </Card>
            </Col>
        </Row>
    );
}
