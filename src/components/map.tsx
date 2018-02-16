import * as React from "react";
import { Image, Layer, Stage } from "react-konva";

export interface IMapProps {
    imageScale: number;
    img: any;
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
            <Stage width={500} height={500}>
                <Layer>
                    <Image image={this.props.img} width={500} height={500}/>
                </Layer>
            </Stage>
        );
    }
}
