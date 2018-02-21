import * as React from "react";
import { Image, Layer, Stage } from "react-konva";

export interface IMapProps {
    scale: number;
}
export interface IMapState {
    shiftX: number;
    shiftY: number;
}

export class Map extends React.Component<IMapProps, IMapState> {

    public drag = false;

    constructor(props: IMapProps) {
        super(props);

        this.state = {
            shiftX: 0,
            shiftY: 0,
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
                    draggable = {false}
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
            console.log(e.clientX);
            console.log(e.clientY);

        }
    }
}