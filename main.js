
const pinfo_status = [0, 0, 0, 0]; // 0 - hidden, 1 - visible
// [connect, interest, qualification, blog]

function changePosition(id, hasPos) { 
    // if hasPos is set, position and top as None for id element
    // else set position as absolute and top as 10px for id element
    const domEle = document.getElementById(id);
    if (hasPos == true) {
        domEle.style.position = 'static';
        domEle.style.top = 'none' ;
    } else if (hasPos == false) {
        domEle.style.position = 'absolute';
        domEle.style.top = '10px';
    }
}

function makePinfoVisible(id){
    const ones_indexes = [];
    pinfo_ids = ['connect', 'interest', 'qualification', 'blog'] ;
    let i = -1 ;
    //make all the other elements hidden
    while((i = pinfo_status.indexOf(1, i+1)) != -1){
        ones_indexes.push(i);
        const elem = document.getElementById(pinfo_ids[i]);
        elem.style.visibility = "hidden";
        changePosition(pinfo_ids[i], false);
        pinfo_status[i] = 0;
    }

    // make our selected element visible
    const elem = document.getElementById(id);
    changePosition(id, true);
    elem.style.visibility = "visible";
    let idx = pinfo_ids.indexOf(id);
    pinfo_status[idx] = 1;
}

function addEventListner2List(){
    let li_ids = [
        "connect-btn",
        "interest-btn",
        "qualification-btn",
        "blog-btn"
    ] ;

    const pinfoEle = document.querySelector("div.profile-info");
    for (li_item of li_ids) {
        const domEle = document.getElementById(li_item) ;

        // adding click on btn to display content
        domEle.addEventListener("mouseover", (event) => {
            let info_id = event.target.id.replace("-btn", "");
            makePinfoVisible(info_id) ;
            pinfoEle.classList.add("profile-info-anim");
        })

        domEle.addEventListener("mouseleave", (event) => {
            let info_id = event.target.id.replace("-btn", "");
            pinfoEle.classList.remove("profile-info-anim") ;
        })
    }

    const pinfoMenu = document.querySelector("div.profile-info-menu");

}

addEventListner2List() ;


messages = [
    "Knowledge Seeker", 
    "Self Taught Developer", 
    "Loves Programming", 
    "Loves Low Level systems",
    "Loves Backend Development"
];

const iconBtn = document.getElementById("msg-box-icon-");
const msgBoxHead = document.querySelector("h2.msg-box-head");
iconBtn.addEventListener("click", () => {
    let val = msgBoxHead.innerText ;
    let idx = messages.indexOf(val) ;
    if (idx == 4) {
        idx = 0 ;
    } else {
        idx += 1 ;
    }
    let msg = messages[idx] ;
    msgBoxHead.innerText = msg ;

    msgBoxHead.classList.remove("text-float-anim");
    
    void msgBoxHead.offsetWidth;
    msgBoxHead.classList.add("text-float-anim");
});     

iconBtn.addEventListener("mouseover", () => {
    msgBoxHead.classList.add("text-float-anim");
});

iconBtn.addEventListener("mouseleave", () => {
    msgBoxHead.classList.remove("text-float-anim");
});

const emailLinkBtn = document.getElementById("email-field");
const copyMsgEle = document.querySelector("#email-field .clipboard-msg");

emailLinkBtn.addEventListener("click", (event) => {
    copyMsgEle.style.visibility = "visible";
    copyMsgEle.classList.add("clipboard-msg-anim");
    navigator.clipboard.writeText("jayeshhire48@gmail.com");
    event.preventDefault() ;
}) ;

copyMsgEle.addEventListener("animationend", () => {
    copyMsgEle.style.visibility = "hidden" ;
    copyMsgEle.classList.remove("clipboard-msg-anim") ;
});