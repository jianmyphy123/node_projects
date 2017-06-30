import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "body": {
        "background": "#fff",
        "fontFamily": "Tahoma, Arial, Helvetica, sans-serif",
        "fontSize": 12,
        "lineHeight": 17,
        "color": "#333"
    },
    "a": {
        "textDecoration": "none",
        "color": "#336699"
    },
    "a:hover": {
        "textDecoration": "underline",
        "color": "#111"
    },
    "wrap": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 780
    },
    "header": {
        "height": 90
    },
    "header h1": {
        "fontSize": 28,
        "letterSpacing": -1,
        "paddingTop": 23,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "color": "#3069AE"
    },
    "header h1 a": {
        "color": "#3069AE",
        "textDecoration": "none",
        "fontWeight": "100",
        "letterSpacing": -2
    },
    "header h1 a:hover": {
        "color": "#111"
    },
    "header h2": {
        "fontSize": 19,
        "color": "#DA0000",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "letterSpacing": -1,
        "fontWeight": "100"
    },
    "menu": {
        "height": 30,
        "lineHeight": 30,
        "background": "#3069AE url(images/menu.jpg) no-repeat"
    },
    "menu ul": {
        "listStyleType": "none",
        "paddingLeft": 20
    },
    "menu ul li": {
        "display": "block",
        "float": "left"
    },
    "menu ul li a": {
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textDecoration": "none",
        "fontWeight": "100",
        "fontSize": 14,
        "color": "#fff"
    },
    "menu ul li a:hover": {
        "color": "#fff",
        "textDecoration": "underline"
    },
    "content": {
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "left": {
        "float": "left",
        "width": 550,
        "textAlign": "justify",
        "paddingTop": 10
    },
    "left h2": {
        "fontSize": 18,
        "fontWeight": "100",
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 7,
        "paddingLeft": 0
    },
    "left h2 a": {
        "textDecoration": "none"
    },
    "left h2 a:hover": {
        "color": "#111"
    },
    "right": {
        "float": "right",
        "width": 160,
        "paddingTop": 15
    },
    "right h2": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 10,
        "height": 24,
        "lineHeight": 24,
        "background": "#3F7AC6",
        "color": "#fff",
        "fontSize": 13
    },
    "right ul": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 10,
        "listStyleType": "none"
    },
    "right ul li a": {
        "color": "#336699",
        "textDecoration": "none",
        "fontSize": 12,
        "fontWeight": "100"
    },
    "right ul li a:hover": {
        "color": "#111"
    },
    "footer": {
        "height": 30,
        "lineHeight": 30,
        "background": "#D1E6EF url(images/footer.jpg) no-repeat",
        "textAlign": "center",
        "fontSize": 11,
        "color": "#fff"
    },
    "footer a": {
        "color": "#fff"
    },
    "uldocs li": {
        "float": "left",
        "listStyle": "none",
        "width": "50%",
        "marginBottom": 20
    },
    "label": {
        "display": "inline-block",
        "width": 180
    },
    "form div": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "details-left": {
        "width": "30%",
        "float": "left"
    },
    "details-right": {
        "width": "60%",
        "float": "right"
    },
    "doc-info li": {
        "lineHeight": 2,
        "listStyle": "none",
        "borderBottom": "1px #ccc solid"
    },
    "practice-info li": {
        "lineHeight": 2,
        "listStyle": "none",
        "borderBottom": "1px #ccc solid"
    },
    "details-right h4": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "background": "#f4f4f4"
    }
});