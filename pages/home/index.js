import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {Appbar} from '../../src/components/home/Appbar';
import api from '../../src/components/api';
import Modal from '@material-ui/core/Modal';
import {Form} from '../../src/components/home/Form';
import { Formik } from 'formik';
import {Footer} from '../../src/components/home/Footer';



const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
      },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  modal: {
    margin:0,
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  preco: {
    marginTop: theme.spacing(2),
    
  }
}));

export default function Home() {
  const classes = useStyles();
  const [produtos, setProdutos] = React.useState([]);
  const [modal, setModal] = React.useState(false);


  useEffect(() => {
    api.get('produto/')
    .then((res) => {
    // console.log('Produtos listados com sucesso' + res.data)
     setProdutos(res.data)
     console.log(produtos)})
    .catch((err) => {
     console.error("ops! ocorreu um erro" + err);
  });
  },[]);

  const refreshList = () => {
    api.get('produto/')
    .then((res) => {
    // console.log('Produtos listados com sucesso' + res.data)
     setProdutos(res.data)})
  };

  const refreshListBusca = (data) => {
    console.log(data);
     setProdutos(data)
  };

  const initvalues = {
    titulo:'',
    slug:'',
    descricao:'',
    preco:'',
    tags:'',
    image:'',
  }
  const submitValues = (values, actions) => {

        api.post('produto/',values)
        .then((res) => {alert('Produto cadastrado com sucesso');
        handleCloseModal();
        refreshList()})
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
       });
  }

  const dellProduto = (value) => {
    const reqbody = {"id":value}
    console.log(reqbody);
    
    api.delete('produto/',{data: reqbody})
    .then((res) => {refreshList();
    alert('Produto deletado com sucesso!')})
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });
   
   
}

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const modalBody = (
    <div className={classes.modal}>
    <h2 id="simple-modal-title">Novo produto:</h2>
    <Formik         
        initialValues={initvalues}
        onSubmit={submitValues}>
        {props => <Form {...props}/>}

    </Formik>

  </div>
  );
 
    const handleSearchTag = (values) => {
      api.get('produto/tags/' + values)
      .then((res) => {refreshListBusca(res.data)})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
    }

    const handleSearch = (values) => {
      console.log(values);
      api.get('produto/getByName/' + values.search)
      .then((res) => {refreshListBusca(res.data)})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
    }
  
    const initSearch = {
      search:'',
    }

  return (

    <div className={classes.grow}>
        <Formik         
        initialValues={initSearch}
        onSubmit={handleSearch}>
        {props => <Appbar buscaCategoria={handleSearchTag} refresh={refreshList} {...props}/>}

        </Formik>

     <main>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
              Green E-commerce
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Bem vindo ao nosso marketplace!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleOpenModal}>
                    Criar anúncio
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Modal
        open={modal}
        onClose={handleCloseModal}
      >
        {modalBody}
      </Modal>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {produtos.map((produtos) => (

              <Grid item key={produtos._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {produtos.titulo}
                    </Typography>
                    <Typography>
                      {produtos.descricao}
                    </Typography>
                    <Typography variant="h6" className={classes.preco} color="primary" align="right">
                    {'R$' + produtos.preco.toLocaleString('pt-BR',{
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Comprar
                    </Button>
                    <Button size="small" color="primary"
                    onClick={() => dellProduto(produtos._id)}>
                      Excluir
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer 
        buscaCategoria={handleSearchTag}
      />
    </div>

  );
}
