import { memo, useCallback, useEffect, useState } from 'react';
import BasketTool from "../../components/basket-tool";
import Head from "../../components/head";
import useSelector from "../../store/use-selector";
import useStore from "../../store/use-store";
import ItemDescription from "../../components/item-description"
import { Link, useParams } from "react-router-dom";
import PageLayout from "../../components/page-layout";


function ItemInfo() {

    const [currentItem, setCurrentItem] = useState(null);

    const store = useStore();

    let { itemId } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const itemData = await store.actions.catalog.loadItem(itemId);
            setCurrentItem(itemData);
            console.log(itemData);
        };
        fetchItem();
    }, [itemId, store]);

    const callbacks = {
        // Добавление в корзину
        addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    }

    const select = useSelector(state => ({
        list: state.catalog.list,
        amount: state.basket.amount,
        sum: state.basket.sum
    }));

    return (
        <PageLayout>
            {currentItem &&
                <>
                    <Head title={currentItem.title} />
                    <Link to={`/`}>Главная</Link>
                    <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} />
                    <ItemDescription description={currentItem.description} year={currentItem.edition} category={currentItem.category.title} country={currentItem.madeIn.title} price={currentItem.price} onAdd={callbacks.addToBasket} itemId={itemId}/>
                </>
            }

        </PageLayout>
    );
}

export default memo(ItemInfo);
