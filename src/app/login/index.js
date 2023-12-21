import { memo } from 'react';
import useStore from "../../hooks/use-store";
import useTranslate from "../../hooks/use-translate";
import useInit from "../../hooks/use-init";
import Navigation from "../../containers/navigation";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import LoginButton from "../../containers/login-tool";
import LoginMenu from "../../containers/login-menu";
import LocaleSelect from "../../containers/locale-select";


function Main() {

    const { t } = useTranslate();

    return (
        <PageLayout>
            <LoginButton/>
            <Head title={t('title')}>
                <LocaleSelect />
            </Head>
            <Navigation />
            <LoginMenu/>
        </PageLayout>
    );
}

export default memo(Main);