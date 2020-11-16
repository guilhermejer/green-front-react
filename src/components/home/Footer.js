import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
      root: {
        flexGrow: 1,
      },
      control: {
        padding: theme.spacing(2),
      },
      gridContent:{
          textAlign:'center',
      },
      icon:{
          marginTop:'5px',
          paddingRight:'5px',
          paddingTop:'5px',

      }
}));

export const Footer = (props) => {
    const classes = useStyles();

    const {
        buscaCategoria
    } = props

    const handleBuscaCategoria = (cat) => {
        buscaCategoria(cat);
    }


    return(
        <footer className={classes.footer}>
            <Grid container spacing={4} justify='center' className={classes.root}>
            <Grid item key={1} xs={12} sm={6} md={4}>
            <Typography variant='h6'>Sobre nós</Typography>
            <p>A Green E-commerce é um marketplace de compras casadas, aqui vc pode criar anúncios de compra ou de
              venda.</p>
              <Typography variant='h6'>Fale conosco</Typography>
              <MailOutlineIcon className={classes.icon} /><Link  component='button' variant='body2'>faleconosco@greenecommerce.com.br</Link><br />
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4} className={classes.gridContent}>
            <Typography variant='h6'>Categorias</Typography>
              <Link  component='button' variant='body2' onClick={() => handleBuscaCategoria('Tecnologia')}>Tecnologia</Link><br />
              <Link  component='button' variant='body2' onClick={() => handleBuscaCategoria('Esporte e Lazer')}>Esporte e Lazer</Link><br />
              <Link  component='button' variant='body2' onClick={() => handleBuscaCategoria('Supermercado')}>Supermercado</Link>
            </Grid>
            <Grid item key={3} xs={12} sm={6} md={4} className={classes.gridContent}>
            <Typography variant='h6'>Serviços</Typography>
              <Link  component='button' variant='body2'>Minha conta</Link><br />
              <Link  component='button' variant='body2'>Ver carrinho</Link><br />
              <Link  component='button' variant='body2'>Lista de desejos</Link><br />
              <Link  component='button' variant='body2'>Rastrear meus pedidos</Link><br />
              <Link  component='button' variant='body2'>Ajuda</Link>
            </Grid>
            </Grid>
   
         </footer>
    )
};