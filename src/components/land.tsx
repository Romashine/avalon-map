import * as React from "react";

export interface ILandProps {

    x: number;
    y: number;
    scale: number;
    mapX: number;
    mapY: number;
}
export interface ILandState {
    [key: string]: string;
}

export class Land extends React.Component<ILandProps, ILandState> {

    constructor(props: ILandProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <object
       
                data="../dist/land.svg"
                type="image/svg+xml"
                id="land"
                width={500 * this.props.scale}
                height={500 * this.props.scale}
                style={{
                    left: this.props.x * this.props.scale + this.props.mapX!,
                    top: this.props.y * this.props.scale + this.props.mapY!,
                }}
            />
        );
    }
}