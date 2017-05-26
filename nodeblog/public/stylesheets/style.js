import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "Arial",
        "fontSize": 15,
        "background": "#f4f4f4",
        "color": "#666"
    },
    "logo": {
        "textAlign": "center",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "display": "block"
    },
    "container": {
        "width": 750,
        "border": "1px solid #ccc",
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderTop": "3px solid #83cd29"
    },
    "clr": {
        "clear": "both"
    },
    "ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h1": {
        "marginBottom": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "h2": {
        "marginBottom": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "h3": {
        "marginBottom": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "p": {
        "marginBottom": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginLeft": 0
    },
    "a": {
        "color": "#404137",
        "textDecoration": "none"
    },
    "nav": {
        "background": "#404137",
        "color": "#fff",
        "overflow": "auto",
        "height": 40,
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 18,
        "marginBottom": 20
    },
    "nav li": {
        "float": "left",
        "listStyle": "none"
    },
    "nav a": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "color": "#fff"
    },
    "nav acurrent": {
        "background": "#83cd29",
        "color": "#000"
    },
    "nav a:hover": {
        "background": "#83cd29",
        "color": "#000"
    },
    "meta": {
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "1px solid #ccc",
        "background": "#ccc"
    },
    "amore": {
        "display": "block",
        "width": 80,
        "background": "#404137",
        "color": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "center",
        "marginTop": 20
    },
    "post": {
        "borderBottom": "1px solid #ccc",
        "paddingBottom": 20
    },
    "post img": {
        "width": "100%"
    },
    "label": {
        "display": "inline-block",
        "width": 180
    },
    "input": {
        "marginBottom": 15
    },
    "select": {
        "marginBottom": 15,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "height": 28,
        "width": 200,
        "border": "1px solid #ccc"
    },
    "textarea": {
        "marginBottom": 15,
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "height": 70,
        "width": 400,
        "border": "1px solid #ccc"
    },
    "input[type='text']": {
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "height": 20,
        "width": 200,
        "border": "1px solid #ccc"
    },
    "input[type='email']": {
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "height": 20,
        "width": 200,
        "border": "1px solid #ccc"
    },
    "alert": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginBottom": 20,
        "border": "1px solid transparent",
        "borderRadius": 4,
        "listStyle": "none"
    },
    "alert-danger": {
        "color": "#A94442",
        "backgroundColor": "#F2DEDE",
        "borderColor": "#EBCCD1"
    },
    "ulsuccess li": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginTop": 10,
        "marginBottom": 20,
        "border": "1px solid transparent",
        "borderRadius": 4,
        "color": "#3C763D",
        "backgroundColor": "#DFF0D8",
        "borderColor": "#D6E9C6",
        "listStyle": "none"
    },
    "footer": {
        "marginTop": 20,
        "textAlign": "center",
        "height": 30,
        "borderTop": "1px solid grey"
    },
    "comment-form": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "comment": {
        "background": "#ccc",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "border": "#666 solid 1px",
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "comment-name": {
        "fontWeight": "bold"
    }
});