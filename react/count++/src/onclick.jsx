function OnClicker() {
    let count = 0;
    const handleClick = () => {
        count++;
        console.log("Count:", count);
    };

    return (
        <div>
            <button className="Button" onClick={handleClick}>Click To add 😎</button>
        </div>
    );
}

export default OnClicker;
