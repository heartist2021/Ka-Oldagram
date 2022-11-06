import {posts} from "./data.js"

const postContent = document.getElementById("post-user")

document.addEventListener("dblclick", function(e){
        if (e.target.dataset.like){
            handleLikeClick(e.target.dataset.like)
        }
    })

document.addEventListener("click", function(e){
    if (e.target.dataset.heart){
        handleLikeClick(e.target.dataset.heart)
    }
})

function getPost(){
    let postHTML = ""

    posts.forEach(function(post){

        
        let likeIconClass = "reg-icon"
        if (post.isLiked){
            likeIconClass = "red-icon"
        }

        let dataHeart = `data-heart= "${post.postId}"`

        postHTML += 
        `
        <div class="post-container container">
        <div class="post-user">
          <img
            src="${post.avatar}"
            alt="${post.altAvatar}"
            class="user-pic"
          />
          <div class="user-text">
            <p class="user-name">${post.name}</p>
            <p class="user-location">${post.location}</p>
          </div>
            </div>
        </div>
        <div>
        <img
          src="${post.postImage}"
          alt="${post.altPostedImage}"
          class="painting-post"
          data-like= "${post.postId}"
        />
        </div>
        <div class="container">
          <div class="icons">
          <div class="icon like" >
            
          <svg 
          
            class="like-color ${likeIconClass}"
            width="27" 
            height="25" 
            viewBox="0 0 27 25" 
            xmlns="http://www.w3.org/2000/svg">
            <path ${dataHeart} d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z"  stroke-width="2.32996"/>
           </svg>
          
          </div>
          <div class="icon comment">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4656 19.9827C16.0548 20.8407 14.3983 21.3348 12.6264 21.3348C7.47538 21.3348 3.29963 17.159 3.29963 12.008C3.29963 6.85691 7.47538 2.68115 12.6264 2.68115C17.7775 2.68115 21.9532 6.85691 21.9532 12.008C21.9532 14.3272 21.1068 16.4486 19.7059 18.0803C19.6678 18.1247 19.6293 18.1688 19.5903 18.2124L20.0909 20.5459L17.4656 19.9827ZM22.0997 18.8016C23.4729 16.8892 24.2832 14.5412 24.2832 12.008C24.2832 5.57011 19.0643 0.351192 12.6264 0.351192C6.18858 0.351192 0.969666 5.57011 0.969666 12.008C0.969666 18.4458 6.18858 23.6647 12.6264 23.6647C14.4916 23.6647 16.2591 23.2251 17.8262 22.443L23.1246 23.5796L22.0997 18.8016Z"
              />
            </svg>
          </div>
          <div class="icon share">
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.39065 3.99155C0.158854 2.93572 0.905529 0.917297 2.52789 0.917297H22.3081C23.6664 0.917297 24.5053 2.39911 23.8065 3.56383L13.8953 20.0824C13.0829 21.4365 11.0336 21.104 10.691 19.5625L8.60499 10.1753L1.39065 3.99155ZM10.9847 10.1433L12.6487 17.6315L20.1741 5.08915L10.9847 10.1433ZM18.6883 3.24726H4.10251L9.80354 8.13386L18.6883 3.24726Z"
              />
            </svg>
          </div>
        </div>
        <p class="likes">${post.likes} likes</p>
        <p class="comment">
          <span>${post.username}</span>
          ${post.comment}
        </p>
      </div>
      <div class="post-separator"></div>
       
        `
    })
    return postHTML
}

function renderPosts(){
    postContent.innerHTML = getPost()
}

renderPosts()


function handleLikeClick(postedImageId){
    const targetImageId = posts.filter(function(imageId){
        return imageId.postId === postedImageId
    })[0]
        
    
    if (!targetImageId.isLiked){
        targetImageId.likes++
        targetImageId.isLiked = true

    } else {
        targetImageId.likes++
        targetImageId.isLiked = false
    }
    
    renderPosts()

}