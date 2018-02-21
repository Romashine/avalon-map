import * as React from "react";

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

    public render() {
        return (
            <div ref="divImg" className="map"
                onMouseMove={this.onMouseMove}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                style={{ position: "relative" }}>
                <img src="../dist/map.jpg"
                    draggable = {false}
                    width={500 * this.props.scale}
                    height={500 * this.props.scale}
                />
            </div>
        );
    }

    protected onMouseDown = () => {
        console.log("MouseDown");
    }

    protected onMouseUp = () => {
        console.log("MouseUp");
    }

    protected onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();

        if (e.buttons === 1) {
            console.log(e.clientX);
            console.log(e.clientY);

        }
    }
}