import {APIServer} from '@src/utils/classes/APIService';
// import {Resp, RespType, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {Box, HStack, View, ScrollView} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PaginationProps} from '.';
import {Loading} from '../loading';
import {LoadingButton} from '../loading_btn';
import {MyText} from '../my_text';

export function Pagination({
  render,
  position = 'buttom',
  isScroll,
  baseUrl,
  prefixUrl,
  queryString,
}: PaginationProps) {
  const [pages, setPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [dataServer, setDataServer] = useState<[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const api = new APIServer(baseUrl ?? 'http://10.2.50.26:3000', {
    certignahash: 'ySsPUR23',
    certignarole: 2,
    certignauser: 'pps#test',
  });
  const urlFormat = (): string => {
    let stringQueries = `page=${page}`;
    for (var key in queryString) {
      stringQueries += `&${key}=${queryString[key]}`;
    }
    return `${prefixUrl ?? '/api/products'}?${stringQueries}`;
  };
  const LENGTH_PAGINATED = 2;
  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);

      const url = urlFormat();
      try {
        // for (let i = 1; i <= 1000; i++) {
        //   const body = {
        //     title: 'A cool product ' + i,
        //     price: 14.99 * i,
        //     content: 'This is actually an sick product' + 14.99 * i,
        //   };
        //   await api.ngrequest(
        //     '/api/products',
        //     Verb.Post,
        //     RespType.Json,
        //     [Resp.OK],
        //     body,
        //     {
        //       Authorization:
        //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0aGVvLmNyYWlnQGV4YW1wbGUuY29tIiwibmFtZSI6IlRoZW8gQ3JhaWciLCJpYXQiOjE2NzUyMTc3MzF9.iI0Zlr-O7DovN162xyUgEmPxMFj0mbNjUfbpzg3i81k',
        //     },
        //   );
        // }
        const {items, totalPages} = await api.ngrequest(url);
        setPages(totalPages);
        setDataServer(items);
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);
        setLoading(false);
        setError('Some error occured');
      }
    };

    fecthPosts();
  }, [page]);

  let middlePagination: JSX.Element | JSX.Element[];

  if (pages <= LENGTH_PAGINATED) {
    middlePagination = (
      <HStack flexWrap={'wrap'} space={1}>
        {[...Array(pages)].map((_, idx) => (
          <LoadingButton
            key={idx + 1}
            onPress={() => setPage(idx + 1)}
            disabled={page === idx + 1}
            type={page === idx + 1 ? 'dark' : undefined}
            text={`${idx + 1}`}
          />
        ))}
      </HStack>
    );
  } else {
    const startValue =
      Math.floor((page - 1) / LENGTH_PAGINATED) * LENGTH_PAGINATED;
    middlePagination = (
      <HStack flexWrap={'wrap'} space={1}>
        {[...Array(LENGTH_PAGINATED + 2)].map((_, idx) => (
          <LoadingButton
            key={startValue + idx + 1}
            disabled={page === startValue + idx + 1}
            type={page === startValue + idx + 1 ? 'dark' : undefined}
            onPress={() => setPage(startValue + idx + 1)}
            text={`${startValue + idx + 1}`}
          />
        ))}

        <LoadingButton text="..." />
        <LoadingButton onPress={() => setPage(pages)} text={`${pages}`} />
      </HStack>
    );

    if (page > LENGTH_PAGINATED) {
      if (pages - page >= LENGTH_PAGINATED) {
        LENGTH_PAGINATED;
        middlePagination = (
          <HStack flexWrap={'wrap'} space={1}>
            <LoadingButton onPress={() => setPage(1)} text="1" />
            <LoadingButton text="..." />
            <LoadingButton
              onPress={() => setPage(startValue)}
              text={`${startValue}`}
            />
            {[...Array(LENGTH_PAGINATED)].map((_, idx) => (
              <LoadingButton
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                type={page === startValue + idx + 1 ? 'dark' : undefined}
                onPress={() => setPage(startValue + idx + 1)}
                text={`${startValue + idx + 1}`}
              />
            ))}

            <LoadingButton text="..." />
            <LoadingButton onPress={() => setPage(pages)} text={`${pages}`} />
          </HStack>
        );
      } else {
        let amountLeft = pages - page + LENGTH_PAGINATED;
        middlePagination = (
          <>
            <LoadingButton onPress={() => setPage(1)} text="1" />
            <LoadingButton text="..." />
            <LoadingButton
              onPress={() => setPage(startValue)}
              text={`${startValue}`}
            />
            {[...Array(amountLeft)].map((_, idx) => (
              <LoadingButton
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                type={page === startValue + idx + 1 ? 'dark' : undefined}
                style={pages < startValue + idx + 1 ? {display: 'none'} : null}
                onPress={() => setPage(startValue + idx + 1)}
                text={`${startValue + idx + 1}`}
              />
            ))}
          </>
        );
      }
    }
  }

  const Page = () =>
    pages > 1 ? (
      <HStack flexWrap={'wrap'} space={1}>
        <LoadingButton
          text="«"
          onPress={() => setPage(page => page - 1)}
          disabled={page === 1}
        />
        {middlePagination}
        <LoadingButton
          text="»"
          onPress={() => setPage(page => page + 1)}
          disabled={page === pages}
        />
      </HStack>
    ) : (
      <></>
    );
  return (
    <View height={'100%'} width={'98%'} p={2}>
      <View
        height={'90%'}
        width={'100%'}
        display="flex"
        justifyContent={'center'}
        alignItems="center"
      >
        {position === 'top' && <Page />}
        <View height={'92%'} width="100%">
          {loading ? (
            <Loading
              spinnerStyle={{
                size: 'lg',
                colorScheme: 'cyan',
              }}
            />
          ) : error ? (
            <MyText type="danger">{error}</MyText>
          ) : (
            render &&
            (isScroll ? (
              <ScrollView height={'100%'} width={'100%'}>
                {dataServer?.map((item, index) => (
                  <View key={index}>{render(item)}</View>
                ))}
              </ScrollView>
            ) : (
              dataServer?.map((item, index) => (
                <View key={index}>{render(item)}</View>
              ))
            ))
          )}
        </View>
        <Box height={'2%'} />
        {position === 'buttom' && <Page />}
      </View>
    </View>
  );
}
