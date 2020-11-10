import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";



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
          values: {username, password },
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
          id="username"
          label="Nome de usuário"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
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
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Logar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueci minha senha
            </Link>
          </Grid>
          <Grid item>
            <Link href="/cadastro" variant="body2" >
              {"Não tem uma conta? Cadastre-se"}
            </Link>
          </Grid>
        </Grid>
      </form>
      );
};