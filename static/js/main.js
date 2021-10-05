const filters = document.getElementById('filters');

// Seat click event
filters.addEventListener("click", function (e) {
    if (
      e.target.parentElement.classList.contains("acc-wrapper") 
    ) {
        let AccBody = e.target.parentElement.getElementsByClassName('acc_body')[0];
        AccBody.classList.toggle("show");
    } 

    if (
        e.target.classList.contains("chb-arrow-down")
    ){
        let subList = e.target.parentElement.getElementsByClassName('sub-inputs-list')[0];
        subList.classList.toggle("show");
    }
  });