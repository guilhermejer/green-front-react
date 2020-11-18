import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Formik } from 'formik';
import {Form} from '../../src/components/cadastro/Form';
import api from '../../src/components/api';
import { useRouter } from 'next/router'


//#TODO USAR O FORMIK, YUP E AXIOS - JA INSTALADOS

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

  }));

export default function Cadastro (){
    const router = useRouter()
    let history = useHistory();
    const classes = useStyles();
    const initvalues = {
      nome:'',
      sobrenome:'',
      username:'',
      endereco:'',
      hashId:'',
      password:'',
      confpassword:'',
      sexo:'',
    }
    const submitValues = (values, actions) => {

      var pessoa = {"nome":values.nome,
         "sobrenome":values.sobrenome,
         "endereco":values.endereco,
         "hashId":values.hashId,
         "sexo":values.sexo
        }
      var login = {"username":values.username,
          "password":values.password}

          api.post('pessoa/createPessoa',{pessoa, login})
          .then((res) =>{ alert('Cadastro realizado com sucesso')
          router.push('/')})
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
         });
    }

    return(

        <Container component="main" maxWidth="xs">

<div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <Formik         
        initialValues={initvalues}
        onSubmit={submitValues}>
        {props => <Form {...props}/>}

        </Formik>

      </div>
        </Container>

    );

}