window.onload = async () => {

    let data = await fetch("./spinner.json")
        .then((res) => res.json());

    console.log(data);

}

// Do some fun stuff with the random spinner
