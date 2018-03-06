import * as React from "react";

export interface IBatleInfoProps {
    attack: string;
    defense: string;
    info: string;
    image?: any;
}
export interface IBatleInfoState { }

export class BatleInfo extends React.Component<IBatleInfoProps, IBatleInfoState> {

    constructor(props: IBatleInfoProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div className="batleInfo"
            style={{
                width: 300,
                height: 400,
                top: 30,
                right: 30,
            }}>
            <p>
            Информация о сражении!
            </p>
            <p>
            {"Атакующий: " + this.props.attack}
            </p>
            <p>
            {"Обороняющийся: " + this.props.defense}
            </p>
            {this.props.info}

            </div>
        );
    }
}