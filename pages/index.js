import React from "react";
import Logo from "../src/assets/img/logoGreen.png";
import Typography from "@material-ui/core/Typography";
import Image from 'next/image'
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from 'formik';
import { Form } from '../src/components/login/Form';
import api from '../src/components/api';
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
}));

export default function Login() {
  const router = useRouter()
  const classes = useStyles()

  const initvalues = {
    username:'',
    password:'',
  }

  const submitValues = (values, actions) => {
    console.log(values);

    api.post('login/logar', values)
    .then((res) => console.log('Login realizado com sucesso' + res.data),
    router.push('/home'))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });
  }
  return (

    <Container component="main" maxWidth="xs" >
      <div className={classes.paper}>
        <Image alt="Green Logo" src={Logo} width="150" height="150" />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Formik
        initialValues={initvalues}
        onSubmit={submitValues} >
        {props => <Form {...props}/>}

        </Formik>
      
      </div>

    </Container>

  );
}
