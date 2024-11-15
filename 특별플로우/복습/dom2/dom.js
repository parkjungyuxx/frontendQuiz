import mockPost from "./mock.js";

console.log(mockPost);

const $postDetail = document.querySelector("#post-detail");
const $repliesList = document.querySelector("#replies-list");

const pEl = document.createElement("p");
pEl.innerText = mockPost.title;
$postDetail.appendChild(pEl);

mockPost.Replies.forEach((el, i) => {
  const li = document.createElement("li");
  li.innerText = el.content;
  $repliesList.appendChild(li);
});

const addInput = document.querySelector("input");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", (event) => {
  const newComment = addInput.value;
  const li = document.createElement("li");
  li.innerText = newComment;
  $repliesList.appendChild(li);

  mockPost.Replies.push({ content: newComment });
  console.log(mockPost.Replies);
});

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
