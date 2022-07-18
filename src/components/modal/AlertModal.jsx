import React from 'react'
import styled from 'styled-components'
import ModalPortal from '../../Portal'

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    visibility: ${(props) => props.alertModal === false ? "hidden" : "visible"};
`

const ModalContent = styled.div`
    display: inline-block;
    border-radius: 10px;
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background-color: white;
    overflow: hidden;
`

const Strong = styled.strong`
    display: inline-block;
    padding: 22px 55px;
    border-bottom: 0.5px solid #DBDBDB;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    font-family: 'Spoqa Han Sans Neo';
`

const AlertMenuList = styled.ul`
    display: flex;
    
`

const AlertItem = styled.li`
    text-align: center;
    flex-grow: 1;
    :not(:last-child) {
        border-right: 0.5px solid #DBDBDB;
    }
`

const Button = styled.button`
    background-color: white;
    cursor: pointer;
    width: 100%;
    padding: 14px 0;
`

const StyledButton = styled(Button)`
    color: #F26E22;
`

function AlertModal(props) {

    const {content, alertModal, setAlertModal ,setModal ,alertButton} = props

    return (
        <ModalPortal>
            <ModalWrapper alertModal={alertModal}>
                <ModalContent>
                    <Strong>{content}</Strong>
                    <AlertMenuList>
                        <AlertItem>
                            <Button onClick={() => {
                                setModal(false)
                                setAlertModal(false)
                            }}>취소</Button>
                        </AlertItem>
                        <AlertItem>
                            <StyledButton onClick={alertButton.onClick}>{alertButton.content}</StyledButton>
                        </AlertItem>
                    </AlertMenuList>
                </ModalContent>
            </ModalWrapper>
        </ModalPortal>
    )
}

export default AlertModal
