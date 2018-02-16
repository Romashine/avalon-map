import * as React from "react";
import { Icon } from "./components/icon";

declare const glases: string[];

// tslint:disable-next-line:no-empty-interface
export interface IAppProps {
}
export interface IAppState {
    file?: File;
    imagePreviewUrl?: "./map.jpg";
    imageX?: number;
    imageY?: number;
    imageScale?: number;
    stikerUrl?: string;
    stikerX?: number;
    stikerY?: number;
    stikerScale?: number;
}

export class App extends React.Component<IAppProps, IAppState> {

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
    }

    public render() {
        return (
            <table className="canvas-app-table noselect">
                <tbody>
                    <tr >
                        <td colSpan={3}>
                            <div className="canvas-app-header text-header">
                                Avalon
                            </div>
                        </td>
                    </tr>
                    <tr className="canvas-app-body">
                        <td >
                            <div className="canvas-app-image">
                                <img
                                    src={"../dist/map.jpg"}
                                    style={{
                                        left: this.state.imageX!,
                                        top: this.state.imageY!,
                                        width: 500 * this.state.imageScale!,
                                    }}  />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="canvas-app-footer text-header">
                                Web page in development. For allsuggestions and comments -
                                <a href="https://discord.gg/9dGE8us">https://discord.gg/9dGE8us</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

//#region Mouse actions

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
