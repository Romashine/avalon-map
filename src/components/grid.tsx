import * as React from "react";
import { Layer, Line, Stage } from "react-konva";

export interface IGridProps {
    mapX: number;
    mapY: number;
    scale: number;
}
export interface IGridState { }

export class Grid extends React.Component<IGridProps, IGridState> {

    constructor(props: IGridProps) {
        super(props);

        this.state = {};
    }

    public render() {
        const stepGrid = 8;
        const xLines: JSX.Element[] = [];
        const yLines: JSX.Element[] = [];
        let temp = 0;
        const widthColumn = 62.5;
        let x = this.props.mapX;
        let y = this.props.mapY;
        while (temp < stepGrid) {
            xLines.push(
                <Line
                    key={temp}
                    points={[x, y, 500*this.props.scale, y]}
                    stroke="black"
                    strokeWidth={5}
                />
            );
            yLines.push(
                <Line
                    key={temp}
                    points={[0, temp, x, temp]}
                    stroke="black"
                    strokeWidth={5}
                />
            );
            // x += widthColumn * this.props.scale;
            y += widthColumn * this.props.scale;
            temp += 1;
        }
        return (
            <Stage x={this.props.mapX} y={this.props.mapY} width={x} height={y}>
                <Layer>
                    {xLines}
                    {yLines}
                </Layer>
            </Stage>
        );
    }
}