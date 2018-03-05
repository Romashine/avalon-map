import * as React from "react";

export interface IMapMenuProps {
}
export interface IMapMenuState {

}

export class MapMenu extends React.Component<IMapMenuProps, IMapMenuState> {

    constructor(props: IMapMenuProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div className="mapMenu"
            onWheel={this.onWheel.bind(this)}
            onMouseDown={this.onMouse.bind(this)}
            onMouseMove={this.onMouse.bind(this)}
            >
                <p><input name="mapType" type="radio" value="kingdoms" />Kingdoms</p>
                <p><input name="mapType" type="radio" value="alliance" />Alliances</p>
                <p><input type="checkbox" value="batle" />IB</p>
                <p><input type="checkbox" value="grid" />Grid</p>
            </div>
        );
    }
    protected onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        // Отмена передачи события onWheel родительским элементам
        e.preventDefault();
        e.stopPropagation();
    }
    protected onMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        // Отмена передачи события onWheel родительским элементам
        e.preventDefault();
        e.stopPropagation();
    }
}