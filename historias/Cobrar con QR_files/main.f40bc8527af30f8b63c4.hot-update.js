webpackHotUpdate("main",{

/***/ "./src/components/MerchantSideBar/index.js":
/*!*************************************************!*\
  !*** ./src/components/MerchantSideBar/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _constants_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/routes */ "./src/constants/routes.js");
/* harmony import */ var _constants_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/nav */ "./src/constants/nav.js");
/* harmony import */ var _redux_common_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../redux/common/actions */ "./src/redux/common/actions.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _services_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/login */ "./src/services/login.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_login_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../redux/login/actions */ "./src/redux/login/actions.js");
/* harmony import */ var _services_qr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../services/qr */ "./src/services/qr.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../services/utils */ "./src/services/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _LogoGridStart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../LogoGridStart */ "./src/components/LogoGridStart/index.js");
/* harmony import */ var _MerchantHomeHeader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../MerchantHomeHeader */ "./src/components/MerchantHomeHeader/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../helpers/utils */ "./src/helpers/utils.js");
/* harmony import */ var _LoggedView__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../LoggedView */ "./src/components/LoggedView/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
var _jsxFileName = "/Users/gllantada/Desktop/technisys/fif-payments-merchant-web/src/components/MerchantSideBar/index.js";

























 // import * as transactionService from "../../services/transactions";

const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    height: "100vh",
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.up("xs")]: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    },
    [theme.breakpoints.up("lg")]: {
      position: "sticky",
      display: "block"
    }
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("xs")]: {
      position: "fixed",
      left: -200,
      width: theme.spacing(9) + 1
    },
    [theme.breakpoints.up("lg")]: {
      position: "sticky",
      display: "block",
      left: 0,
      top: 0,
      bottom: 0,
      right: 0 // right: "initial",      width: theme.spacing(9) + 1,

    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end !important",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const MerchantSideBar = props => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_25__["useTranslation"])();
  const classes = useStyles();
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth > 1280);
  const [isChild, setIsChild] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [link, setLink] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#");
  const [whatsappLink, setWhatsappLink] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#");
  const [document_warnin, setDocumentWarnin] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [merchantName, setMerchantName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [screenWidth, setScreenWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);
  let src = "";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleResize = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_23__["debounce"])(() => {
      if (window.innerWidth < 1280) {
        setOpen(false);
      } else if (!open) {
        setOpen(true);
      }
    }, 200);
    window.addEventListener("resize", handleResize);
  }, []);

  const handleHelp = () => {
    Object(_services_qr__WEBPACK_IMPORTED_MODULE_16__["getHelpUrl"])(succesHelp, errorHelp);
  };

  const succesHelp = link => {
    setLink(link.url);
  };

  const errorHelp = err => {};

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleHelp();
    handlePhone();
  }, []);

  const handlePhone = () => {
    Object(_services_utils__WEBPACK_IMPORTED_MODULE_17__["getPhone"])(succesPhone, errorPhone);
  };

  const succesPhone = response => {
    debugger;
  };

  const errorPhone = err => {
    props.dispatchShowError(err);
  }; // transactionService.getTransactions();


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.dispatchHideError();
    setScreenWidth(window.innerWidth);
    var actual = new Date();
    var expires = new Date(props.jwt.expires_in);

    if (actual.getTime() - expires.getTime() > 0) {// props.history.push(Routes.LOGIN);
    } else if (props.jwt.expires_in === "") {// props.history.push(Routes.LOGIN);
    }

    if (props.docsWarnin === true) {
      if (!Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_23__["getDocumentStatus"])(props.document_status)) {
        setDocumentWarnin(true);
      } else {
        setDocumentWarnin(false);
      }
    } else {
      setDocumentWarnin(false);
    }

    setMerchantName(props.business_name);
  }, [props]);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const destroyRedux = () => {
    props.dispatchDeleteAccount();
    props.history.push(_constants_routes__WEBPACK_IMPORTED_MODULE_3__["LOGIN"]);
  };

  const handleCloseSession = () => {
    let aux = {
      jwt: { ...props.jwt
      },
      first_name: props.agent.first_name,
      last_name: props.agent.last_name,
      email: props.agent.email
    };
    Object(_services_login__WEBPACK_IMPORTED_MODULE_10__["logout"])(aux, succesService, errorService);
  };

  const succesService = rta => {
    destroyRedux();
  };

  const errorService = err => {
    destroyRedux();
    props.dispatchShowError(err);
  };

  const containerClasses = ["myAsideContainer"];

  if (props.mobileFullSize) {
    containerClasses.push("mobileFullSize");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root + " myAsideContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "permanent",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
      [classes.justLarge]: !open
    }),
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `${classes.toolbar} justLarge openClosContainer`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleDrawerClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, !open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    id: "imagen-icono-avanzar",
    className: "iconOpenClose",
    src: `${_constants_routes__WEBPACK_IMPORTED_MODULE_3__["HOME"]}/arrowFoward.svg`,
    alt: "icono de movimiento",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconOpenClose",
    id: "imagen-icono-retroceder",
    src: `${_constants_routes__WEBPACK_IMPORTED_MODULE_3__["HOME"]}/arrowBack.svg`,
    alt: "icono de movimiento",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogoGridStart__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: open,
    handleClose: () => {
      setOpen(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoggedView__WEBPACK_IMPORTED_MODULE_24__["default"], {
    gridProps: {
      container: true,
      wrap: "nowrap",
      alignItems: "center",
      justify: "flex-start",
      style: {
        paddingLeft: "24px"
      }
    },
    open: open,
    className: "noLarge loggedView",
    style: {
      width: "239px"
    },
    history: props.history,
    white: true,
    name: merchantName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, _constants_nav__WEBPACK_IMPORTED_MODULE_4__["default"].map((nav, index) => {
    let myClassName = "";

    if (props.history.location.pathname.toLowerCase() === nav.to) {
      myClassName = "selectedNav";
      src = `${nav.src}selected${nav.ext}`;
    } else {
      myClassName = "notSelectedNav";
      src = `${nav.src}${nav.ext}`;

      if (nav.childs) {
        nav.childs.forEach(elm => {
          if (props.history.location.pathname === elm) {
            myClassName = "selectedNav";
            src = `${nav.src}selected${nav.ext}`;
          } else {
            src = `${nav.src}${nav.ext}`;
          }
        });
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: nav.to,
      key: nav.text,
      onClick: () => {
        if (screenWidth < 1280) setOpen(false);
      },
      className: myClassName,
      id: `side-bar-item-${index}`,
      style: {
        textDecoration: "none",
        color: "White"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
      button: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: src,
      id: "imagen-icono-seccion",
      alt: "icono de seccion",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
      primary: nav.text,
      className: "merchant-side-bar-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 19
      }
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    target: "_blank" // onClick={() => {
    //   if (screenWidth < 1280) setOpen(false);
    // }}
    ,
    className: "notSelectedNav",
    id: `help-item`,
    style: {
      textDecoration: "none",
      color: "White"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    button: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `${_constants_routes__WEBPACK_IMPORTED_MODULE_3__["HOME"]}/ic_help_24.svg`,
    id: "imagen-icono-seccion",
    alt: "icono de seccion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
    primary: "Ayuda",
    className: "merchant-side-bar-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: whatsappLink,
    target: "_blank" // onClick={() => {
    //   if (screenWidth < 1280) setOpen(false);
    // }}
    ,
    className: "notSelectedNav",
    id: `whatsapp-item`,
    style: {
      textDecoration: "none",
      color: "White"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
    button: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `${_constants_routes__WEBPACK_IMPORTED_MODULE_3__["HOME"]}/ic_whatsapp.svg`,
    id: "imagen-icono-seccion",
    alt: "icono de seccion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_20__["default"], {
    primary: "Whatsapp",
    className: "merchant-side-bar-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "noLarge closeSession ",
    onClick: handleCloseSession,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 9
    }
  }, t("common.closeSession"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: containerClasses.join(" "),
    style: {
      overflowY: "scroll",
      maxHeight: "100vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MerchantHomeHeader__WEBPACK_IMPORTED_MODULE_22__["default"], Object.assign({
    name: merchantName,
    title: props.title,
    handleCloseSession: handleCloseSession,
    handleOpen: () => setOpen(true),
    open: open,
    hasError: props.hasError
  }, props, {
    flagDocument: document_warnin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 9
    }
  })), props.children));
};

const mapStateToProps = state => {
  let {
    business_name
  } = state.login.merchant.merchants ? state.login.merchant.merchants[0] : "";
  let {
    jwt
  } = state.login;
  let {
    document_status
  } = state.login.merchant;
  let {
    hasError
  } = state.common;
  return {
    business_name,
    jwt,
    document_status,
    merchant: state.login.merchant.merchants[0],
    jwt: state.login.jwt,
    agent: state.login.merchant.legal_agent
  };
};

const mapDispatchToProps = (dispatch, props) => Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])({
  dispatchHideError: _redux_common_actions__WEBPACK_IMPORTED_MODULE_5__["hideSnackBar"],
  dispatchShowError: _redux_common_actions__WEBPACK_IMPORTED_MODULE_5__["showError"],
  dispatchDeleteAccount: _redux_login_actions__WEBPACK_IMPORTED_MODULE_15__["deleteLoginValues"]
}, dispatch);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps, mapDispatchToProps)(MerchantSideBar));

/***/ })

})
//# sourceMappingURL=main.f40bc8527af30f8b63c4.hot-update.js.map