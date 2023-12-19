import {memo, useCallback, useEffect, useMemo, useState} from "react";
import useTranslate from "../../hooks/use-translate";
import useStore from "../../hooks/use-store";
import useSelector from "../../hooks/use-selector";
import Select from "../../components/select";
import Input from "../../components/input";
import SideLayout from "../../components/side-layout";

/**
 * Контейнер со всеми фильтрами каталога
 */
function CatalogFilter() {

  const store = useStore();

  const select = useSelector(state => ({
    sort: state.catalog.params.sort,
    query: state.catalog.params.query,
    categories: state.catalog.categories,
  }));

  const callbacks = {
    // Сортировка
    onSort: useCallback(sort => store.actions.catalog.setParams({sort}), [store]),
    // Поиск
    onSearch: useCallback(query => store.actions.catalog.setParams({query, page: 1}), [store]),
    // Сброс
    onReset: useCallback(() => store.actions.catalog.resetParams(), [store]),
  };

  useEffect(() => {
    store.actions.catalog.loadCategories();
  },[]);

  const options = {
    sort: useMemo(() => ([
      {value: 'order', title: 'По порядку'},
      {value: 'title.ru', title: 'По именованию'},
      {value: '-price', title: 'Сначала дорогие'},
      {value: 'edition', title: 'Древние'},
    ]), []),
    categoriesList: useMemo(() => {
      const allCategories = [{ value: 'all', title: 'Все' }];
      const updatedCategories = allCategories.concat(select.categories.map(category => ({
        value: category._id,
        title: category.title
      })));
      return updatedCategories;
    }, [select.categories])
  };

  const {t} = useTranslate();

  return (
    <SideLayout padding='medium'>
      <Select options={options.sort} value={select.sort} onChange={callbacks.onSort}/>
      <Select options={options.categoriesList} value={'Все'} onChange={''}/>
      <Input value={select.query} onChange={callbacks.onSearch} placeholder={'Поиск'}
             delay={1000}/>
      <button onClick={callbacks.onReset}>{t('filter.reset')}</button>
    </SideLayout>
  )
}

export default memo(CatalogFilter);
