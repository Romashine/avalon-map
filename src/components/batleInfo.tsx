import * as React from "react";

export interface IBatleInfoProps {
}
export interface IBatleInfoState { }

export class BatleInfo extends React.Component<IBatleInfoProps, IBatleInfoState> {

    constructor(props: IBatleInfoProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div className="BatleInfo"
            style={{
                width: 300,
                height: 400,
                top: 30,
                right: 30,
            }}>
            Информация о сражении!
            </div>
        );
    }
}