import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Logo from "../../assets/img/logoGreen.png";
import Image from 'next/image'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Link from 'next/link';


export const Appbar = (props) => {

  const {
    searchValue,
    handleSubmit,
    handleChange,
    buscaCategoria,
    refresh
  } = props;

  const useStyles = makeStyles((theme) => ({

    list: {
      width: 250,
    },

    icon: {
      marginRight: theme.spacing(2),
    },

    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'absolute',
      left:'50%',
      transform:'translate(-50%)',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  const classes = useStyles();

  const [drawerState, setDrawer] = React.useState(false);

  const handleBuscaCategoria = (cat) => {
    buscaCategoria(cat);
  }

  const handleRefresh = () =>{
    refresh();
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(open);
    setDrawer(open);
  };

  const renderList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key='Minha Conta'>
          <ListItemIcon><AccountCircleOutlinedIcon /> </ListItemIcon>
          <ListItemText primary={'Minha Conta'} />
        </ListItem>

      </List>
      <Divider />
      <List>
        {['Tecnologia', 'Esporte e Lazer', 'Supermercado'].map((text, index) => (
          <ListItem button key={text}
          onClick={() => handleBuscaCategoria(text)} >
            <ListItemIcon>{index === 0 ? <DevicesOtherIcon /> : index === 1 ? <SportsTennisIcon /> : <ShoppingCartIcon /> } </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );



  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            open={drawerState}
            onClose={toggleDrawer(false)}>
            {renderList}
          </Drawer>

          <Link href="/home">
          <a onClick={handleRefresh}>
          <Image alt="Green Logo" src={Logo} width="50" height="50" />
          </a>
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            Green
          </Typography>
 

          
          <div className={classes.search}>
            <div className={classes.searchIcon}>

              <SearchIcon />

            </div>
            <form onSubmit={handleSubmit} >
            <InputBase
              name="search"
              placeholder="O que você procura?"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'pesquisa' }}
              value={searchValue}
              onChange={handleChange}
            />
            </form>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )

};