const initialLikes = 0;
const initialDislikes = 0;

let likesCount = initialLikes;

let dislikesCount = initialDislikes;


const likesBtn = document.getElementById("likeBtn");

const dislikesBtn = document.getElementById("dislikeBtn");
const commentBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("Submit");
const clearBtn = document.getElementById("clear");
const commentsList = document.getElementById("commentsList");

likesBtn.innerText = "👍" + likesCount;

dislikesBtn.innerText = "👎" + dislikesCount;

likesBtn.addEventListener("click", () => {
    likesCount++;

    likesBtn.innerText = "👍" + likesCount;
    setCookie();
});


dislikesBtn.addEventListener("click", () => {
    dislikesCount++;

    dislikesBtn.innerText = "👎" + dislikesCount;
    setCookie();
});

submitBtn.addEventListener("click", () => {
    const pElem = document.createElement("p");
    pElem.innerText = commentBox.value.trim();
    commentsList.appendChild(pElem);
    commentBox.value = "";
    setCookie();


});

clearBtn.addEventListener("click", () => {
     likesCount = initialLikes;

 dislikesCount = initialDislikes;
 likesBtn.innerText = "👍" + likesCount;
 dislikesBtn.innerText = "👎" + dislikesCount;

    commentBox.value = "";


    const cookieString = "voted=true; path=/; expires=" +new Date(Date.now()-1 * 60 *1000).toUTCString();
    document.cookie = cookieString;
   
    document.getElementById("commentsList").innerHTML = "";

   
   
    
 


});


function setCookie() {
    const expiresOn = new Date(Date.now() + 1 * 60 * 1000);
    const cookieString = "voted=true; path=/; expires=" + expiresOn.toUTCString();
    document.cookie = cookieString;


}




window.onload = function() {
    if (document.cookie && document.cookie.indexOf("voted") > -1) {
        console.log("cookie exists");

        

        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        submitBtn.disabled = true;
    }
};