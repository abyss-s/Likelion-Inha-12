# 갤러리 프로젝트

- **DOCS** : http://3.36.127.43:8080/swagger-ui/#/GalleryController
- 실제 동작하는 간단한 멀티페이지 웹 어플리케이션을 개발할 수 있다.
- 백엔드와 데이터를 주고받기 위한 axios로 REST API 통신을 능숙하게 다룰 수 있다.

## ❍ 라이브러리

- React Router ([react-router-dom@6](https://reactrouter.com/docs/en/v6/getting-started/installation)): `$ npm install react-router-dom`
- Styled Components ([styled-components](https://styled-components.com/docs/basics#installation)): `$ npm install axios`
- Axios ([axios](https://axios-http.com/kr/docs/intro)): `$ npm install styled-components`

## ❍ 동작 영상

![영상](./record.gif)

## ❍ 고찰 및 결과

### 설계에 특별히 신경 쓴 부분

최대한 샘플 이미지와 비슷하게 만들기 위해 노력했습니다!

- 폴더 구조
  - API, 이미지, 컴포넌트, 페이지 별로 구분하여 정리
- 컴포넌트 설계
  - Home: 메인페이지, Profile + CardList으로 분리
  - CardList: Card를 그리드 형식으로 배치
  - CommentList: Comment를 리스트 형식으로 배치
  - goToArticle: 각 Article 페이지로 라우팅
  - Button: Notfound 뒤로가기 버튼, 댓글 게시 및 삭제 버튼

#### 어려웠던 점

REST API 사용이 익숙치 않아서 데이터 불러오는데 무수한 실패를 겪었습니다.  
특히 id가 문자열 image + 숫자로 이루어져 있어 문제가 발생했고,  
이를 분리하는 함수를 만들어서 숫자만 따로 빼는 방식으로 문제를 해결했습니다.

## ❍ 참고한 자료

- [axios, setState 동기 비동기](https://velog.io/@masibasi/react-asyncawait%EC%9D%84-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0.-axios-setState-%EB%8F%99%EA%B8%B0-%EB%B9%84%EB%8F%99%EA%B8%B0)
- [문자열에서 숫자만 추출하기](https://stackoverflow.com/questions/30607419/return-only-numbers-from-string)
- [CSS 중앙정렬](https://www.freecodecamp.org/korean/news/cssro-mueosideun-jungang-jeongryeolhaneun-bangbeob-div-tegseuteu-deung/)
