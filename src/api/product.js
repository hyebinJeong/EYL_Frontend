import api from '.';

// 임시 mock 데이터
// export const mockData = [
//   {
//     id: 1,
//     name: '레드애플',
//     price: 5000,
//     imageUrl:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuAUPu5fRuyOvK6vVK08TB_UmGtwcAmC5CUO_Ar-qX_Hr7RRjd9RqEqZKpFYo4PpIuPPUBIZOh7KuMNdVc2afZy9PuiFbwmb61p9KqRf7KB2bkUILGQ74I8Kr1OHHIG8C6FTFyrFLp2GBaSH60sOf_Sj9t-bsYVXzACAbJsJuk-VOzzCjg1HwnaD_MfvY0Mrnk-Nzey53zleiZ26fPo-sVS-a2mtf9rK_s877Dd6sk72WRnrAuDHB-JNkDzA_BFLjXljTSqiepCpUQ',
//     category: 'POMES',
//     releaseDate: '2025-06-01',
//     sales: 110,
//     stock: 3,
//     description: '아삭하고 달콤한 빨간 사과입니다.',
//   },
//   {
//     id: 2,
//     name: '청포도',
//     price: 4500,
//     imageUrl:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuDaZu_tSvLmopF8PqP8VlsumDaVQU58sms9l65rHeQnTsHVtaqgJb9AJLHXviqn3g0KBmlBrgtq36wjAcDl2pOFmi-NxZ8lduzQJnVMJ3Ox3SBIAkGnzAtmb23u730Lq3nzwEwESiiTdb0nGe1KYDok9hpDz6lnPNru4LVjVNNynXn3amQ-feMQrQY8zm6s1L6ftIl176gcyzHdKyCu6dik5X3pRRiOyqo5kczb5mvHOMqXatdAhx7BNfC011nRq2NEvv-yeuh12g',
//     category: 'BERRIES',
//     releaseDate: '2025-06-10',
//     sales: 90,
//     stock: 2,
//     description: '새콤달콤한 맛이 일품인 청포도입니다.',
//   },
//   {
//     id: 3,
//     name: '청사과',
//     price: 8000,
//     imageUrl:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuCv5db987Dlh5vGBWrar_m_vlCN2QD28Rw7Og-7eDlE-WstGP5d9KVVxkpqiIDOWaLrI_K_TGBPlNunA4GpiGC6vh7Z_Wit9aVRV6gpZnw3waxV6FkW0oqyhM7Q0emGn7Guu1ADlEPA35u7YjxU9JhInvWBCcDcsRrT7BgxN4A8i2f3fmRmup_PtoNf3gsPTn2S0YTNZPnUURHx66dKbKVwVPZPDu7iL8UOk6pghHzP3VeXrhCc8CoIBcZcxHDIfNvy8P2tiW9pqA',
//     category: 'POMES',
//     releaseDate: '2024-05-01',
//     sales: 70,
//     stock: 1,
//     description: '상큼한 향이 매력적인 청사과입니다.',
//   },
//   {
//     id: 4,
//     name: '메론',
//     price: 7000,
//     imageUrl:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuAFj_MNLGbXS4WL2MHXAhMq5eF0KRkrGK6Cwkp533MJWlSssId8aj3Vnu6gnUOsLwzQLUgOmTXe1mAzoe_9buwlsTmPFtw9PVPsio-Owj-BDidDxMscXKJhSbMnreXV7IBDciQVBe3-BzoWNa258Igtb75TfQCO8j4dikgONPmifcYLwq4R_VdaWTbYpguA5B7YzMtA3Xk_4PyBOGhB4wTdMiNQ_kRo0--1pr7bJSK2TdCuyk1OdvZgkILGf1IqymbFMZaUcBo9dw',
//     category: 'MELONS',
//     releaseDate: '2025-06-15',
//     sales: 130,
//     stock: 3,
//     description: '달콤한 과즙이 풍부한 고급 메론입니다.',
//   },
//   {
//     id: 5,
//     name: '레몬',
//     price: 6000,
//     imageUrl:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuBvRXhLnPiVFDF3ORmn-dyn_b6gGc8EZTvDoORdN14GpfswaNuOC9QrJZRtBb9E6oquyucU3B3NyQQob5ov_18mQCBjpdctMz_6cvwmzwEnZbdbvn5guOtYo2B77ZIoyrj25EL61HOZ0tvTibf1fvcr0dANs3Z5VXIU0Xtx-6GGSe-wQpgt81CsPxOMdWIpNkr3-RKfKkGD6lGzi7n9g0HS5n_V8FjOBsFNuvU0foFjVPoqSVib1Ik3xrXxSxO_N_0YiBa5oFSkAw',
//     category: 'CITRUS',
//     releaseDate: '2024-04-20',
//     sales: 50,
//     stock: 2,
//     description: '상큼한 맛으로 요리에 활용하기 좋은 레몬입니다.',
//   },
//   {
//     id: 6,
//     name: '사파이어포도',
//     price: 9000,
//     imageUrl:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuDUbmG4RuxsIR4-u0N567l9bPrPy5t3REHTPE25ZIThsEDQ4BMdzkaIvmmy72YF_2nC6l7HfcePv9Hm2rV7-ywnvskqlPGpl9jJU6-t45b_3jAZl3PHuLJp-ZEuuoVR-rzReRmnvOVBbv9T69toTG3HYNmhzTG4TvCl4XHLXpL5Dwq7Kq-eZ9mKmBv-U7q2fvz7fh7TbaXH4fisgvOa0DeTmvK42V45CffCZwIO3v9W6RSajTTbZw5S0CJcpq9IDKnSQ6FXHvSNWA',
//     category: 'BERRIES',
//     releaseDate: '2024-06-18',
//     sales: 150,
//     stock: 0,
//     description: '씨가 없고 달콤한 사파이어 포도입니다.',
//   },
// ];

// const descriptionMockMap = {
//   1: 'https://your-bucket.s3.ap-northeast-2.amazonaws.com/detail/redapple_detail.jpg',
//   2: 'https://your-bucket.s3.ap-northeast-2.amazonaws.com/detail/green_grape_detail.jpg',
//   3: 'https://your-bucket.s3.ap-northeast-2.amazonaws.com/detail/greenapple_detail.jpg',
//   4: 'https://your-bucket.s3.ap-northeast-2.amazonaws.com/detail/melon_detail.jpg',
//   5: 'https://your-bucket.s3.ap-northeast-2.amazonaws.com/detail/lemon_detail.jpg',
//   6: 'https://your-bucket.s3.ap-northeast-2.amazonaws.com/detail/sapphire_grape_detail.jpg',
// };

// 상품 상세 설명 이미지 (단일 URL) 가져오기
// export const getProductDescription = async id => {
//   const url = descriptionMockMap[id];
//   return { data: url };
// };

// 실제 연동용 Axios 예시 (AWS S3 연동 시 사용 예정)
export const getProductDescription = id => {
  return api.get(`/products/${id}/description`);
};

// 고정 path 기반 API - 의미 있는 상품 섹션은 path로 구분하는 것이 실무적으로 명확

// 베스트 상품 조회(최근 한달 기준 판매량 내림차순으로 백엔드에서 정렬)
export const getBestProducts = () => api.get('/products/best');
// 임시 데이터 테스트용
// export const getBestProducts = async () => {
//   const data = [...mockData].sort((a, b) => b.sales - a.sales);
//   return { data };
// };

// 신상품 조회(출시일 기준 내림차순 정렬된 데이터)
export const getNewProducts = () => api.get('/products/new');
// 임시 데이터 테스트용
// export const getNewProducts = async () => {
//   const data = [...mockData].sort(
//     (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate),
//   );
//   return { data };
// };

// 이달의 과일 조회(백엔드에서 날짜 필터링 처리)
export const getMonthlyProducts = () => api.get('/products/monthly');
// 임시 데이터 테스트용 (2024년 6월 기준)
// export const getMonthlyProducts = async () => {
//   const now = new Date();
//   const month = now.getMonth() + 1;
//   const year = now.getFullYear();

//   const data = mockData.filter(item => {
//     const d = new Date(item.releaseDate);
//     return d.getFullYear() === year && d.getMonth() + 1 === month;
//   });

//   return { data };
// };
// 동적 파라미터 기반 API - 카테고리별 상품을 query string으로 조회

// 임시데이터
// export const getProductsByCategory = async (category, sort) => {
//   let data = [...mockData]; // 복사해서 정렬

//   data = data.filter(item => item.category === category);

//   if (sort === 'price_asc') data.sort((a, b) => a.price - b.price);
//   if (sort === 'price_desc') data.sort((a, b) => b.price - a.price);

//   return { data };
// };

// 추후 백엔드 연동 시 아래 코드로 교체
export const getProductsByCategory = (category, sort) =>
  api.get('/products', {
    params: {
      category,
      ...(sort && { sort }), // sort가 있을 때만 포함
    },
  });

// 상품 상세 정보 조회 API

// 상품 상세 정보 조회 임시 데이터용 로직
// export const getProductDetail = async id => {
//   const product = mockData.find(p => p.id === parseInt(id));
//   return { data: product };
// };

// 추후 백엔드 연동 시 아래 코드로 교체
export const getProductDetail = id => api.get(`/products/${id}`);

// 이미지 기반 상세 설명만 사용할거라 아래 코드는 필요 없지만, 추후 변경을 고려하여 그대로 둠
// // 상세 설명 API 함수
// export const getProductDescription = async id => {
//   const description = descriptionMockMap[id];
//   return { data: description };

//   // 실제 백엔드 연동 시 아래처럼 대체
//   // return api.get(`/products/${id}/description`);
// };
