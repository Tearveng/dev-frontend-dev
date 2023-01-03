
import React, {useState} from 'react';
import {StyleSheet, Dimensions, View, Platform} from 'react-native';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';

const ViewPdf = () => {
  const pdfUrl = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
  const source = {
    uri: pdfUrl,
    cache: true,
  };
  const [numPages, setNumPages] = useState<number | null>(null);
  const pageNumber = 3;

  function onDocumentLoadSuccess({numPages}: any): void {
    setNumPages(numPages);
  }
  if (Platform.OS === 'web') {
    return (
      <div style={{margin:25}}>
        <Document file={'files/Web_Service_Signature_Certigna_v2.0.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>{numPages}</p>
       
      </div>
    );
  }
  const Pdf = require('react-native-pdf').default;
  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages: any) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page: any) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error: any) => {
          console.log(error);
        }}
        onPressLink={(uri: any) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default ViewPdf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
