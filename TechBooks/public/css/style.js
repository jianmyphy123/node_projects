import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "footer": {
        "marginTop": 40,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "center"
    },
    "book": {
        "textAlign": "center"
    },
    "book h4": {
        "marginTop": 15
    },
    "book img": {
        "width": "100%",
        "height": 350
    },
    "imgdetail": {
        "width": "100%"
    },
    "price": {
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 15,
        "marginLeft": 5,
        "fontSize": 18
    },
    "price span": {
        "color": "green",
        "background": "#f4f4f4",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px #ccc solid",
        "borderRadius": "50%"
    },
    "ulerror li": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "border": "1px solid transparent",
        "borderRadius": 4,
        "listStyle": "none",
        "color": "#a94442",
        "backgroundColor": "#f2dede",
        "borderColor": "#ebccd1"
    },
    "ulinfo li": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "border": "1px solid transparent",
        "borderRadius": 4,
        "listStyle": "none",
        "color": "#31708f",
        "backgroundColor": "#d9edf7",
        "borderColor": "#bce8f1"
    },
    "ulsuccess li": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "border": "1px solid transparent",
        "borderRadius": 4,
        "listStyle": "none",
        "color": "#3c763d",
        "backgroundColor": "#dff0d8",
        "borderColor": "#d6e9c6"
    },
    "h2 span a": {
        "fontSize": 18
    }
});