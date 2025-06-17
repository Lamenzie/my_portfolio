function MyButton() {
    const handleClick = () => {
        window.alert("Pozor! Klikl si moc rychle...");
    };

    return (
        <div>
            <button 
            onClick={handleClick}
            className="text-2xl text-red-200 bg-purple-600 absolute bottom-10 left-10 border-2 border-double p-4 m-4">
            I'm a big button, click on me.
            </button>
        </div>
    );
}

export default MyButton;
