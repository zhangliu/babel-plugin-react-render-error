export default class E extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}