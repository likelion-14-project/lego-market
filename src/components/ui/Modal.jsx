import React from "react";
import styled from "styled-components";
const Button = styled.button`
display:block;
background-color: white;
`;
const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header,} = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
          <Button>삭제</Button>
          <Button>수정</Button>
          <a href="#">웹사이트에서 보기</a>
          </main>
          <footer>
            <button className="close" onClick={close}></button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
