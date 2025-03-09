const getData = async () => {
    try {
        const response = await fetch("/api");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export {getData}