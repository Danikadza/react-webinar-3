import { memo } from 'react';
import useStore from "../../hooks/use-store";
import useTranslate from "../../hooks/use-translate";
import Navigation from "../../containers/navigation";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import ProfileCard from "../../components/profile-card";
import LoginButton from "../../containers/login-tool";
import LoginMenu from "../../containers/login-menu";
import LocaleSelect from "../../containers/locale-select";


function Profile() {

    const { t } = useTranslate();

    return (
        <PageLayout>
            <LoginButton/>
            <Head title={t('title')}>
                <LocaleSelect />
            </Head>
            <Navigation />
            <ProfileCard/>
        </PageLayout>
    );
}

export default memo(Profile);