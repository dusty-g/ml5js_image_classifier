window.onload = ()=>{
  

  const classifier = ml5.imageClassifier("MobileNet", ()=>{
    console.log("loaded")
  })
  
  let result = document.getElementById("result")
  let confidence = document.getElementById("confidence")


  document.getElementById("load_button").addEventListener("click", loadImage)
  document.getElementById("identify").addEventListener("click", identify)
  function loadImage(){

    let img_url = document.getElementById("img_url").value

    document.getElementById("image1").src = img_url
  }
  function identify(){
    let image = document.getElementById("image1")
    classifier.predict(image, (err, results)=>{
      console.log("error:", err)
      console.log(results)
  
      result.innerText = results[0].className
      confidence.innerText = results[0].probability.toFixed(4)
    })
  }

  

}
