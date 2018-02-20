import * as React from "react";
import { Image, Layer, Stage } from "react-konva";

export interface IMapProps {
    imageScale: number;
}
export interface IMapState {
}

export class Map extends React.Component<IMapProps, IMapState> {

    public drag = false;

    constructor(props: IMapProps) {
        super(props);

        this.state = {
        };
    }

    public render() {
        return (
            <div ref="divImg" className="map">
                <img src="../dist/map.jpg"
                    className="dragme"
                    height={500 * this.props.imageScale} width={500 * this.props.imageScale} />
            </div>
        );
    }

    public componentDidMount() {
        const divImg = this.refs.divImg as HTMLElement;
        divImg.addEventListener("mousedown", this.startDrag());
        divImg.addEventListener("mousekeyup", this.stopDrag());
    }

    public startDrag(e: MouseEvent) {
        // determine event object
        if (!e) {
            e = this.refs.divImg.event;
        }
        if (e.preventDefault) {
            e.preventDefault();
        }

        // IE uses srcElement, others use target
        const targ = e.target ? e.target : e.srcElement;

        if (targ.className !== "dragme") {
            return;
        }
        // calculate event X, Y coordinates
        const offsetX = e.clientX;
        const offsetY = e.clientY;

        // assign default values for top and left properties
        if (!targ.style.left) { targ.style.left = "0px"; }
        if (!targ.style.top) { targ.style.top = "0px"; }

        // calculate integer values for top and left
        // properties
        const coordX = parseInt(targ.style.left);
        const coordY = parseInt(targ.style.top);
        this.drag = true;

        // move div element
        this.refs.divImg.onmousemove = this.dragDiv(e, offsetX, offsetY, coordX, coordY, targ);
        return false;

    }
    public dragDiv(e: any, offsetX: number, offsetY: number, coordX: number, coordY: number, targ: any) {
        if (!this.drag) {
            return;
        }
        if (!e) {
            e = window.event;
        }
        // var targ=e.target?e.target:e.srcElement;
        // move div element
        targ.style.left = coordX + e.clientX - offsetX + "px";
        targ.style.top = coordY + e.clientY - offsetY + "px";
        return false;
    }
    public stopDrag() {
        this.drag = false;
    }

}
