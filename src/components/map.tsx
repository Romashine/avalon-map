import * as React from "react";
import { Layer, Stage } from "react-konva";

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
            <Stage>
                <Layer>
                    <img
                        src={"../dist/map.jpg"}
                        style={{
                            width: 500 * this.props.imageScale!,
                        }} />
                </Layer>
            </Stage>
        );
    }
}
