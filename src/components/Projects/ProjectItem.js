import React from 'react';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= 770,
            imgOrientaiton: props.imgOrientaiton,
            exp: props.exp
        }
        this.updateWindowHeight = this.updateWindowHeight.bind(this);
    }

    updateWindowHeight() {
        this.setState({ isMobile: window.innerWidth <= 770 });
    }

    componentDidMount() {
        this.updateWindowHeight();
        window.addEventListener('resize', this.updateWindowHeight);
    }

    componentWillUnmount() {
        window.addEventListener('resize', this.updateWindowHeight);
    }

    renderFunction = () => {
        const { imgOrientaiton, exp } = this.props
        const { isMobile } = this.state

        if (imgOrientaiton === 'RIGHT' && !isMobile) {
            return (
                <div className="proj-item">
                    <div className="proj-text">
                        {this.props.children[0]}
                        <div className="proj-exp-list">
                            {exp.map((exp) => {
                                return (
                                    <p className="proj-exp" key={exp}>
                                        {exp}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    {this.props.children[1]}
                </div>
            );
        } else {
            return (
                <div className="proj-item">
                    {this.props.children[1]}
                    <div className="proj-text">
                        {this.props.children[0]}
                        <div className="proj-exp-list">
                            {exp.map((exp) => {
                                return (
                                    <p className="proj-exp" key={exp}>
                                        {exp}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderFunction()}
            </div>
        );
    }
}

export default ProjectItem;