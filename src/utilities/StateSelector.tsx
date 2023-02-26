type StateType = {
    titleName: string;
    onClick: () => void;
};

export default function StateSelector({ titleName, onClick }: StateType) {
    return (
        <label className="label flex flex-col mx-1 cursor-pointer">
            <span className="label-text text-md text-navSelectorLabel">{titleName}</span>
            <input
                type="radio"
                name="radio-10"
                className="my-1 radio radio-sm checked:bg-navSelectorChecked checked:outline-none outline outline-2 outline-navHeading"
                onClick={onClick}
            />
        </label>
    );
}
