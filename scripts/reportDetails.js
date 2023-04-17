const editBtn = document.getElementById("editBtnReport")
const reportModal = document.getElementById("reportModal")
editBtn.onclick = function(){

    reportModal.style.display = "block"
}

const closeModal = document.getElementById("closeModalBtn")

closeModal.onclick= function(){
    reportModal.style.display = "none"

}