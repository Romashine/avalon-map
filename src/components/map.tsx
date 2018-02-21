import * as React from "react";
import { Image, Layer, Stage } from "react-konva";

export interface IMapProps {
    scale: number;
}
export interface IMapState {
    x: number;
    y: number;
}

export class Map extends React.Component<IMapProps, IMapState> {

    public drag = false;

    constructor(props: IMapProps) {
        super(props);

        this.state = {
            x: 50,
            y: 50,
        };

        // this.onMouseDown = this.onMouseDown.bind(this);

    }
    // public componentDidMount() {
    //     const divImg = this.refs.divImg as HTMLElement;
    //     divImg.addEventListener("mousedown", this.onMouseDown.bind(this));
    // }

    public render() {
        return (
            <div ref="divImg" className="map"
                onMouseMove={this.onMouseMove.bind(this)}
                onMouseDown={this.onMouseDown.bind(this)}
                onMouseUp={this.onMouseUp.bind(this)}
                style={{ position: "relative" }}>
                <img src="../dist/map.jpg"
                    className="dragme"
                    width={500 * this.props.scale}
                    height={500 * this.props.scale}
                />
            </div>
        );
    }

    public onMouseDown() {
        console.log("MouseDown");
    }

    public onMouseUp() {
        console.log("MouseUp");
    }

    public onMouseMove(e: React.MouseEvent<HTMLTableCellElement>) {
        if (e.buttons === 1) {
            console.log("MouseMove");
        }
    }
}