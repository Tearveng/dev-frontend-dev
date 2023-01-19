
import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Box } from "native-base";

const ViewPdf = () => {
  const pdfUrl = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
  const source = {
    uri: pdfUrl,
    cache: true,
  };
  const [numPages, setNumPages] = useState<number | null>(null);
  const pageNumber = 1;

  function onDocumentLoadSuccess({ numPages }: any): void {
    setNumPages(numPages);
  }
  if (Platform.OS === 'web') {

    return (
      <Box alignItems={'center'} style={{ margin: 25 }}>
        <Document
          file={'files/Web_Service_Signature_Certigna_v2.0.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber} />
        </Document>
        <p>{numPages}</p>
      </Box>
    );
  }

  const Pdf = require('react-native-pdf').default;
  return (
    <Box>
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
    </Box>
  );
};

export default ViewPdf;

const styles = StyleSheet.create({
  textLayer:{
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    // flex: 1,
    width: "100%",
    height: "100%",
  },
});
