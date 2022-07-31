import React from "react";
import { useEffect, useState } from "react";
import Modal from "../modal/modal/Modal";
import AlertModal from "../modal/alertModal/AlertModal";
import { Section, Head, Wrapper, Button, IMG, DIV, P } from "./ProductList.style";

const ProductList = (props) => {
    const { profileAccountName, myAccountName } = props;

    const [modal, setModal] = useState(false);
    const [alertModal, setAlertModal] = useState(false);
    const [targetProduct, setTargetProduct] = useState();
    const modalMenuList = [
        {
            content: "삭제",
            onClick: () => {
                setAlertModal(true);
            },
        },
        {
            content: "수정",
            onClick: () => {},
        },
        {
            content: "웹사이트에서 상품 보기",
            onClick: () => {},
        },
    ];

    const alertButton = {
        content: "삭제",
        onClick: async () => {
            const url = "https://mandarin.api.weniv.co.kr";
            const token = window.localStorage.getItem("token");
            const productId = targetProduct;
            try {
                const res = await fetch(url + "/product/" + productId, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                const json = await res.json();
                console.log(json);
                const productLoad = async () => {
                    const token = window.localStorage.getItem("token");
                    const res = await fetch(url + `/product/${profileAccountName}`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-type": "application/json",
                        },
                    });
                    const json = await res.json();
                    setProducts(json.product);
                    setModal(false);
                    setAlertModal(false);
                };

                // 함수 실행
                productLoad();
            } catch (err) {
                console.error(err);
            }
        },
    };

    const [products, setProducts] = useState([]);
    const url = "https://mandarin.api.weniv.co.kr";

    useEffect(() => {
        const productLoad = async () => {
            const token = window.localStorage.getItem("token");
            if (profileAccountName) {
                const res = await fetch(url + `/product/${profileAccountName}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                const json = await res.json();
                setProducts(json.product);
            }
        };

        // 함수 실행
        productLoad();
    }, [profileAccountName]);

    if (!products) {
        return <div></div>;
    }

    return (
        <>
            <Section>
                {products.length < 1 ? null : <Head>판매중인 상품</Head>}
                <Wrapper>
                    {products.map((product) => {
                        product.price = product.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        return (
                            <Button
                                onClick={() => {
                                    if (profileAccountName === myAccountName) {
                                        setModal(!modal);
                                        setTargetProduct(product.id);
                                    } else {
                                        window.open(product.link);
                                    }
                                }}
                                key={`${product.id}`}
                            >
                                <IMG src={product.itemImage} alt={product.itemName}></IMG>
                                <DIV>{product.itemName}</DIV>
                                <P>{product.price}원</P>
                            </Button>
                        );
                    })}
                </Wrapper>
            </Section>
            <Modal modal={modal} setModal={setModal} modalMenuList={modalMenuList} />
            <AlertModal
                alertModal={alertModal}
                setAlertModal={setAlertModal}
                setModal={setModal}
                content={"상품을 삭제할까요?"}
                alertButton={alertButton}
            />
        </>
    );
};
export default ProductList;
