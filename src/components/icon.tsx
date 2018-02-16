import * as React from "react";

export interface IIconProps {
    name: string;
}
// tslint:disable-next-line:no-empty-interface
export interface IIconState { }

export class Icon extends React.Component<IIconProps, IIconState> {

    constructor(props: IIconProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <i className="material-icons">{this.props.name}</i>
        );
    }
}
