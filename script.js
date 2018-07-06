var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    componentWillMount: function() {
        console.log('Metoda wywoływana przed wyrenderowaniem komponentu.');
    },
    componentDidMount: function() {
        console.log('Metoda wywoływana po wyrenderowaniu elementu,po zamontowaniu w drzewie DOM.');
    },
    componentWillReceiveProps: function () {
        console.log('Metoda wywoływana po otrzymaniu nowych właściwości-propsów.');
    },
    shouldComponentUpdate: function () {
        console.log('Metoda wywoływana w przypadku gdy konieczne jest przerenderowanie elementu.Zwraca true lub false');
        return true;
    },
    componentWillUpdate: function () {
        console.log('Metoda wywoływana przed aktualizacją komponentu.');
    },
    componentDidUpdate: function () {
        console.log('Metoda wywoływana po zaktualizowaniu komponentu.');
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, '+1'),
            React.createElement('button', {onClick: this.decrement}, '-1'),
            React.createElement('span', {}, 'Result: ' + this.state.counter)
        );
    },
    componentWillUnmount: function () {
        console.log('Metoda wywoływana po usunięciu komponentu z drzewa DOM.');
    }
});

var counterOne = React.createElement(Counter);
var counterTwo = React.createElement(Counter);

var element = React.createElement('div', {}, counterOne, counterTwo);
ReactDOM.render(element, document.getElementById('app'));