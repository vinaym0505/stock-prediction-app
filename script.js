async function predict(){

    const stock = document.getElementById("stock").value;

    const response = await fetch("https://stock-prediction-app-o3fy.onrender.com//predict",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            stock:stock
        })
    });

    const data = await response.json();

    document.getElementById("result").innerHTML =
        "Predicted Price: " + data.prediction;
}
