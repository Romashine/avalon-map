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
}

export class App extends React.Component<IAppProps, IAppState> {
    public img = new Image();

    constructor(props: IAppProps) {

        super(props);

        this.state = {
            imageScale: 1,
            imageX: 0,
            imageY: 0,
            stikerScale: 1,
            stikerX: 20,
            stikerY: 20,
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
                        <td >
                            <div className="canvas-app-image" onWheel={this.onWheel.bind(this)}>
                                <Map imageScale={this.state.imageScale} img={this.img} />
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
    public onWheel(a: any) {
        const scale = this.state.imageScale;
        const newScale = scale! - a.deltaY / 1000;
        if (scale && newScale < 5 && newScale > 1) {
            this.setState({
                imageScale: newScale,
            });
        }
    }

    //#endregion

    //#region Navigation panel

    //#endregion

    public onClickGlases(item: string) {
        this.setState({
            stikerUrl: item,
        });
    }

    public onZoomIn() {
        if (this.state.stikerUrl) {
            this.setState({
                stikerScale: this.state.stikerScale! + 0.2,
            });
        } else {
            this.setState({
                imageScale: this.state.imageScale! + 0.2,
            });
        }
    }
    public onZoomOut() {
        if (this.state.stikerUrl) {
            this.setState({
                stikerScale: this.state.stikerScale! - 0.2,
            });
        } else {
            this.setState({
                imageScale: this.state.imageScale! - 0.2,
            });
        }
    }

    public onLeft() {
        if (this.state.stikerUrl) {
            this.setState({
                stikerX: this.state.stikerX! - 10,
            });
        } else {
            this.setState({
                imageX: this.state.imageX! - 10,
            });
        }
    }
    public onRight() {
        if (this.state.stikerUrl) {
            this.setState({
                stikerX: this.state.stikerX! + 10,
            });
        } else {
            this.setState({
                imageX: this.state.imageX! + 10,
            });
        }
    }
    public onDown() {
        if (this.state.stikerUrl) {
            this.setState({
                stikerY: this.state.stikerY! + 10,
            });
        } else {
            this.setState({
                imageY: this.state.imageY! + 10,
            });
        }
    }
    public onUp() {
        if (this.state.stikerUrl) {
            this.setState({
                stikerY: this.state.stikerY! - 10,
            });
        } else {
            this.setState({
                imageY: this.state.imageY! - 10,
            });
        }
    }

}
