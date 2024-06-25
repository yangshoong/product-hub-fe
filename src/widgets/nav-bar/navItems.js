const navItems = [
  { label: '성분관리', subItems: [
    '성분조회', '성분등록'
  ] },
  { label: '제품관리', subItems: [
    { label: '제품조회', link: '/products' },
    { label: '제품등록', link: '/product-registration' }
  ] },
  { label: '자료생성', subItems: ['자료조회', '자료등록'] },
  { label: '내부감사', subItems: ['아모레퍼시픽', 'GIVAUDAN'] }
];

export default navItems;