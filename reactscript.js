function start() {
    class NavBar extends React.Component {
        render() {
            return (
                React.createElement("li", {},
                    React.createElement("a",
                        { href: this.props.href },
                        this.props.description
                    )
                )
            );
        }
    }
    const rootElement =
        React.createElement("header", {}, // parent tag encapsulates all tags underneath
            React.createElement("h1", {},), // child tag of parent
            React.createElement("nav", {}, // second child tag
                React.createElement("ul", {}, //unordered list
                    React.createElement(
                        NavBar, {
                        href: "",  // second parameter is props
                        description: "Home"
                    }
                    ), React.createElement(
                        NavBar, {
                        href: "Education.html",
                        description:
                            "Education"
                    }
                    ), React.createElement(
                        NavBar, {
                        href: "Projects.html",
                        description:
                            "Projects"
                    }
                    ), React.createElement(
                        NavBar, {
                        href: "Experience.html",
                        description:
                            "Experience"
                    }
                    )
                )
            ));
    ReactDOM.render(rootElement,
        document.getElementById("mainContainer")
    );
}