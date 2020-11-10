import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from "@material-ui/core/styles";


export const Form = (props) => {


    const useStyles = makeStyles((theme) => ({
        form: {
          width: "100%", // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
    
      }));
      const classes = useStyles();

      const {
          values: {nome, sobrenome, username, endereco, hashId, password, confpassword, sexo },
          handleSubmit,
          handleChange,
      } = props;


      return(
    <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            autoComplete="name"
            value={nome}
            onChange={handleChange}

          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="sobrenome"
            label="Sobrenome"
            id="sobrenome"
            autoComplete="surname"
            value={sobrenome}
            onChange={handleChange}

          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="Nome de usuário"
            id="username"
            autoComplete="username"
            value={username}
            onChange={handleChange}

          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="endereco"
            label="Endereço"
            id="endereco"
            autoComplete="endereco"
            value={endereco}
            onChange={handleChange}

          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="hashId"
            label="CPF/CNPJ"
            id="hashId"
            autoComplete="hashId"
            value={hashId}
            onChange={handleChange}


          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="password"
            value={password}
            onChange={handleChange}


          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confpassword"
            label="Confirme sua senha"
            type="password"
            id="confpassword"
            autoComplete="password"
            value={confpassword}
            onChange={handleChange}

          />

          <InputLabel id="select-label-sexo">Sexo</InputLabel>
          <Select
            variant="outlined"
            fullWidth
            labelId="select-label-sexo"
            name="sexo"
            value={sexo}
            onChange={handleChange}
          >
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"Feminino"}>Feminino</MenuItem>
            <MenuItem value={"Indefinido"}>Indefinido</MenuItem>
          </Select>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Cadastrar
      </Button>

    </form>
      );
};