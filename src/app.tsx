import * as React from "react";
import * as ReactDOM from "react-dom";
import { Icon } from "./components/icon";
import { Map } from "./components/map";

declare const glases: string[];

// tslint:disable-next-line:no-empty-interface
export interface IAppProps {
}

export interface IAppState {
    file?: File;
    imageX?: number;
    imageY?: number;
    imageScale: number;
    stikerUrl?: string;
    stikerX?: number;
    stikerY?: number;
    stikerScale?: number;
    mapX?: number;
    mapY?: number;
}

export class App extends React.Component<IAppProps, IAppState> {
    public img = new Image();
    public nowMouseX = 0;
    public nowMouseY = 0;

    constructor(props: IAppProps) {


        super(props);

        this.state = {
            imageScale: 1,
            imageX: 0,
            imageY: 0,
            stikerScale: 1,
            stikerX: 20,
            stikerY: 20,
            mapX: 415,
            mapY: 0,
        };

        // Привязка карты
        this.img.src = "../dist/map.jpg";
    }

    public render() {
        return (
            <table className="canvas-app-table noselect">
                <tbody>
                    <tr >
                        <td>
                            <div className="canvas-app-header text-header">
                                Avalon
                            </div>
                        </td>
                    </tr>
                    <tr className="canvas-app-body">
                        <td className="canvas-app-image">
                            <div onWheel={this.onWheel.bind(this)}
                                onMouseDown={this.onMouseDown.bind(this)}
                                onMouseMove={this.onMouseMove.bind(this)}>
                                <img ref="imgMap" src="../dist/map.jpg"
                                    draggable={false}
                                    width={500 * this.state.imageScale}
                                    height={500 * this.state.imageScale}
                                    style={{
                                        left: this.state.mapX,
                                        top: this.state.mapY,
                                    }}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="canvas-app-footer text-header">
                                Web page in development. For all suggestions and comments -
                                <a href="https://discord.gg/9dGE8us">https://discord.gg/9dGE8us</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    //#region Mouse actions
    protected onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // console.log("Down")
        this.nowMouseX = e.nativeEvent.offsetX;
        this.nowMouseY = e.nativeEvent.offsetY;
    }
    protected onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.buttons === 1) {
            // console.log("move")

            this.setState({
                mapX: this.state.mapX! + e.nativeEvent.offsetX - this.nowMouseX,
                mapY: this.state.mapY! + e.nativeEvent.offsetY - this.nowMouseY,
            })
        }
    }

    //Проблема с быстрой прокруткой
    protected onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        // Отмена передачи события onWheel родительским элементам
        e.preventDefault();
        e.stopPropagation();

        const scale = this.state.imageScale;
        const newScale = scale! - e.deltaY / 1000;
        let shiftCentral = 0;
        if (e.deltaY > 0) {
            shiftCentral = 25;
        } else {
            shiftCentral = -25;
        }
        if (scale && newScale <= 5 && newScale >= 1) {
            this.setState({
                imageScale: newScale,
                mapX: this.state.mapX! + shiftCentral,
                mapY: this.state.mapY! + shiftCentral,
            });
        }
    }

    //#endregion

    //#region Navigation panel
    public onLeft() {
        console.log(this.state.mapX);
        this.setState({
            mapX: this.state.mapX! - 10,
        })
    }
    //#endregion

}
