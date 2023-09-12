import './ChangingInfoHeader.scss';

interface Props {
    totalImport: string;
    state: string;
    handleSend: () => void;
}

export default function ChangingInfoHeader(props: Props) {
    const { totalImport, state, handleSend } = props;

    return (
        <div className="changingInfoContainer">
            <div className="statesContainer">
                <div className="totalNumberContainer">
                    <label htmlFor="totalNumber">
                        Total Number
                        <input id="totalNumber" name="totalNumber" type="text" readOnly value={totalImport} />
                    </label>
                </div>
                <div>
                    <label htmlFor="state">
                        State
                        <input id="state" name="state" type="text" readOnly value={state} />
                    </label>
                </div>
            </div>
            <button type="submit" disabled={state !== `100 %`} onClick={handleSend}>
                Send
            </button>
        </div>
    );
}
