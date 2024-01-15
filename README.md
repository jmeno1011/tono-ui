# Tono-UI
- 라이브러리를 사용하지 않고 만들 UI들을 모아둡니다.
1. UI모양
2. 코드
위 두가지를 볼 수 있도록 합니다.

- react-router-dom은 @6.3.0 버전을 사용합니다.
- module.css를 이용합니다.
- px과 rem을 섞어 사용합니다.
- :root에 여러 색상이나 자주쓰는 css를 놔둘겁니다.

##### redux 추가
- npm i @reduxjs/toolkit react-redux redux-logger redux-persist redux-thunk 
- npm i --save-dev @types/redux-logger @types/redux-persist

##### color 고르는곳
- https://m2.material.io/inline-tools/color/

#### p-dashboard redux
- userCode : user의 CODE
- user : user의 info가 있음
- userList : user의 info 목록들
- surveyResult : user의 survey 결과가 있음

#### p-dashboard 페이지별 설명
- p-dashboard
  - summary: 유저의 간략한 정보의 목록을 보여주는 페이지
  - description: 선택된 유저의 대한 survey내용을 그래프로 표현
- survey
  - survey의 결과중 레벨별 점수를 등록하는 목록을 준비하여 저장시키기
  - 유저를 선택 후 survey를 직접 선택하여 결과를 저장하는 방식을 보여줌
