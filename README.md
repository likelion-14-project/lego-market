# 레고 마켓

### 🙏🏼 중간 피드백 요청 사항입니다..

<details>
<summary>현섭: 아주아주 완전 완전 냉정하게 피드백 부탁드립니다..!!</summary>
<div markdown="1">
<ol>
<li>useAxios를 제외한 커스텀훅들을 만들어봤는데 제대로 만들고 사용하고 있는것인지 궁금합니다.</li>
<li>또한, 커스텀 훅을 포함한 맡은 부분에 대해서 try catch를 사용한 에러처리가 잘되어있는지 궁금합니다.</li>
<li>제가 작성한 코드들에 대해서 리렌더링이 자주 일어나게되는거 같은데,, 조금더 효율적인 방법이 있을지 궁금합니다.</li>
<ul>
</div>
</details>
<details>
<summary>재모</summary>
<div markdown="1">
전체적으로 그냥 한번 체크해주시면 좋겠습니다
</div>
</details>
</details>
<details>
<summary>원형: 아주아주 완전 완전 냉정하게 피드백 부탁드립니다..!! </summary>
<div markdown="1">
<ol>
<li> Splash 에서 토큰확인 후 /home 으로 넘어가는 부분이 있는데 이 부분도 라우터파일에서 처리를 해야하는지 궁금합니다. </li>
<li> 토큰, baseURL 을 따로 설정해서 컴포넌트에서는 url, 경로만 config 로 넘겨서 값만 받아오고 싶었고  axios 공부하면서 intercept 도 사용해보고 싶어서 useAxios 를 만들어서 썼습니다. </li>
(이 부분은 일단 공부하는 목적에서 팀원분들 다 따로 구현했습니다) 
최종적으로는 api 호출을 한 파일에서 관리해야 한다고 하신점에서 이 방법은 옳지 않은것 같은데 이렇게 useAxios 를 따로 사용하는 예시에는 어떤것이 있는지 궁금합니다.
<li>Navbar.jsx 안에서 NavFooterItem 으로 컴포넌트를 따로 빼서 구현했는데 불필요한 분리였는지 알고싶습니다.</li>
</ol>
</div>
</details>
<details>
<summary>혜빈 </summary>
<div markdown="1">
<ul>
<li> 구글링으로 이것저것 추가하며 구현되는 대로,,,하드코딩으로만 구현하였는데,, 어떤 코드 부분을 개선해야 할지 전반적으로 피드백 받고 싶습니다.. </li>
<ul>
</div>
</details>



<br>
<hr>

### [배포 URL]

-   URL:
-   테스트 계정
    -   🧑🏻‍💻 ID : test13@test.com
    -   🔐 PW : 123123

<br>

### [ 프로젝트 설치 및 실행 방법 ]

```
npm install
npm start
```

<br>

## 💡 개요

```
🟥  레고마켓은 레고에 진심인 사람들의 SNS와 마켓 서비스를 제공합니다.

🟨  판매자는 자신의 스토어에서 판매하고 있는 레고를 등록하여 판매 또는 홍보할 수 있습니다.

🟩  사용자 간의 팔로워, 팔로우 기능으로 서로 게시물을 구경하며, 원하는 게시물에 '좋아요'를 누르거나 댓글을 달수 있습니다.

🟦  물론 레고가 없는 사용자도 플랫폼의 모든 기능을 사용할 수 있습니다.

```

 <br>
 
<div align='left'>
<h2> 👨‍👨‍👧‍👦 팀원 소개 </h2>

|                                                               **FE 이현섭**                                                               |                                                    **FE 박재모**                                                     |                                                        **FE 이원형**                                                         |                                                  **FE 우혜빈**                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
|                           <img src="https://avatars.githubusercontent.com/u/94344796?v=4" height=180 width=180>                           |                <img src="https://avatars.githubusercontent.com/u/98381294?v=4" height=180 width=180>                 |                    <img src="https://avatars.githubusercontent.com/u/54429762?v=4" height=180 width=180>                     |              <img src="https://avatars.githubusercontent.com/u/98005356?v=4" height=180 width=180>              |
|                                        **github**: [leehyeonseop](https://github.com/leehyeonseop)                                        |                                 **github**: [Jamgoori](https://github.com/Jamgoori)                                  |                                    **github**: [bigfile57](https://github.com/bigfile57)                                     |                             **github**: [Hyebin-woo](https://github.com/Hyebin-woo)                             |
| ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![Development%20leader](https://img.shields.io/badge/Development%20leader-f8b62d) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![Planning%20leader](https://img.shields.io/badge/-Planning%20leader-f67280) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb)![Team%20leader](https://img.shields.io/badge/-Team%20leader-green) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb)![Design%20leader](https://img.shields.io/badge/-Design%20leader-orange) |

</div>
<br>

## ⚙️ 기술

**➡️ FrontEnd**

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">

**➡️ BackEnd** 제공된 API 사용

<br>

## 🔎 이슈 관리

-   [🔗 GitHub](https://github.com/likelion-14-project/lego-market), [🔗 GitHub_Project](https://github.com/likelion-14-project/lego-market/projects/1), [🔗 GitHub_issues](https://github.com/likelion-14-project/lego-market/issues)
-   Notion
-   Figma

<br>
<br>

## 💡 요구사항

### [기능 구현]

    - 🔐 인증
        - 로그인
        - 회원가입
        - 회원 정보 수정
        - 유효성 평가

    - 🎁 상품
        - 상품 목록 / 등록 / 수정 / 삭제
        - 이미지 파일 업로드 / 수정 / 미리보기
        - 유효성 평가

    - 📋 게시글
        - 게시글 목록 / 등록 / 수정 / 삭제
        - 다중 이미지 파일 업로드 / 수정 / 미리보기

    - 💬 댓글
        - 댓글 등록 / 삭제

    - 🔍 검색

    - 👬 follow / unfollow

    - ❤️  좋아요

<br>
<br>
 <h2> 🧩 역할 분담</h2>
 
 - 저희 프로젝트 팀은 페이지 별로 구현해서 합치는 방향으로 분담하였습니다.

-   공통으로 사용되는 컴포넌트의 경우(버튼, 인풋양식 등등) 공통분담으로 진행했습니다.

<br>

### 🧑🏻‍💻 이현섭 
- 사용자 프로필 페이지(사용자 정보)
- 이메일 로그인 페이지 
- 회원가입 페이지
- 내 프로필 수정 페이지
- 기본 모달, Alert 모달
- 404페이지
- 유저정보 context 관리
- Custom Hook 제작 

<br>

### 🧑🏻‍💻 박재모 
- 로그인 페이지 구현
- 상품 등록, 수정, 삭제
- 프로필에서 상품리스트 불러오기
- 팔로우 / 언팔로우 기능 구현
<br>

### 🧑🏻‍💻 이원형 

-   서비스 접속 초기화면
-   로그인화면 모달창(sns로그인, 로그인, 이메일회원가입)
-   홈 피드페이지
-   검색페이지 + 검색기능
-   사용자 프로필 페이지(공통분담)에서 게시글 섹션(목록형, 앨범형 버튼 및 기능 포함), 팔로우기능
-   하단 탭 메뉴
-   게시글 하단의 좋아요 버튼, 좋아요 기능

<br>

### 👩🏻‍💻 우혜빈 

-   전반적인 디자인 기획 
-   게시글과 이미지 업로드 기능 구현
-   댓글 추가, 수정, 삭제 기능 구현
-   팔로우 / 팔로잉 목록 페이지 구현
-   채팅창 ui구현

<br>
<br>
<hr>

## 🌲 페이지 경로, 파일 구조
```
📦Lego-Market
 ┣ 📂 public
 ┃ ┣ 📂 images               // 이미지 파일 폴더
 ┃ ┣ 📂 icons                // 아이콘 파일 폴더
 ┃ ┗ index.html
 ┃ 📦src
 ┃ ┣ 📂components       //라우터에 적용할 페이지에 포함될 컴포넌트들을 용도마다 폴더로 나눠서 관리
 ┃ ┃ ┣ 📂addproduct
 ┃ ┃ ┣ 📂chat
 ┃ ┃ ┣ 📂comment
 ┃ ┃ ┣ 📂follow
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┣ 📂join
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┣ 📂postupload
 ┃ ┃ ┣ 📂productlist
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┗ 📂ui             // 공통으로 사용되는 컴포넌트 폴더
 ┃ ┣ 📂context          // 로그인 한 사용자 정보를 담기 위한 context 파일 관리 폴더
 ┃ ┣ 📂hooks            // 만들어서 사용한 훅 폴더
 ┃ ┣ 📂pages            // 페이지 컴포넌트 
 ┃ ┣ 📂routes           // 라우터 파일 관리
 ┃ ┣ 📂styles           // 전역 styled-component 관리
 ┃ ┣ 📂utils            // 기능 함수 관리
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜Portal.js
 ┃ ┗ 📜index.js
 ┣ 📜 .gitignore
 ┣ 📜 README.md
 ┣ 📜 package-lock.json
 ┗ 📜 package.json
```
### 🙌 이슈 및 해결 (추가 예정)
