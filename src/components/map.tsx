import * as React from "react";

export interface IMapProps {
    scale: number;
}
export interface IMapState {
    mapX: number;
    mapY: number;
}

export class Map extends React.Component<IMapProps, IMapState> {
       
    constructor(props: IMapProps) {
        super(props);
        
        this.state = {
            mapX: 425,
            mapY: 0,
        };
    }

    public render() {
        return (
            <div>
                <img ref="imgMap" src="../dist/map.jpg"
                    width={500 * this.props.scale}
                    height={500 * this.props.scale}
                    style={{
                        left: this.state.mapX,
                        top: this.state.mapY,
                    }}
                />
            </div>
        );
    }

}