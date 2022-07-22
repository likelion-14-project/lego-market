# 레고마켓 
## 개요
- 레고마켓은 만든 레고를 자랑하기도 하고 중고판매도 하는 서비스 입니다.


## [배포 URL]
- 
- 테스트 계정
    - ID : test13@test.com
    - PW : 123123

## 팀원
- 박재모
- 이원형
- 이현섭
- 우혜빈

## 사용기술
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">

## 요구사항

<div align="left">
    <h2>역활분담</h2>
   </div>
   <br>
저희 프로젝트 팀은 페이지 별로 구현해서 합치는 방향으로 분담하였습니다.<br>
공통으로 사용되는 컴포넌트의 경우(버튼, 인풋양식 등등) 같이 회의를 해서 공통분담으로 진행했습니다.<br>

## 이원형
- 서비스 접속 초기화면
- 로그인화면 모달창(sns로그인, 로그인, 이메일회원가입)
- 홈 피드페이지
- 검색페이지 + 검색기능
- 사용자 프로피 페이지(공통분담) 에서 게시글섹션(목록형, 앨범형 버튼 및 기능 포함), 팔로우기능
- 하단 탭 메뉴
    
## 기능 구현

## 페이지 경로, 파일 구조
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


## 이슈 및 해결

## 중간 피드백 관련