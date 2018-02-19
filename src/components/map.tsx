import * as React from "react";
import { Image, Layer, Stage } from "react-konva";

export interface IMapProps {
    imageScale: number;
}
export interface IMapState {
}

export class Map extends React.Component<IMapProps, IMapState> {

    constructor(props: IMapProps) {
        super(props);

        this.state = {
        };
    }

    public render() {
        return (
            <div className="map">
                <img src="../dist/map.jpg" height={500 * this.props.imageScale} width={500 * this.props.imageScale} />
            </div>
        );
    }
}
