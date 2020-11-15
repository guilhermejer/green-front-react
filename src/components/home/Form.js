import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
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
          values: {titulo, slug, descricao, preco, tags, image },
          handleSubmit,
          handleChange,
      } = props;


      return(
    <form className={classes.form} onSubmit={handleSubmit}>
    <TextField
            
            margin="normal"
            required
            fullWidth
            id="titulo"
            label="Titulo"
            name="titulo"
            autoComplete="titulo"
            value={titulo}
            onChange={handleChange}

          />

          <TextField
            
            margin="normal"
            required
            fullWidth
            name="slug"
            label="Descrição curta"
            id="slug"
            autoComplete="slug"
            value={slug}
            onChange={handleChange}

          />

          <TextField
            
            margin="normal"
            required
            fullWidth
            name="descricao"
            label="Descrição"
            id="descricao"
            autoComplete="descricao"
            value={descricao}
            onChange={handleChange}

          />

          <TextField
            
            margin="normal"
            required
            fullWidth
            name="preco"
            label="Preço"
            id="preco"
            type="number"
            autoComplete="preco"
            value={preco}
            onChange={handleChange}
            InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}

          />


          <InputLabel id="select-label-tags">Categoria</InputLabel>
          <Select
            
            fullWidth
            labelId="select-label-tags"
            name="tags"
            value={tags}
            onChange={handleChange}
          >
            <MenuItem value={"Tecnologia"}>Tecnologia</MenuItem>
            <MenuItem value={"Esporte e Lazer"}>Esporte e Lazer</MenuItem>
            <MenuItem value={"Supermercado"}>Supermercado</MenuItem>
          </Select>

          <TextField
            
            margin="normal"
            required
            fullWidth
            name="image"
            label="Imagem"
            id="image"
            value={image}
            onChange={handleChange}


          />


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

