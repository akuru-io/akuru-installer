import {useState} from 'react';
import Header from 'components/Header'; 
import DropDown from '../../components/DropDown';
import Button from 'components/Button';
import Input from 'components/Input';
import Checkbox from 'components/CheckBox';

import {
    Layout,
    Container,
    RowBox,
    ColumnBox,
    HeaderTitle,
    Text,
    GrayText,
    InforIcon,
    DropdownBox,
    InputBox,

} from './styled';

export default function Settings(){
    const url = 'https://api.akuru.io';
    const [language, setLanguage] =useState("Language");
    const [directoryUrl, setDirectoryUrl] =useState(url);
    const [subscriptionKey, setSubscriptionKey] =useState(null);
    const [openUpStartUp, setOpenUpStartUp] =useState(false);
    const [appUpdates, setAppUpdates] =useState(false);
    const [fontUpdates, setFontUpdates] =useState(false);

    const onLanguageselect = (option) => {
        setLanguage(option);
    };

    const onChangeUrl =(value) =>{
        setDirectoryUrl(value);
    };

    const onChangeKey=(key)=>{
        setSubscriptionKey(key);
    }

    const OnDirectoryChange=()=>{
        //Todo
    }

    const onSubKeyChange=()=>{
        // Todo
    }

    const pageTitle = "Settings";
    return(
      <Layout>
        <Header 
            title = {pageTitle}
            searchEnabled ={false}
        />
        <Container>
            <RowBox>
                <ColumnBox>
                    <Checkbox
                        id='#1'
                        label="Open on startup"
                        value={openUpStartUp}
                        checked={openUpStartUp}
                        onChange={setOpenUpStartUp}
                    />
                     <Checkbox
                        id='#2'
                        label="Check for app updates automatically"
                        value={appUpdates}
                        checked={appUpdates}
                        onChange={setAppUpdates}
                    />
                     <Checkbox
                        id='#3'
                        label="Check for font updates automatically"
                        value={fontUpdates}
                        checked={fontUpdates}
                        onChange={setFontUpdates}
                    />
                     <DropdownBox>
                        <DropDown 
                            currentLan ={language} 
                            handleSelect = {onLanguageselect}
                            isShow={false}
                        />
                    </DropdownBox> 
                </ColumnBox>

                <ColumnBox>
                    <Text>Default font directory URL <InforIcon/> </Text>
                    < Input 
                        placeholder= "Url"
                        value = {directoryUrl}
                        onChange={onChangeUrl}
                    />
                    <GrayText>Do not Change this </GrayText>
                    <Button 
                        text="Add another font directory"
                        onclick ={OnDirectoryChange}
                    />
                </ColumnBox>

            </RowBox>

            <HeaderTitle>Account</HeaderTitle>

            <Text>Subscription Key<InforIcon/> </Text>
            <InputBox>
                < Input 
                    placeholder= "Key"
                    onChange={onChangeKey}
                />
            </InputBox>
            <Text>Please get your subscriptionkey here </Text>
            <Button 
                text="Update"
                onClick ={onSubKeyChange}
            />
        </Container>
      </Layout>
    );
}