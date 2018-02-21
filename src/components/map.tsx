import * as React from "react";

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

    public render() {
        return (
            <div ref="divImg" className="map"
                onMouseMove={this.onMouseMove}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                style={{ position: "relative" }}>
                <img src="../dist/map.jpg"
                    className="dragme"
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
            console.log("MouseMove");
        }
    }
}