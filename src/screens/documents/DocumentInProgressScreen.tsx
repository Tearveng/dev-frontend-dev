import {HStack, IconButton, InfoIcon, ScrollView, View, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {API_URL} from "@src/config/env";
import {Loading} from "@components/commons/loading";
import {Localization} from "@src/i18n/languages";
import {useTranslation} from "react-i18next";
import {LoadingButton} from "@components/commons/loading_btn";
import {Dialog, useDialog} from "@components/commons/dailog";
import {ViewPdf} from "@components/templates/pdf";
import {MyText} from "@src/components/commons/my_text";
import {DocumentSession, SessionService} from "@src/services/session";

interface Params {
  id: number;
}

export const DocumentInProgressScreen = () => {
  const {t} = useTranslation()
  const {params} = useRoute();
  const _params: Params = params as Params;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDialog, setIsLoadingDialog] = useState(false);
  const [errorDetailDownload, setErrorDetailDownload] = useState<string | undefined| null>();
  const [fileBase64, setFileBase64] = useState<string | undefined| null>();
  const dialog = useDialog();
  const [documentSessions, setDocumentSessions] = useState<DocumentSession[]>([]);

  const header = {
    certignahash: 'ySsPUR23',
    certignarole: 2,
    certignauser: 'pps#test',
  }

  const sessionApi = new SessionService(API_URL ?? '', header);

  useEffect(() => {
    setIsLoading(true);
    (async function () {
      try {
        const data = await sessionApi.getDocumentSessions(_params.id);
        setDocumentSessions(data)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    })();
    return () => {};
  }, []);

  return (
    <ScrollView height={'100%'} width={'100%'} backgroundColor={'gray.900'}>
      <View height={'100%'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        {isLoading ? <Loading /> : documentSessions.length <= 0 ? <MyText type={'danger'}>{t(Localization('noDocument'))}</MyText> : documentSessions?.map((item,idx) => <HStack key={`${item?.abstract}_${idx}`} space={2} p={2} m={2} backgroundColor={'gray.700'} borderRadius={10}>
          <View>
            <MyText type={'white'}>{t(Localization('fileName'))}</MyText>
            <MyText type={'white'}>{t(Localization('title'))}</MyText>
            <MyText type={'white'}>{t(Localization('url'))}</MyText>
            <MyText type={'white'}>{t(Localization('abstract'))}</MyText>
          </View>
          <View>
            <MyText type={'white'}>{' : '} {item?.fileName}</MyText>
            <MyText type={'white'}>{' : '} {item?.title}</MyText>
            <MyText type={'white'}>{' : '} {item?.url}</MyText>
            <MyText type={'white'}>{' : '} {item?.abstract}</MyText>
          </View>
          <View display={'flex'} flex={1} justifyContent={'center'}>
            <IconButton
              onPress={async () =>{
                dialog.onOpen();
                setIsLoadingDialog(true);
                const data = await sessionApi.getDetailDocumentSession(`${item.url}/genuine`);

                if(!data){
                  setErrorDetailDownload(t(Localization('errorGettingContentFile')))
                }else{
                  try {
                    const file = await sessionApi.getContentDocumentSession(data.url);
                    setFileBase64(file)
                    console.log(file)
                  }catch (e){
                    console.log(e)
                  }
                }
                setIsLoadingDialog(false);
              }}
              icon={<InfoIcon />}
            />
          </View>
        </HStack>)}
      </View>
      <Dialog
        size="full"
        headerBackgroundColor={'gray.800'}
        bodyBackgroundColor={'gray.800'}
        footerBackgroundColor={'gray.800'}
        header={
          <MyText fontSize="lg" type="white">
            {t(Localization("fileViewer"))}
          </MyText>
        }
        buttons={
          <View>
            <LoadingButton text={'Close'} onPress={dialog.onClose} />
          </View>
        }
        isOpen={dialog.isOpen}
        onClose={dialog.onClose}
        body={
          errorDetailDownload ?
            <MyText>{errorDetailDownload}</MyText> : isLoadingDialog ?
              <View height={'100%'}>
                <Loading />
              </View> :
              <VStack height={'80'} width={'100%'} space={3} justifyContent={'center'} alignItems={'center'} >
                <View height={'100%'} width={'100%'}>
                  <ViewPdf uri={`data:application/pdf;base64,${fileBase64}`} height={'100%'}/>
                </View>
              </VStack>
        }
      />
    </ScrollView>
  );
};
