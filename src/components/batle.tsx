import * as React from "react";

export interface IBatleProps {
    onMouseOverBatle: (e: any)=>void;
    onMouseOutBatle: (e: any)=>void;
    x: number;
    y: number;
    scale: number;
    mapX: number;
    mapY: number;
}
export interface IBatleState {
    [key: string]: string;
 }

export class Batle extends React.Component<IBatleProps, IBatleState> {

    constructor(props: IBatleProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
                <object
                    onMouseOver={(e) => this.props.onMouseOverBatle(e)}
                    onMouseOut={(e) => this.props.onMouseOutBatle(e)}
                    data="../dist/batle.svg"
                    type="image/svg+xml"
                    id="batle"
                    width={25 * this.props.scale}
                    height={25 * this.props.scale}
                    style={{
                        left: this.props.x * this.props.scale + this.props.mapX!,
                        top: this.props.y * this.props.scale + this.props.mapY!,
                    }} />
        );
    }
}