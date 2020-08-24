let reactWidget = require('./node_modules/hegdemahesh-react-widget-demo/dist/ReactWidgetDemo.js');

function loadWidget() {
    //window['ReactWidgetDemo'].initializeWidget();
    reactWidget.initializeWidget();
}


function clearWidget() {
    //window['ReactWidgetDemo'].unloadWidget();
    reactWidget.unloadWidget();
}

document.querySelector('#loadButton').addEventListener('click', loadWidget);
document.querySelector('#clearButton').addEventListener('click', clearWidget);

