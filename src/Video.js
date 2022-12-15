import React from 'react';

export class Video extends React.Component {
    constructor(props) {
        super(props);

        try {
            this.handleClick = this.handleClick.bind(this);
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div>
                <video controls autostart autoPlay muted src={this.props.src}/>
            </div>
        );
    }
}
